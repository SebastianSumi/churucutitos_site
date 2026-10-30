import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Contact } from '@/components/sections/contact'
import { SiteFooter } from '@/components/site-footer'

function App() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
