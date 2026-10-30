import {
  Code2,
  Briefcase,
  Mail,
  AtSign,
  type LucideIcon,
} from 'lucide-react'

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export type Project = {
  title: string
  description: string
  tags: string[]
  href: string
  repo: string
  accent: string
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export const profile = {
  name: 'Churucutitos-dev',
  role: 'Equiipo de desarrolladores Full Stack',
  tagline:
    'Construyo productos digitales rápidos, accesibles y con una experiencia de usuario impecable.',
  location: 'Juliaca Perú, PE',
  email: 'comisions@churucutitos.dev',
  availability: 'Disponibles para nuevos proyectos',
  about: [
    'Soy desarrollador full stack con más de 6 años de experiencia creando aplicaciones web de principio a fin. Me especializo en el ecosistema de React y TypeScript, con foco en rendimiento, accesibilidad y diseño de interfaces.',
    'Disfruto trabajar cerca del producto, entender los problemas reales de las personas y transformarlos en soluciones simples que escalan. Cuando no estoy programando, probablemente estoy contribuyendo a proyectos open source o probando café de especialidad.',
  ],
}

export const socials: SocialLink[] = [
  { label: 'Code2', href: 'https://Code2.com', icon: Code2 },
  { label: 'Briefcase', href: 'https://Briefcase.com', icon: Briefcase },
  { label: 'AtSign', href: 'https://AtSign.com', icon: AtSign },
  { label: 'Email', href: 'mailto:hola@alexrivera.dev', icon: Mail },
]

export const stats = [
  { value: '6+', label: 'Años de experiencia' },
  { value: '40+', label: 'Proyectos entregados' },
  { value: '20+', label: 'Clientes satisfechos' },
  { value: '99%', label: 'Lighthouse score' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis'],
  },
  {
    title: 'Herramientas',
    skills: ['Docker', 'Git', 'Vite', 'Playwright', 'Figma'],
  },
]

export const projects: Project[] = [
  {
    title: 'Nimbus Analytics',
    description:
      'Dashboard en tiempo real para visualizar métricas de producto con gráficos interactivos y alertas configurables.',
    tags: ['React', 'TypeScript', 'D3.js'],
    href: 'https://example.com',
    repo: 'https://Code2.com',
    accent: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  },
  {
    title: 'Orbit Commerce',
    description:
      'Tienda headless con checkout optimizado, búsqueda instantánea y un panel de administración modular.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    href: 'https://example.com',
    repo: 'https://Code2.com',
    accent: 'from-sky-500/25 via-cyan-500/10 to-transparent',
  },
  {
    title: 'Pulse Notes',
    description:
      'Aplicación de notas colaborativas con edición en tiempo real, historial de versiones y modo offline.',
    tags: ['React', 'WebSockets', 'IndexedDB'],
    href: 'https://example.com',
    repo: 'https://Code2.com',
    accent: 'from-emerald-500/25 via-teal-500/10 to-transparent',
  },
  {
    title: 'Atlas Design System',
    description:
      'Librería de componentes accesibles con tokens de diseño, documentación interactiva y pruebas visuales.',
    tags: ['React', 'Storybook', 'Radix UI'],
    href: 'https://example.com',
    repo: 'https://Code2.com',
    accent: 'from-amber-500/25 via-orange-500/10 to-transparent',
  },
]

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Studio North',
    period: '2022 — Presente',
    description:
      'Lidero la arquitectura frontend de productos SaaS y mentoreo a un equipo de cuatro desarrolladores.',
    highlights: [
      'Reduje el tiempo de carga inicial en un 45% con code splitting y caché inteligente.',
      'Impulsé la adopción de un design system interno usado por cinco equipos.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Lumen Labs',
    period: '2020 — 2022',
    description:
      'Desarrollé plataformas de datos y APIs para clientes de fintech y salud.',
    highlights: [
      'Diseñé APIs REST y GraphQL con cobertura de pruebas superior al 85%.',
      'Implementé pipelines CI/CD que redujeron los despliegues de horas a minutos.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2018 — 2020',
    description:
      'Colaboré con startups y agencias construyendo sitios y aplicaciones a medida.',
    highlights: [
      'Entregué más de 25 proyectos con foco en rendimiento y accesibilidad.',
      'Establecí procesos de diseño y desarrollo reutilizables para cada cliente.',
    ],
  },
]
