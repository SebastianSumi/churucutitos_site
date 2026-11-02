import { useEffect, useState } from 'react'
import { Menu, MountainSnow, X } from 'lucide-react'

import { navLinks, profile } from '@/data/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-sky-100 bg-white/85 shadow-[0_10px_40px_-24px_rgba(14,116,144,0.4)] backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-2.5 font-semibold">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 text-white shadow-lg shadow-sky-500/25 transition-transform group-hover:-translate-y-0.5">
            <MountainSnow className="size-5" />
          </span>
          <span className="font-display text-lg tracking-tight">
            {profile.shortName}
            <span className="text-sky-500"> dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-4 text-white shadow-lg shadow-sky-500/25 hover:from-sky-600 hover:to-cyan-600 sm:inline-flex"
          >
            <a href="#contacto">Hablemos</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-sky-100 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          open ? 'max-h-96 border-t' : 'max-h-0',
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white"
          >
            <a href="#contacto" onClick={() => setOpen(false)}>
              Hablemos
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
