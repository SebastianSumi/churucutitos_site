import { useState } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'

import { profile, socials } from '@/data/site'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MountainScene } from '@/components/decor/mountain-scene'
import { Snow } from '@/components/decor/snow'
import { WindLines } from '@/components/decor/wind-lines'

const projectTypes = [
  'Aplicación web',
  'Módulo a medida',
  'Landing page',
  'Mantenimiento',
  'Otro',
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 -z-10 size-96 rounded-full bg-cyan-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 -z-10 size-96 rounded-full bg-fuchsia-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[2.5rem] border border-sky-100 bg-white shadow-alpine">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-cyan-600 to-emerald-500 p-8 text-white sm:p-10">
              <WindLines className="absolute inset-x-0 top-10 h-40 opacity-60" />
              <Snow className="pointer-events-none absolute inset-0 overflow-hidden opacity-70" />

              <div className="relative z-10 space-y-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-sky-100 uppercase">
                  Contacto
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿Construimos algo juntos?
                </h2>
                <p className="max-w-md leading-relaxed text-sky-50">
                  Cuéntanos sobre tu proyecto, tu producto o ese módulo que te
                  falta. Respondemos normalmente en menos de 24 horas.
                </p>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3 text-sky-50 transition-colors hover:text-white"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                      <Mail className="size-4" />
                    </span>
                    {profile.email}
                  </a>
                  <div className="flex items-center gap-3 text-sky-50">
                    <span className="grid size-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                      <MapPin className="size-4" />
                    </span>
                    {profile.location}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-300" />
                  {profile.availability}
                </div>

                <div className="flex items-center gap-1 pt-2">
                  {socials.map((social) => (
                    <Button
                      key={social.label}
                      asChild
                      variant="ghost"
                      size="icon"
                      className="size-9 rounded-full text-sky-50 hover:bg-white/15 hover:text-white"
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

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 opacity-50"
              >
                <MountainScene withSun={false} />
              </div>
            </div>

            <div className="p-8 sm:p-10">
              {sent ? (
                <div className="flex h-full flex-col items-start justify-center gap-3">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                    Gracias por escribir. El equipo revisará tu mensaje y te
                    responderá muy pronto.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 rounded-full border-sky-200 hover:bg-sky-50"
                    onClick={() => setSent(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Cuéntanos de tu proyecto
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Los campos con * son obligatorios.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        autoComplete="name"
                        required
                        className="rounded-xl border-slate-200 bg-slate-50 focus-visible:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        autoComplete="email"
                        required
                        className="rounded-xl border-slate-200 bg-slate-50 focus-visible:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Tipo de proyecto</Label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        defaultValue=""
                        className="h-9 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 pr-9 text-sm text-slate-700 shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos qué quieres construir, plazos y cualquier detalle útil..."
                      className="min-h-32 rounded-xl border-slate-200 bg-slate-50 focus-visible:bg-white"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25 hover:from-sky-600 hover:to-cyan-600"
                  >
                    <Send className="size-4" />
                    Enviar mensaje
                  </Button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
                    Este formulario es una demo frontend.
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-0.5 font-medium text-sky-600 hover:text-sky-700"
                    >
                      Escríbenos directo
                      <ArrowUpRight className="size-3" />
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
