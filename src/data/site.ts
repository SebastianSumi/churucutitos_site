import {
  BarChart3,
  Code2,
  Compass,
  GitBranch,
  Camera,
  Layers,
  Briefcase,
  Mail,
  MountainSnow,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Snowflake,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export type ModuleStatus = 'live' | 'beta' | 'dev' | 'soon'
export type ModuleCategory = 'Frontend' | 'Backend' | 'Datos' | 'DevOps'

export type Module = {
  id: string
  name: string
  description: string
  category: ModuleCategory
  status: ModuleStatus
  icon: LucideIcon
  tags: string[]
  accent: string
  href?: string
}

export type TeamMember = {
  name: string
  role: string
  focus: string[]
  initials: string
  accent: string
  href: string
}

export type ProcessStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export type Value = {
  title: string
  description: string
  icon: LucideIcon
}

export const profile = {
  name: 'Churucutitos Dev',
  shortName: 'Churucutitos',
  role: 'Estudio de desarrollo full stack',
  tagline:
    'Construimos módulos y aplicaciones web a medida. Ligeros como el viento, sólidos como la montaña.',
  location: 'Juliaca, Perú',
  email: 'hola@churucutitos.dev',
  appUrl: 'app.churucutitos.dev',
  availability: 'Disponibles para nuevos proyectos',
  about: [
    'Somos un equipo de desarrolladores que nace entre los Andes, donde el aire es fino y las ideas se ven lejos. Construimos productos digitales de punta a punta: desde la primera conversación hasta el despliegue.',
    'Nuestra apuesta es una app modular: cada herramienta que desarrollamos vive en un mismo lugar y se conecta con las demás. Así entregamos rápido, sin sacrificar orden ni claridad.',
  ],
}

export const navLinks = [
  { label: 'Módulos', href: '#modulos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: GitBranch },
  { label: 'Instagram', href: 'https://instagram.com/', icon: Camera },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Briefcase },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export const stats = [
  { value: '4', label: 'desarrolladores' },
  { value: '12', label: 'módulos en camino' },
  { value: '8', label: 'productos lanzados' },
  { value: '100%', label: 'hecho a medida' },
]

export const values: Value[] = [
  {
    title: 'Ligero',
    description: 'Interfaces rápidas, sin peso innecesario ni fricción.',
    icon: Wind,
  },
  {
    title: 'Transparente',
    description: 'Procesos claros, código legible y avances visibles.',
    icon: Snowflake,
  },
  {
    title: 'Escalable',
    description: 'Módulos que crecen contigo y se conectan entre sí.',
    icon: MountainSnow,
  },
]

export const team: TeamMember[] = [
  {
    name: 'Sebastián Sumi',
    role: 'Full Stack Lead',
    focus: ['React', 'Node.js', 'Arquitectura'],
    initials: 'SS',
    accent: 'from-sky-500 to-cyan-400',
    href: 'https://github.com/',
  },
  {
    name: 'Diego Quispe',
    role: 'Frontend Developer',
    focus: ['React', 'TypeScript', 'UI'],
    initials: 'DQ',
    accent: 'from-violet-500 to-fuchsia-500',
    href: 'https://github.com/',
  },
  {
    name: 'Valeria Choque',
    role: 'Backend Developer',
    focus: ['NestJS', 'PostgreSQL', 'APIs'],
    initials: 'VC',
    accent: 'from-emerald-500 to-teal-400',
    href: 'https://github.com/',
  },
  {
    name: 'Mateo Apaza',
    role: 'Diseño & DevOps',
    focus: ['Figma', 'Docker', 'CI/CD'],
    initials: 'MA',
    accent: 'from-orange-400 to-rose-500',
    href: 'https://github.com/',
  },
]

export const modules: Module[] = [
  {
    id: 'aurora-ui',
    name: 'Aurora UI',
    description:
      'Sistema de componentes accesibles y tokens de diseño para todas nuestras interfaces.',
    category: 'Frontend',
    status: 'live',
    icon: Palette,
    tags: ['React', 'Tailwind', 'Radix'],
    accent: 'from-sky-500 to-cyan-400',
    href: '#modulos',
  },
  {
    id: 'viento-api',
    name: 'Viento API',
    description:
      'Capa de APIs tipadas que conecta los módulos con servicios externos.',
    category: 'Backend',
    status: 'beta',
    icon: Wind,
    tags: ['Node.js', 'tRPC', 'Zod'],
    accent: 'from-violet-500 to-fuchsia-500',
    href: '#modulos',
  },
  {
    id: 'cumbre-auth',
    name: 'Cumbre Auth',
    description:
      'Autenticación, roles y sesiones seguras listas para enchufar a cualquier producto.',
    category: 'Backend',
    status: 'beta',
    icon: ShieldCheck,
    tags: ['JWT', 'OAuth', 'RBAC'],
    accent: 'from-emerald-500 to-teal-400',
    href: '#modulos',
  },
  {
    id: 'nevado-analytics',
    name: 'Nevado Analytics',
    description:
      'Paneles ligeros para leer métricas sin ruido y decidir con datos.',
    category: 'Datos',
    status: 'dev',
    icon: BarChart3,
    tags: ['Charts', 'SQL', 'Métricas'],
    accent: 'from-orange-400 to-rose-500',
    href: '#modulos',
  },
  {
    id: 'glaciar-cms',
    name: 'Glaciar CMS',
    description:
      'Contenidos editables por el equipo, sin tocar una línea de código.',
    category: 'Datos',
    status: 'dev',
    icon: Layers,
    tags: ['Headless', 'Markdown', 'Media'],
    accent: 'from-cyan-500 to-blue-500',
    href: '#modulos',
  },
  {
    id: 'ruta-deploy',
    name: 'Ruta Deploy',
    description:
      'Despliegues reproducibles con un solo comando y entornos de preview.',
    category: 'DevOps',
    status: 'soon',
    icon: Rocket,
    tags: ['Docker', 'CI/CD', 'Preview'],
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'brujula-router',
    name: 'Brújula Router',
    description:
      'Navegación y rutas protegidas con estado compartido entre módulos.',
    category: 'Frontend',
    status: 'soon',
    icon: Compass,
    tags: ['Router', 'Guards', 'Lazy'],
    accent: 'from-lime-500 to-emerald-500',
  },
  {
    id: 'ventisca-search',
    name: 'Ventisca Search',
    description:
      'Búsqueda instantánea con filtros y atajos de teclado en toda la app.',
    category: 'Frontend',
    status: 'dev',
    icon: Search,
    tags: ['Search', 'IndexedDB', 'UX'],
    accent: 'from-indigo-500 to-violet-500',
  },
]

export const moduleCategories: Array<'Todos' | ModuleCategory> = [
  'Todos',
  'Frontend',
  'Backend',
  'Datos',
  'DevOps',
]

export const moduleStatus: Record<
  ModuleStatus,
  { label: string; dot: string; badge: string }
> = {
  live: {
    label: 'Disponible',
    dot: 'bg-emerald-500',
    badge: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  beta: {
    label: 'Beta',
    dot: 'bg-sky-500',
    badge: 'border-sky-200 bg-sky-50 text-sky-700',
  },
  dev: {
    label: 'En desarrollo',
    dot: 'bg-amber-500',
    badge: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  soon: {
    label: 'Próximamente',
    dot: 'bg-slate-400',
    badge: 'border-slate-200 bg-slate-50 text-slate-600',
  },
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Escuchamos',
    description:
      'Entendemos el problema, el terreno y a las personas que lo van a usar.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Diseñamos',
    description:
      'Prototipos rápidos y claros para acordar el rumbo antes de escribir código.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Construimos',
    description:
      'Módulos probados, documentados y conectados entre sí desde el primer día.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Desplegamos',
    description:
      'Publicamos, medimos y mejoramos. La cumbre no es el final del camino.',
    icon: Rocket,
  },
]
