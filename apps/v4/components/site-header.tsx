import Link from "next/link"
import { SwatchBook } from "lucide-react"

import { ModeSwitcher } from "@/components/mode-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="px-4 md:px-6">
        <div className="flex h-(--header-height) items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-md bg-brand-copper text-white"
              >
                <SwatchBook className="size-4.5" />
              </span>
              <span className="text-base font-semibold tracking-tight">
                MorfyTheme
              </span>
            </Link>
            <span
              aria-hidden
              className="hidden h-5 w-px shrink-0 bg-border sm:block"
            />
            <p className="hidden truncate text-sm text-muted-foreground sm:block">
              Creador de temas
            </p>
          </div>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}
