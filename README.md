# Tenzies — Juego de dados / Dice Game

**Español:** Clásico juego de Tenzies: tira 15 dados, mantén los que muestran el mismo valor y relanza los demás hasta que todos muestren el mismo número y estén seleccionados. Construido con Vite + React 19. Contenerizado con Nginx para producción.

**English:** Classic Tenzies dice game: roll 15 dice, hold the ones showing the same value, and re-roll the rest until all dice show the same number and are held. Built with Vite + React 19. Containerized with Nginx for production.

**🔗 Demo en vivo / Live demo:** [https://dicegame-9kuu.onrender.com/](https://dicegame-9kuu.onrender.com/)

> **Nota:** Este proyecto es un ejercicio de aprendizaje diseñado para demostrar el uso de `useState`, `useRef` y `useEffect` en React. 
>
> **Note:** This project is a learning exercise designed to demonstrate `useState`, `useRef` and `useEffect` usage in React. 
---

<details>
<summary>🏁 Inicio Rápido / Quick Start</summary>

**Español:**
1. Clona el repositorio (HTTPS, SSH o GitHub CLI).
2. Ejecuta `pnpm install` para instalar dependencias.
3. Para desarrollo local: `pnpm dev`
4. Para contenedorizar: `docker build -t tenzies .` → `docker run -p 8080:80 tenzies`

**English:**
1. Clone repository (HTTPS, SSH or GitHub CLI).
2. Run `pnpm install` to install dependencies.
3. For local development: `pnpm dev`
4. For containerization: `docker build -t tenzies .` → `docker run -p 8080:80 tenzies`

</details>

<details>
<summary>📁 Archivos del proyecto / Project files</summary>

**Español:**
- `src/index.html` — Archivo HTML principal (dentro de `src/` gracias a `root` en Vite)
- `src/index.jsx` — Punto de entrada React (`createRoot`)
- `src/App.jsx` — Componente raíz con la lógica del juego: estado de dados, hold/roll, detección de victoria, confetti, focus
- `src/components/Dice.jsx` — Componente dado individual (accesible con `aria-label` y `aria-pressed`)
- `src/index.css` — Estilos globales, grid responsive, media queries
- `vite.config.js` — Configuración de Vite: `root: 'src'`, plugin React, `outDir: '../dist'`
- `Dockerfile` / `.dockerignore` — Multi-stage build (Node 22 para compilar, Nginx Alpine para servir)
- `package.json` / `pnpm-lock.yaml` — Dependencias del proyecto
- `LICENSE` — MIT

**English:**
- `src/index.html` — Main HTML file (inside `src/` thanks to `root` in Vite)
- `src/index.jsx` — React entry point (`createRoot`)
- `src/App.jsx` — Root component with game logic: dice state, hold/roll, win detection, confetti, focus
- `src/components/Dice.jsx` — Individual dice component (accessible with `aria-label` and `aria-pressed`)
- `src/index.css` — Global styles, responsive grid, media queries
- `vite.config.js` — Vite configuration: `root: 'src'`, React plugin, `outDir: '../dist'`
- `Dockerfile` / `.dockerignore` — Multi-stage build (Node 22 to compile, Nginx Alpine to serve)
- `package.json` / `pnpm-lock.yaml` — Project dependencies
- `LICENSE` — MIT

</details>

<details>
<summary>▶️ Cómo empezar a usarlo / How to start using it</summary>

### Opción 1: Localmente (servidor de desarrollo) / Option 1: Locally (dev server)

```bash
pnpm install
pnpm dev
```

**Español:**
- Inicia el servidor de desarrollo de Vite con recarga en caliente
- Disponible en `http://localhost:5173`

**English:**
- Starts Vite development server with hot reload
- Available at `http://localhost:5173`

---

### Opción 2: Docker (producción con Nginx) / Option 2: Docker (Nginx production)

```bash
docker build -t tenzies .
docker run -p 8080:80 tenzies
```

**Español:**
- Compilación en varias etapas: compila con Node, sirve con Nginx Alpine
- Imagen ligera
- Aplicación disponible en `http://localhost:8080`

> **Nota sobre puertos:** `8080` es el puerto que desees exponer en tu máquina local (ej: 3000, 8080), y `80` es el puerto que Nginx usa dentro del contenedor. Ejemplo: `-p 3000:80` expone la app en `localhost:3000`.

**English:**
- Multi-stage build: compiles with Node, serves with Nginx Alpine
- Lightweight image
- App available at `http://localhost:8080`

> **Port note:** `8080` is the port you want to forward the app on your local machine (e.g: 3000, 8080), and `80` is the Nginx port used within the container. Example: `-p 3000:80` exposes the app on `localhost:3000`.

</details>

<details>
<summary>📦 ¿Qué necesitas? / What you need?</summary>

**Español:**
- Node.js 20+ (para desarrollo local)
- pnpm (gestor de paquetes)
- Docker (opcional, para contenedorizar)

**English:**
- Node.js 20+ (for local development)
- pnpm (package manager)
- Docker (optional, for containerization)

</details>

<details>
<summary>🎲 Cómo se juega / How to play</summary>

**Español:**
1. Haz clic en los dados para **mantenerlos** (se vuelven verdes). Los dados mantenidos no se relanzan.
2. Pulsa **Roll** para relanzar los dados que no están mantenidos.
3. Gana cuando **todos los dados muestran el mismo valor** y están **todos mantenidos**.
4. Al ganar aparece confetti y el botón cambia a **"New Game"** para volver a jugar.

**English:**
1. Click on dice to **hold** them (they turn green). Held dice are not re-rolled.
2. Press **Roll** to re-roll the dice that are not held.
3. You win when **all dice show the same value** and are **all held**.
4. On winning, confetti appears and the button changes to **"New Game"** to play again.

</details>

<details>
<summary>🧱 Estructura de archivos / File structure</summary>

Entry points:
```
├── src/index.jsx          → Punto de entrada (renderiza App en #root)
├── src/index.html         → Archivo HTML principal
└── src/App.jsx            → Componente raíz: lógica del juego
```

Componentes:
```
├── components/
│   └── Dice.jsx           → Componente dado (accesible: aria-label, aria-pressed)
```

Estilos:
```
├── src/index.css          → Estilos globales, grid responsive, media queries
```

Configuración:
```
├── vite.config.js         → Root: 'src', plugin React, outDir: '../dist'
├── Dockerfile             → Multi-stage build (Node 22 + Nginx)
├── .dockerignore
├── package.json
└── pnpm-lock.yaml
```

**Español:**
- `index.jsx` es el punto de entrada que renderiza `<App/>` en `#root`
- `App.jsx` contiene toda la lógica del juego: genera 15 dados, gestiona el estado con `useState`, y detecta la victoria
- `Dice.jsx` es un botón accesible que muestra el valor del dado y permite mantenerlo
- El `vite.config.js` usa `root: 'src'` por lo que `index.html` vive dentro de `src/`

**English:**
- `index.jsx` is the entry point that renders `<App/>` into `#root`
- `App.jsx` contains all game logic: generates 15 dice, manages state with `useState`, and detects wins
- `Dice.jsx` is an accessible button that displays the dice value and allows holding
- `vite.config.js` uses `root: 'src'` so `index.html` lives inside `src/`

</details>

<details>
<summary>✨ Características / Features</summary>

**Español:**
- **Accesibilidad:** Anuncios en tiempo real con `aria-live="polite"`, cada dado tiene `aria-label` descriptivo y `aria-pressed` para indicar si está mantenido. El foco se mueve al botón "New Game" al ganar.
- **Diseño responsive:** Grid que cambia de 3 columnas a 5 columnas en pantallas grandes.
- **Confetti:** `react-confetti` muestra animación al ganar.

**English:**
- **Accessibility:** Real-time announcements with `aria-live="polite"`, each die has a descriptive `aria-label` and `aria-pressed` to indicate if it's held. Focus moves to the "New Game" button on win.
- **Responsive design:** Grid switches from 3 columns to 5 columns on large screens. 
- **Confetti:** `react-confetti` shows animation on win.

</details>
