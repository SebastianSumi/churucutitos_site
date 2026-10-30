import { ArrowUpRight, Code2 } from 'lucide-react'

import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Proyectos
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trabajo seleccionado
            </h2>
            <p className="text-muted-foreground">
              Una muestra de productos en los que he trabajado, desde
              dashboards de datos hasta design systems.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href="https://Code2.com" target="_blank" rel="noreferrer">
              <Code2 className="size-4" />
              Ver Code2
            </a>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden pt-0 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={cn(
                  'relative flex h-40 items-center justify-center border-b bg-gradient-to-br',
                  project.accent,
                )}
              >
                <span className="text-2xl font-bold tracking-tight text-foreground/70">
                  {project.title}
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,var(--card)_120%)] opacity-40" />
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild size="sm">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Ver proyecto
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <Code2 className="size-4" />
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
