import { profile, skillGroups, stats } from '@/data/portfolio'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Sobre mí
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Código con intención, productos con impacto
            </h2>
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="py-4">
                  <CardContent className="px-4">
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <Card key={group.title} className="gap-4 py-5">
                  <CardHeader className="px-4">
                    <CardTitle className="text-sm">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1.5 px-4">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
