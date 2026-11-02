import { ArrowUpRight, GitBranch } from 'lucide-react'

import { profile, stats, team, values } from '@/data/site'
import { Badge } from '@/components/ui/badge'

export function Team() {
  return (
    <section id="equipo" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-sky-600 uppercase">
              Equipo
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cuatro cabezas, <span className="text-gradient">una misma cumbre</span>
            </h2>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-800">
              El estudio en números
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-bold text-sky-600">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-xs text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-sm">
                <value.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-slate-900">
              Quiénes están detrás
            </h3>
            <p className="text-sm text-slate-500">
              Un equipo pequeño, directo y sin capas de más.
            </p>
          </div>
          <span className="hidden rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 sm:inline-flex">
            Remoto · Andes
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-16 -right-16 size-32 rounded-full bg-gradient-to-br ${member.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`}
              />
              <div
                className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${member.accent} font-display text-lg font-bold text-white shadow-lg`}
              >
                {member.initials}
              </div>
              <h4 className="mt-4 font-display text-base font-semibold text-slate-900">
                {member.name}
              </h4>
              <p className="text-sm text-sky-600">{member.role}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {member.focus.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-md bg-slate-50 font-normal text-slate-500"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <a
                href={member.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Perfil de ${member.name}`}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 transition-colors hover:text-sky-600"
              >
                <GitBranch className="size-3.5" />
                Ver perfil
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
