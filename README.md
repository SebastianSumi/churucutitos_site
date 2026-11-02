# Churucutitos Dev

Sitio web del estudio **Churucutitos Dev**: página de contacto y base de una
app modular donde se irán mostrando los módulos que desarrollemos.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Componentes UI al estilo shadcn/ui
- lucide-react para iconografía

## Concepto visual

Interfaz clara sobre blanco con acentos vivos (azul glaciar, cian, verde
montaña), centrada en montañas, nieve y viento. Incluye escenas SVG, partículas
de nieve y líneas de viento animadas, respetando `prefers-reduced-motion`.

## Estructura

```
src/
  components/
    decor/        Escenas de montaña, nieve y viento
    sections/     Módulos, equipo, proceso y contacto
    ui/           Componentes base de interfaz
  data/site.ts    Contenido editable: perfil, equipo, módulos y proceso
```

Para agregar un módulo nuevo, añade un objeto al arreglo `modules` en
`src/data/site.ts`. La sección de módulos, los filtros y la vista previa del
hero se actualizan automáticamente.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```
