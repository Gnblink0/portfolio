# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build production bundle
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Formatting
```bash
npx prettier --write .  # Format all files with Prettier
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **React**: v19
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion (via `motion` package)
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Tabler Icons, Radix UI Icons, Lucide React

### Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with ThemeProvider
│   ├── page.tsx                 # Home page (main landing page)
│   └── globals.css              # Global styles with Tailwind v4 theme
├── components/
│   ├── section/                 # Page sections (Hero, About, TechStack, Project, etc.)
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   ├── svg/                     # Custom SVG components
│   ├── Dock.tsx                 # Floating dock navigation
│   ├── ProjectCard.tsx          # Project display card
│   └── theme-provider.tsx       # next-themes provider
├── data/
│   └── index.ts                 # Centralized data store (projects, tech stacks, hobbies)
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
└── public/                      # Static assets
```

### Data-Driven Architecture

All portfolio content is centralized in `data/index.ts`:
- **projects**: Array of project objects with metadata (name, description, tech stack, links)
- **techStacks**: Array of technologies with categories (language, web, backend&database, devops&tools)
- **hobbies**: Personal interests with emojis
- **links**: External links

When adding new projects or tech stacks, update `data/index.ts` rather than hardcoding values.

### Component Organization

**Section Components** (`components/section/`): Full-width page sections rendered in `app/page.tsx` in this order:
1. Header (Navbar)
2. Hero
3. About
4. TechStack
5. Project
6. Footer
7. Dock (floating)

**UI Components** (`components/ui/`): Reusable components following shadcn/ui patterns.

### Styling System

**Tailwind v4** with custom theme defined in `app/globals.css`:
- Uses `@theme` directive for custom color tokens
- Custom CSS variables for background (`--color-background-DEFAULT`, `--color-background-card`)
- Text colors: `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- Border colors: `--color-border-light`, `--color-border-hover`
- Utility classes: `.bg-card`, `.glow-sm`, `.glow-lg`, `.heading-responsive-size`

**Path Alias**: `@/*` maps to project root (configured in `tsconfig.json`)

### Tech Stack Icons

TechStack component supports three icon types (in `data/index.ts`):
1. **slug**: SimpleIcons identifier (loads from `cdn.simpleicons.org`)
2. **svg**: Inline SVG string for custom icons
3. **darkmode**: Boolean flag to use white variant from SimpleIcons

When the site is in dark theme, icons with `darkmode: true` load white variants.

### Image Handling

Next.js Image component configured in `next.config.ts` to allow:
- Remote images from `cdn.simpleicons.org`
- SVG images with strict CSP for security
- Set `unoptimized` prop for external SVG icons that don't need optimization

### Animation Patterns

Framer Motion animations are used throughout:
- Fade-in with stagger delays (see `TechStack.tsx` `fadeInAnimationVariants`)
- Viewport-triggered animations with `whileInView`
- Hover scale effects on cards

### Theme System

Uses `next-themes` with:
- Default theme: `dark`
- System preference detection enabled
- Theme class applied to `<html>` element
- Transitions disabled on change (`disableTransitionOnChange`)
