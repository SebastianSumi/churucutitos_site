import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Boxes,
  Home,
  LayoutGrid,
  Lock,
  Mail,
  Plus,
  Search,
  Users,
  Workflow,
} from 'lucide-react'

import {
  moduleCategories,
  moduleStatus,
  modules,
  profile,
  type ModuleCategory,
} from '@/data/site'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Filter = 'Todos' | ModuleCategory

const appNav = [
  { label: 'Inicio', href: '#', icon: Home, active: false },
  { label: 'Módulos', href: '#modulos', icon: LayoutGrid, active: true },
  { label: 'Equipo', href: '#equipo', icon: Users, active: false },
  { label: 'Proceso', href: '#proceso', icon: Workflow, active: false },
  { label: 'Contacto', href: '#contacto', icon: Mail, active: false },
]

export function Modules() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return modules.filter((module) => {
      const matchesFilter = filter === 'Todos' || module.category === filter
      const matchesQuery =
        term.length === 0 ||
        [module.name, module.description, module.category, ...module.tags]
          .join(' ')
          .toLowerCase()
          .includes(term)
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <section id="modulos" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-sky-50 via-white to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.22em] text-sky-600 uppercase">
              La app
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Un solo lugar para <span className="text-gradient">todos nuestros módulos</span>
            </h2>
            <p className="leading-relaxed text-slate-600">
              Cada herramienta que desarrollamos se suma a esta app. Explora lo
              que ya está en el aire y lo que viene subiendo la montaña.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur">
            <span className="grid size-9 place-items-center rounded-xl bg-sky-50 text-sky-600">
              <Boxes className="size-4" />
            </span>
            <div>
              <p className="font-semibold text-slate-800">Base modular lista</p>
              <p className="text-xs text-slate-500">Conecta nuevos módulos sin fricción.</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-alpine">
          <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-rose-400" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-400">
              <Lock className="size-3 text-emerald-500" />
              <span className="truncate">
                {profile.appUrl}/modulos
              </span>
            </div>
            <span className="hidden size-6 place-items-center rounded-md text-slate-300 sm:grid">
              <LayoutGrid className="size-4" />
            </span>
          </div>

          <div className="grid lg:grid-cols-[13rem_1fr]">
            <aside className="hidden flex-col justify-between border-r border-slate-100 bg-slate-50/50 p-4 lg:flex">
              <div className="space-y-6">
                <p className="px-2 text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Workspace
                </p>
                <nav className="space-y-1">
                  {appNav.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                        item.active
                          ? 'bg-white text-sky-700 shadow-sm ring-1 ring-sky-100'
                          : 'text-slate-500 hover:bg-white hover:text-slate-700',
                      )}
                    >
                      <item.icon className="size-4" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 p-3.5 text-white">
                <p className="text-sm font-semibold">¿Falta un módulo?</p>
                <p className="mt-1 text-xs text-sky-50">
                  Cuéntanos qué necesitas y lo construimos.
                </p>
                <Button
                  asChild
                  size="sm"
                  className="mt-3 w-full rounded-lg bg-white text-sky-700 hover:bg-sky-50"
                >
                  <a href="#contacto">
                    <Plus className="size-3.5" />
                    Proponer
                  </a>
                </Button>
              </div>
            </aside>

            <div className="p-5 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    Módulos
                  </h3>
                  <p className="text-sm text-slate-500">
                    {filtered.length} de {modules.length} herramientas visibles.
                  </p>
                </div>
                <div className="relative w-full sm:max-w-56">
                  <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar módulo..."
                    aria-label="Buscar módulo"
                    className="rounded-full border-slate-200 bg-slate-50 pl-9 text-sm focus-visible:bg-white"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {moduleCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={filter === category}
                    className={cn(
                      'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all',
                      filter === category
                        ? 'border-transparent bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-sky-200 hover:text-sky-700',
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filtered.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {filtered.map((module) => {
                    const status = moduleStatus[module.status]
                    const isSoon = module.status === 'soon'
                    return (
                      <article
                        key={module.id}
                        className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={cn(
                              'grid size-10 place-items-center rounded-xl bg-gradient-to-br text-white shadow-sm',
                              module.accent,
                            )}
                          >
                            <module.icon className="size-5" />
                          </span>
                          <span
                            className={cn(
                              'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold',
                              status.badge,
                            )}
                          >
                            <span className={cn('size-1.5 rounded-full', status.dot)} />
                            {status.label}
                          </span>
                        </div>

                        <h4 className="mt-3.5 font-display text-base font-semibold text-slate-900">
                          {module.name}
                        </h4>
                        <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">
                          {module.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {module.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="rounded-md bg-slate-50 font-normal text-slate-500"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-4 border-t border-slate-100 pt-3">
                          {isSoon ? (
                            <span className="text-xs font-medium text-slate-400">
                              En el horno…
                            </span>
                          ) : (
                            <a
                              href={module.href ?? '#modulos'}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-700"
                            >
                              Abrir módulo
                              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          )}
                        </div>
                      </article>
                    )
                  })}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-10 text-center">
                  <p className="font-display text-base font-semibold text-slate-700">
                    Aún no hay módulos con ese filtro
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Prueba otra categoría o propón el módulo que necesitas.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 rounded-full"
                    onClick={() => {
                      setFilter('Todos')
                      setQuery('')
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-5 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Este espacio crecerá con cada módulo que lancemos.</p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              Proponer un módulo
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
