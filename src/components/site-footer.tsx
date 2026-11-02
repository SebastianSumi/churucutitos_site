import { ArrowUp, Mail, MapPin, MountainSnow } from 'lucide-react'

import { navLinks, profile, socials } from '@/data/site'
import { Button } from '@/components/ui/button'
import { MountainScene } from '@/components/decor/mountain-scene'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-sky-100 bg-gradient-to-b from-white to-sky-50/70">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5 font-semibold">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 text-white shadow-lg shadow-sky-500/25">
                <MountainSnow className="size-5" />
              </span>
              <span className="font-display text-lg tracking-tight text-slate-900">
                {profile.shortName}
                <span className="text-sky-500"> dev</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="size-9 rounded-full text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
              Explorar
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-sky-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-sky-600"
                >
                  <Mail className="size-4 text-sky-500" />
                  {profile.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-sky-500" />
                {profile.location}
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {profile.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sky-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="inline-flex items-center gap-1.5">
              Hecho entre montañas, nieve y viento
              <MountainSnow className="size-3.5 text-sky-500" />
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 font-medium text-sky-600 transition-colors hover:text-sky-700"
            >
              Volver arriba
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 opacity-15"
      >
        <MountainScene withSun={false} />
      </div>
    </footer>
  )
}
