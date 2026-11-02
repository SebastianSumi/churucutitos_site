import { ArrowDownRight, ArrowUpRight, MapPin, Rocket, Sparkles } from 'lucide-react'

import { moduleStatus, modules, profile, stats } from '@/data/site'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MountainScene } from '@/components/decor/mountain-scene'
import { Snow } from '@/components/decor/snow'
import { WindLines } from '@/components/decor/wind-lines'

const previewModules = modules.slice(0, 3)

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-40 sm:pt-40 sm:pb-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -left-32 -z-10 size-[34rem] rounded-full bg-sky-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 -z-10 size-[28rem] rounded-full bg-cyan-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-1/4 -z-10 size-72 rounded-full bg-fuchsia-200/30 blur-3xl"
      />

      <WindLines className="absolute inset-x-0 top-24 -z-10 h-56 opacity-70" />
      <Snow />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full border-sky-200 bg-white/80 px-3 py-1.5 text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </Badge>

          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-sky-600 uppercase">
              {profile.role} · {profile.location}
            </p>
            <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-slate-900 text-balance sm:text-6xl">
              Software que <span className="text-gradient">mueve montañas</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 text-white shadow-lg shadow-sky-500/25 hover:from-sky-600 hover:to-cyan-600"
            >
              <a href="#modulos">
                Explorar módulos
                <ArrowDownRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-sky-200 bg-white/70 px-6 text-slate-700 backdrop-blur hover:border-sky-300 hover:bg-sky-50"
            >
              <a href="#contacto">
                Hablemos
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="size-4 text-sky-500" />
            Desde {profile.location}, para todo el mundo.
          </div>

          <dl className="grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 pt-2 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-sky-100 pl-3">
                <dt className="font-display text-2xl font-bold text-slate-900">
                  {stat.value}
                </dt>
                <dd className="text-xs text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-float-slow">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-400/30 via-cyan-300/20 to-fuchsia-300/25 blur-2xl"
          />

          <div className="relative rounded-[2rem] border border-white/80 bg-white/70 p-2 shadow-alpine backdrop-blur">
            <div className="overflow-hidden rounded-[1.55rem] border border-sky-100 bg-white">
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-300">
                <MountainScene
                  withSun={false}
                  className="absolute inset-x-0 bottom-0 h-32"
                />
                <Snow className="pointer-events-none absolute inset-0 overflow-hidden opacity-80" />

                <div className="relative flex items-start justify-between p-5">
                  <div className="flex items-center gap-2 text-white">
                    <span className="grid size-8 place-items-center rounded-lg bg-white/20 backdrop-blur">
                      <Sparkles className="size-4" />
                    </span>
                    <span className="font-display text-sm font-semibold">
                      {profile.appUrl}
                    </span>
                  </div>
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase backdrop-blur">
                    live
                  </span>
                </div>

                <div className="relative px-5">
                  <p className="max-w-[13rem] font-display text-xl leading-tight font-bold text-white drop-shadow-sm">
                    Todo tu stack, en una sola cumbre.
                  </p>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    Módulos activos
                  </p>
                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700">
                    {previewModules.length} de {modules.length}
                  </span>
                </div>

                <ul className="space-y-2">
                  {previewModules.map((module) => {
                    const status = moduleStatus[module.status]
                    return (
                      <li
                        key={module.id}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5"
                      >
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${module.accent} text-white`}
                        >
                          <module.icon className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-800">
                            {module.name}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {module.category}
                          </p>
                        </div>
                        <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                          <span
                            className={`size-1.5 rounded-full ${status.dot}`}
                          />
                          {status.label}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[11px] text-slate-500">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Cada módulo se conecta con el resto.
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2.5 text-xs font-medium text-slate-600 shadow-xl shadow-sky-500/10 backdrop-blur sm:flex">
            <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
              <Rocket className="size-3.5" />
            </span>
            Deploy listo
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 opacity-90 sm:h-44"
      >
        <MountainScene withSun={false} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
    </section>
  )
}
