// Custom color override: replaces the primary color of whatever theme is
// selected, keeping every other token (base color, radius, fonts…) intact.

type Oklch = { l: number; c: number; h: number }
type CssVars = Record<string, string>

const HEX_REGEX = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i

/** Returns a lowercase 6-digit hex without "#", or null when invalid. */
export function normalizeHex(input?: string | null) {
  if (!input) {
    return null
  }

  const match = HEX_REGEX.exec(input.trim())
  if (!match) {
    return null
  }

  let hex = match[1].toLowerCase()
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("")
  }

  return hex
}

function srgbToLinear(channel: number) {
  return channel <= 0.04045
    ? channel / 12.92
    : Math.pow((channel + 0.055) / 1.055, 2.4)
}

export function hexToOklch(hex: string): Oklch {
  const value = normalizeHex(hex) ?? "000000"
  const r = srgbToLinear(parseInt(value.slice(0, 2), 16) / 255)
  const g = srgbToLinear(parseInt(value.slice(2, 4), 16) / 255)
  const b = srgbToLinear(parseInt(value.slice(4, 6), 16) / 255)

  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)

  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s

  const c = Math.sqrt(A * A + B * B)
  // Achromatic colors have no meaningful hue.
  const h = c < 0.0004 ? 0 : ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360

  return { l: L, c, h }
}

function formatOklch({ l, c, h }: Oklch) {
  const round = (n: number, digits: number) => Number(n.toFixed(digits))
  return `oklch(${round(l, 3)} ${round(c, 3)} ${round(h, 2)})`
}

const FOREGROUND_ON_LIGHT = "oklch(0.205 0 0)"
const FOREGROUND_ON_DARK = "oklch(0.985 0 0)"

function foregroundFor(color: Oklch) {
  return color.l > 0.62 ? FOREGROUND_ON_LIGHT : FOREGROUND_ON_DARK
}

/**
 * Returns the vars that a custom color overrides, for light and dark mode.
 * In dark mode the lightness is clamped so the color stays readable on dark
 * surfaces while keeping the hue and chroma the user picked.
 */
export function buildCustomColorVars(hex: string, boldAccent = false) {
  const light = hexToOklch(hex)
  const dark: Oklch = { ...light, l: Math.min(Math.max(light.l, 0.62), 0.85) }

  const toVars = (color: Oklch): CssVars => {
    const value = formatOklch(color)
    const foreground = foregroundFor(color)
    return {
      primary: value,
      "primary-foreground": foreground,
      ring: value,
      "sidebar-primary": value,
      "sidebar-primary-foreground": foreground,
      "sidebar-ring": value,
      ...(boldAccent
        ? { accent: value, "accent-foreground": foreground }
        : {}),
    }
  }

  return { light: toVars(light), dark: toVars(dark) }
}

type ThemeCssVars = {
  theme?: CssVars
  light?: CssVars
  dark?: CssVars
}

export function applyCustomColor<T extends ThemeCssVars>(
  cssVars: T,
  customColor: string | null | undefined,
  boldAccent = false
): T {
  const hex = normalizeHex(customColor)
  if (!hex) {
    return cssVars
  }

  const overrides = buildCustomColorVars(hex, boldAccent)
  return {
    ...cssVars,
    light: { ...cssVars.light, ...overrides.light },
    dark: { ...cssVars.dark, ...overrides.dark },
  }
}

function toRule(selector: string, vars?: CssVars) {
  const declarations = Object.entries(vars ?? {})
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n")

  return `${selector} {\n${declarations}\n}`
}

/** CSS ready to paste into globals.css (shadcn's :root / .dark layout). */
export function buildThemeCss(cssVars: ThemeCssVars) {
  return [
    toRule(":root", { ...(cssVars.theme ?? {}), ...(cssVars.light ?? {}) }),
    toRule(".dark", cssVars.dark),
  ].join("\n\n")
}
