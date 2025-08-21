## Priyang Desai — Developer Portfolio

Live URL: `https://priyangdesai.vercel.app`

### Overview
Personal portfolio built with React and Vite, styled with Tailwind CSS, and animated using Framer Motion. It highlights skills, experience, projects, and contact information with smooth, performant UI effects.

### Features
- Modern, responsive layout across all devices
- Animated sections and micro-interactions powered by Framer Motion
- Theming support (Light/Dark/System) via a simple context
- Sections: Home, About, Skills, Experience, Projects, Contact
- Clean component structure and utility-first styling

### Tech Stack
- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion 12
- React Icons

### Getting Started
Prerequisites: Node.js 18+ and npm

1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm run dev
```
Vite will print the local URL (typically `http://localhost:5173`).

3) Build for production
```bash
npm run build
```

4) Preview the production build locally
```bash
npm run preview
```

### Project Structure
```text
Portfolio/
├─ public/
├─ src/
│  ├─ components/    # UI sections (Hero, About, Skills, Experience, Projects, Contact, Navbar, etc.)
│  ├─ context/       # ThemeContext (light/dark/system)
│  ├─ assets/        # Static assets
│  ├─ App.jsx        # Main layout and section composition
│  ├─ index.css      # Tailwind and custom styles
│  └─ main.jsx       # App bootstrap
└─ vite.config.js
```

### Available Scripts
- `npm run dev` — Start development server
- `npm run build` — Build production bundle
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

### Deployment
This site is deployed on Vercel.
- Live: `https://priyangdesai.vercel.app`

To deploy your own fork on Vercel:
1) Push the repo to GitHub
2) Import the project on Vercel and select the repository
3) Framework preset: Vite
4) Build Command: `vite build` (or `npm run build`)
5) Output Directory: `dist`

### Customization
- Update personal details and copy in the components under `src/components/`
- Modify theme behavior in `src/context/ThemeContext.jsx`
- Adjust styles and effects in `src/index.css`

