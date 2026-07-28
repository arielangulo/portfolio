# Portafolio

Sitio estático hecho con React + Vite, Bootstrap (grid/utilities) y `@tsparticles` para el fondo de red animado del hero.

## Cómo editar tu contenido

Casi todo el texto vive en un solo archivo:

```
src/data/content.js
```

Ahí cambiás tu nombre, rol, bio, experiencia, proyectos, skills y certificaciones. Los componentes en `src/components/` solo leen de ese archivo, así que normalmente no necesitás tocar el JSX.

## Correrlo en local

```bash
npm install
npm run dev
```

## Generar el build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` — son solo archivos estáticos (HTML/CSS/JS), sin backend.

## Desplegarlo (gratis)

Cualquiera de estas opciones sirve, arrastrando o conectando el repo:
- **Vercel**: importás el repo de GitHub, detecta Vite automáticamente.
- **Netlify**: `npm run build`, build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: subís el contenido de `dist/` a la rama `gh-pages` (o usá `gh-pages` npm package).

## Estructura

```
src/
  data/content.js       <- tu información (editar aquí)
  components/            <- Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
  components/NetworkField.jsx  <- config de partículas del hero
  styles/tokens.css      <- paleta de colores y tipografía
  styles/global.css      <- estilos base
  styles/layout.css      <- estilos de cada sección
```

## Antes de publicarlo, revisá:

- `profile.email`, `linkedin`, `github` y `cvUrl` en `content.js` (están con placeholders).
- El texto de tu rol ("Bachiller en Ingeniería en Sistemas...") — ajustalo si tu universidad te confiere el título en otro momento.
- El link de CRIX.CR cuando se publique.
