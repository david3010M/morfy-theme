"use client"

import * as React from "react"

import { buildRegistryTheme, DEFAULT_CONFIG } from "@/registry/config"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/styles/base-nova/ui/button"
import {
  applyCustomColor,
  buildThemeCss,
  normalizeHex,
} from "@/app/(app)/(create)/lib/custom-color"
import { useDesignSystemSearchParams } from "@/app/(app)/(create)/lib/search-params"

const FALLBACK_COLOR = "#6366f1"

export function CustomColorPicker() {
  const [params, setParams] = useDesignSystemSearchParams()
  const activeHex = normalizeHex(params.customColor)
  const [draft, setDraft] = React.useState(activeHex ?? "")
  const [hasCopied, setHasCopied] = React.useState(false)

  // Keep the text field in sync when the color changes from elsewhere
  // (reset, undo/redo, opening a shared URL).
  React.useEffect(() => {
    setDraft(activeHex ?? "")
  }, [activeHex])

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  // Dragging the native picker fires continuously: replace, don't push history.
  const commit = React.useCallback(
    (value: string | null) => {
      void setParams({ customColor: value }, { history: "replace" })
    },
    [setParams]
  )

  const handleCopyCss = React.useCallback(() => {
    const built = buildRegistryTheme({
      ...DEFAULT_CONFIG,
      baseColor: params.baseColor,
      theme: params.theme,
      chartColor: params.chartColor,
      menuAccent: params.menuAccent,
      radius: params.radius,
    })
    const css = buildThemeCss(
      applyCustomColor(
        built.cssVars,
        params.customColor,
        params.menuAccent === "bold"
      )
    )

    copyToClipboardWithMeta(css, { name: "copy_theme_code" })
    setHasCopied(true)
  }, [params])

  return (
    <div className="flex w-36 shrink-0 flex-col gap-2 rounded-xl p-3 ring-1 ring-foreground/10 md:w-full md:rounded-lg md:px-2.5 md:py-2">
      <div className="text-xs text-muted-foreground">Custom color</div>
      <div className="flex items-center gap-2">
        <input
          type="color"
          aria-label="Pick a custom primary color"
          value={activeHex ? `#${activeHex}` : FALLBACK_COLOR}
          onChange={(event) => commit(normalizeHex(event.target.value))}
          className="size-6 shrink-0 cursor-pointer rounded-full border-0 bg-transparent p-0"
        />
        <input
          type="text"
          inputMode="text"
          spellCheck={false}
          placeholder="#6366f1"
          aria-label="Custom primary color hex"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value)
            const hex = normalizeHex(event.target.value)
            if (hex) {
              commit(hex)
            }
          }}
          className="min-w-0 flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        {activeHex && (
          <button
            type="button"
            aria-label="Clear custom color"
            onClick={() => commit(null)}
            className="shrink-0 text-xs text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyCss}
        className="w-full bg-transparent! text-xs!"
      >
        {hasCopied ? "Copied" : "Copy CSS"}
      </Button>
    </div>
  )
}
