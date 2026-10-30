import { useState } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'

import { profile, socials } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Card className="overflow-hidden border-border/60 bg-gradient-to-br from-primary/5 via-card to-fuchsia-500/5 py-0">
          <CardContent className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">
                Contacto
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Construimos algo juntos?
              </h2>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Cuéntame sobre tu proyecto, producto o equipo. Respondo
                normalmente en menos de 24 horas.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </span>
                  {profile.email}
                </a>
                <div className="flex items-center gap-1 pt-2">
                  {socials.map((social) => (
                    <Button
                      key={social.label}
                      asChild
                      variant="ghost"
                      size="icon"
                      className="size-9 rounded-full text-muted-foreground hover:text-foreground"
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

            {sent ? (
              <div className="flex flex-col items-start justify-center gap-3 rounded-xl border border-border/60 bg-background/60 p-8">
                <CheckCircle2 className="size-10 text-emerald-500" />
                <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
                <p className="text-sm text-muted-foreground">
                  Gracias por escribir. Me pondré en contacto contigo pronto.
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" name="name" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="¿En qué puedo ayudarte?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame más sobre tu proyecto..."
                    className="min-h-28"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="size-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
