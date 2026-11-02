import { Wind } from 'lucide-react'

import { processSteps } from '@/data/site'
import { WindLines } from '@/components/decor/wind-lines'

export function Process() {
  return (
    <section id="proceso" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50/60 to-white"
      />
      <WindLines className="absolute inset-x-0 top-10 -z-10 h-40 opacity-50" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky-600 uppercase">
            Proceso
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            De la base a la cumbre, <span className="text-gradient">sin atajos</span>
          </h2>
          <p className="leading-relaxed text-slate-600">
            Un camino claro, con entregas visibles y sin sorpresas. Así
            trabajamos cada proyecto y cada módulo.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute top-11 right-0 left-0 hidden border-t border-dashed border-sky-200 lg:block"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="group relative rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20">
                    <step.icon className="size-5" />
                  </span>
                  <span className="font-display text-2xl font-bold text-sky-100 transition-colors group-hover:text-sky-200">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-sky-100 bg-white/70 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur sm:items-center">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-600">
            <Wind className="size-4" />
          </span>
          <p>
            Sprints cortos, entregas visibles y código que el equipo puede
            mantener. Nada de cajas negras.
          </p>
        </div>
      </div>
    </section>
  )
}
