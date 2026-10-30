import { ArrowDownRight, Download, MapPin } from 'lucide-react'

import { profile, socials } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-0 -z-10 size-72 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-7">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full border-border/60 px-3 py-1"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
              {profile.role}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#proyectos">
                Ver proyectos
                <ArrowDownRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contacto">
                <Download className="size-4" />
                Descargar CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {profile.location}
            </div>
            <span className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full text-muted-foreground hover:text-foreground"
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
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rotate-6 rounded-3xl bg-gradient-to-br from-primary/30 to-fuchsia-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-fuchsia-500 text-2xl font-bold text-white">
                AR
              </div>
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="rounded-lg bg-muted/60 p-3">
                <span className="text-muted-foreground">const</span>{' '}
                <span className="text-primary">enfoque</span> = {'{'}
              </div>
              <div className="space-y-1 rounded-lg bg-muted/60 p-3 pl-6 text-muted-foreground">
                <p>diseño: 'limpio y funcional',</p>
                <p>código: 'simple y escalable',</p>
                <p>experiencia: 'sin fricción',</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3">{'}'}</div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 p-3">
                <p className="text-lg font-bold">6+</p>
                <p className="text-xs text-muted-foreground">años de exp.</p>
              </div>
              <div className="rounded-xl border border-border/60 p-3">
                <p className="text-lg font-bold">40+</p>
                <p className="text-xs text-muted-foreground">proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
