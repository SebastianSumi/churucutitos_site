import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Modules } from '@/components/sections/modules'
import { Team } from '@/components/sections/team'
import { Process } from '@/components/sections/process'
import { Contact } from '@/components/sections/contact'
import { SiteFooter } from '@/components/site-footer'

function App() {
  return (
    <div className="min-h-svh overflow-x-hidden">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Modules />
        <Team />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
