# Development Reference

## Technology Stack

- **Framework**: Astro 5.15+ (Static Site Generator)
- **UI Library**: React 19.2+ (client-side only)
- **Styling**: TailwindCSS 4.1+ with CSS variables
- **Animations**: Framer Motion 12.23+
- **Icons**: Lucide React 0.548+
- **Fonts**: Space Grotesk (headings), Inter (reading text)
- **Deployment**: GitHub Pages (automatic via GitHub Actions)

## Project Structure

```
src/
├── components/
│   ├── App.tsx              # Root wrapper with ThemeProvider
│   ├── ThemeProvider.tsx    # Dark/light theme context
│   ├── Navigation.tsx       # Brutalist nav with theme toggle
│   ├── Hero.tsx             # Landing section with rotating roles
│   └── sections/            # Page sections (Experience, Projects, etc.)
├── styles/
│   └── global.css           # CSS variables, brutalist theme system
└── pages/
    └── index.astro          # Single-page entry point
```

## Git Workflow

### Commit Messages
Use descriptive commit messages with a summary line and bullet points:

```bash
git commit -m "$(cat <<'EOF'
Brief summary of changes

- Specific change or feature added
- Bug fix or improvement made
- Configuration or dependency update
EOF
)"
```

### Before Pushing
1. Build locally: `npm run build`
2. Test the build: `npm run preview`
3. Verify changes visually

### Push & Deploy
```bash
git add <files>
git commit -m "message"
git push
```

GitHub Actions automatically builds and deploys to **tsipidis.xyz**

## Design Principles

- **Brutalism**: Bold borders, high contrast, uppercase typography
- **Theme Support**: Dark/light mode with CSS variables
- **Single-Page**: Smooth scroll navigation (projects get sub-pages later)
- **KISS/YAGNI/DRY**: Keep it simple, build only what's needed
- **No Motion Unless Requested**: Minimize animations, maximize clarity

## CSS Variables

Dark/Light themes via `html.light` class:
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- `--text-primary`, `--text-secondary`
- `--border-primary`, `--border-secondary`
- `--accent-primary`, `--accent-secondary`

## Key Features

- Theme toggle (persists in localStorage)
- Rotating role titles with outlined text effect
- Floating particle background
- Brutalist navigation with active states
- Reading font for product-oriented content
- Responsive design with mobile menu
