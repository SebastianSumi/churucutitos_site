import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/hooks/use-theme'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Cambiar tema"
      className="rounded-full"
    >
      {theme === 'dark' ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  )
}
