import { profile, socials } from '@/data/portfolio'
import { Button } from '@/components/ui/button'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
            AR
          </span>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos
          reservados.
        </div>
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
    </footer>
  )
}
