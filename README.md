Aplicación web interactiva desarrollada con **React 19 + TypeScript + Vite**, utilizando **TailwindCSS** para un diseño moderno y atractivo. Una experiencia inmersiva para explorar destinos espaciales, conocer a la tripulación y descubrir la tecnología utilizada en misiones espaciales.

---

## ✨ Características principales

- 🚀 **Exploración de destinos espaciales** - Navega entre Moon, Mars, Europa y Titan
- 👨‍🚀 **Galería de tripulación** - Conoce a los miembros del equipo con carrusel automático
- 🛰️ **Tecnología espacial** - Descubre vehículos de lanzamiento y tecnología avanzada
- 🎨 **Diseño responsive** - Optimizado para mobile, tablet y desktop
- 🎭 **Animaciones y transiciones** - Experiencia de usuario fluida y moderna
- 🖼️ **Imágenes optimizadas** - Formatos WebP y PNG para mejor rendimiento
- 🎯 **Navegación intuitiva** - Header responsive con menú móvil y desktop
- ⚡ **Carga lazy** - Optimización de imágenes con lazy loading
- 🔄 **Carruseles interactivos** - Para tripulación y tecnología con auto-rotación

---

## 🛠️ Tecnologías utilizadas

- **Framework principal:** [React 19](https://react.dev/)
- **Compilador & Bundler:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [TailwindCSS](https://tailwindcss.com/)
- **Gestión de estado:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Ruteo:** [React Router DOM](https://reactrouter.com/)
- **Fuentes:** [Fontsource](https://fontsource.org/) - Barlow, Barlow Condensed, Bellefair
- **Linting:** ESLint + TypeScript-ESLint

---

## 📂 Estructura del proyecto

```
src/
  main.tsx                    # Punto de entrada
  SpaceApp.tsx                # Componente principal de la aplicación
  SpaceRoutes.tsx             # Configuración de rutas
  components/                 # Componentes reutilizables
    Header/                   # Header con navegación desktop y mobile
    PlanetCard/               # Tarjeta de información de planetas
    PlanetsNav/               # Navegación entre planetas
    PageNotFound/             # Página 404
    RouterLoader/             # Loader para lazy loading
  public/pages/               # Páginas de la aplicación
    HomePage/                 # Página de inicio
    DestinationPage/          # Página de destinos (Moon, Mars, Europa, Titan)
    CrewPage/                 # Página de tripulación
    TechnologyPage/           # Página de tecnología
  hooks/                      # Custom hooks
    useInterval.ts            # Hook para carruseles automáticos
  data/                       # Datos estáticos (JSON)
    data.json                 # Datos de destinos, tripulación y tecnología
    headerData.ts             # Datos de navegación
  assets/                     # Imágenes y recursos
    home/                     # Fondos de página de inicio
    destination/              # Imágenes de planetas
    crew/                     # Fotos de la tripulación
    technology/               # Imágenes de tecnología
    shared/                   # Iconos compartidos (logo, hamburger, close)
  styles/                     # Estilos globales
  utilites/                   # Utilidades
    lazyImports.ts            # Importaciones lazy de componentes
```

---

## 🚀 Instalación y uso

1. **Clona este repositorio**

   ```bash
   git clone <url-del-repo>
   cd Space-tourist-app
   ```

2. **Instala dependencias**

   ```bash
   npm install
   ```

3. **Ejecuta en desarrollo**

   ```bash
   npm run dev
   ```

4. **Compila para producción**

   ```bash
   npm run build
   ```

5. **Previsualiza el build de producción**

   ```bash
   npm run preview
   ```

6. **Ejecuta el linter**
   ```bash
   npm run lint
   ```

---

## 📄 Páginas disponibles

- **Home** (`/homepage`) - Página de inicio con botón de exploración
- **Destination** (`/destination`) - Explora los destinos espaciales disponibles
  - Moon (`/destination`) - Destino por defecto
  - Mars (`/destination/Mars`)
  - Europa (`/destination/Europa`)
  - Titan (`/destination/Titan`)
- **Crew** (`/crew`) - Conoce a los miembros de la tripulación
- **Technology** (`/tech`) - Descubre la tecnología espacial

---

## 🎨 Diseño y UX

- **Responsive Design**: Adaptado para móviles, tablets y escritorio
- **Fondos dinámicos**: Imágenes de fondo diferentes según el dispositivo
- **Tipografía personalizada**: Fuentes Barlow, Barlow Condensed y Bellefair
- **Transiciones suaves**: Animaciones en navegación y carruseles
- **Optimización de imágenes**: Uso de formatos WebP y lazy loading

---

## 🔮 Futuras mejoras

- 🌙 Implementar **dark mode**
- 🌐 Internacionalización (**i18n**) para múltiples idiomas
- 📊 Integración con APIs de datos espaciales en tiempo real
- 🎮 Animaciones más avanzadas con Framer Motion
- 📱 Mejoras en la experiencia móvil
- 🔍 Búsqueda y filtros avanzados

---

## 👤 Autor

Desarrollado por **Roger Gutiérrez Martínez**

- 🌐 [https://space-tourist-app-kappa.vercel.app]
- 🐙 [https://github.com/Roger2999/Space-tourist-app.git]

---
