import { CheckCircle2 } from 'lucide-react'

import { experiences } from '@/data/portfolio'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Experiencia
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dónde he trabajado
          </h2>
          <p className="text-muted-foreground">
            Roles en los que he crecido construyendo productos y equipos.
          </p>
        </div>

        <div className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
          {experiences.map((experience) => (
            <div key={experience.role} className="relative">
              <span className="absolute top-6 -left-[31px] size-3 rounded-full border-2 border-background bg-primary sm:-left-[39px]" />
              <Card>
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{experience.role}</h3>
                    <Badge variant="outline" className="font-normal">
                      {experience.period}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {experience.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {experience.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-2">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
