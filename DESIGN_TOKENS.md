# Design Tokens - Night Owl Portfolio

This document defines the design system and visual language for this portfolio website.

## Theme Concept

**Night Owl Theme** - A serene nighttime atmosphere featuring starry skies, a glowing moon, and mountain silhouettes. The design emphasizes subtle, elegant animations with a monochromatic color scheme.

## Color System

### Backgrounds
```css
--color-background-DEFAULT: #05080D   /* Main body background - darkest blue-black */
--color-background-card: #0E1320      /* Card/component background - slightly lighter */

/* Gradient backgrounds (Hero section) */
from: #061E31  /* Top of starry sky */
to: #040d30    /* Bottom of starry sky */

/* Navbar */
bg: #050e24    /* Deep blue with backdrop-blur-md */
```

### Text Colors
```css
--color-text-primary: #FFFFFF      /* Headings and primary text */
--color-text-secondary: #A1A1AA    /* Body text and descriptions */
--color-text-muted: #71717A        /* Subtle text and metadata */

/* Gradient text (special cases) */
from-gray-600 to-gray-100          /* Used in Hero subtitle */
from-white to-gray-400             /* Used in section headings */
```

### Borders
```css
--color-border-light: rgba(255, 255, 255, 0.1)   /* Default border */
--color-border-hover: rgba(255, 255, 255, 0.2)   /* Hover state */

/* Navbar border */
#233554/30 (default)
#233554/40 (hover)
```

### Glow/Shadow Effects
```css
/* White glow - used on buttons */
shadow-[0_0_20px_rgba(255,255,255,0.3)]   /* Default */
shadow-[0_0_25px_rgba(255,255,255,0.5)]   /* Hover */

/* Blue glow - used on navbar and special elements */
shadow-[0_0_30px_rgba(73,160,255,0.15)]   /* Default */
shadow-[0_0_40px_rgba(73,160,255,0.2)]    /* Hover */
```

## Typography

### Font Family
- **Sans**: Geist Sans (variable font)
- **Mono**: Geist Mono (variable font)

### Responsive Heading Sizes
```css
.heading-responsive-size {
  font-size: 1.5rem;      /* mobile (text-2xl) */
  font-size: 2.25rem;     /* tablet (md:text-4xl) */
  font-size: 3rem;        /* desktop (lg:text-5xl) */
}
```

### Text Hierarchy
- **Hero Title**: heading-responsive-size + font-bold
- **Section Titles**: heading-responsive-size + font-bold
- **Card Titles**: text-2xl + font-bold
- **Subsections**: text-lg + font-semibold
- **Body**: text-sm or text-base
- **Metadata**: text-sm + text-muted

## Component Patterns

### Buttons

**Primary Button (Solid)**
```tsx
className="bg-white text-black px-6 py-3 rounded-3xl font-bold
  shadow-[0_0_20px_rgba(255,255,255,0.3)]
  hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
```

**Secondary Button (Outline)**
```tsx
className="border-1 text-white px-6 py-3 rounded-3xl font-bold
  shadow-[0_0_20px_rgba(255,255,255,0.3)]
  hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
```

**Key characteristics:**
- `rounded-3xl` for all buttons
- White glow shadows
- No colored gradients
- Font weight: `font-bold`

### Cards

**Bento Grid Cards**
```tsx
className="bg-card rounded-xl border border-border-light
  hover:border-border-hover transition-all duration-300"
```

**Project Cards**
```tsx
className="bg-card rounded-xl border border-border-light p-6
  hover:scale-[1.02] hover:border-border-hover hover:glow-sm
  backdrop-blur-sm"
```

**Key characteristics:**
- `rounded-xl` for cards
- Subtle border (border-light)
- Hover: brighter border + optional glow
- Scale on hover: 1.02 (very subtle)

### Navbar
```tsx
className="bg-[#050e24] backdrop-blur-md rounded-2xl
  shadow-[0_0_30px_rgba(73,160,255,0.15)]
  border border-[#233554]/30"
```

**Key characteristics:**
- Fixed position
- Blue glow (not white)
- Backdrop blur
- Smooth transitions

## Animation Principles

### Hover Effects
- **Scale**: Very subtle (1.02 - 1.05)
- **Duration**: 300ms
- **Easing**: Default or cubic-bezier for custom animations

### Entrance Animations
```tsx
// Fade in with slide up
variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}
```

### Stagger Delays
```tsx
// TechStack icons
delay: 0.1 * index
```

### Continuous Animations
```tsx
// Star twinkling
@keyframes twinkle {
  0%, 100% { opacity: 0.2 }
  50% { opacity: 1 }
}
duration: 4s-6s (varies by star size)
```

## Special Elements

### Moon
- Positioned top-left
- Soft glow: `drop-shadow-[0_0_20px_rgba(255,255,224,0.8)]`
- Parallax scroll effect

### Stars
- Three sizes: small (r=0.5), medium (r=0.8), large (r=1.2)
- White fill with twinkle animation
- Scattered across background

### Mountain Silhouette
- Black silhouette at bottom
- Layered for depth

## Design Rules

### ✅ DO
- Use white/gray/blue color palette
- Apply subtle glow effects
- Keep animations smooth and understated
- Use consistent border radius (rounded-xl for cards, rounded-3xl for buttons)
- Maintain text hierarchy with defined sizes
- Use backdrop-blur for glass morphism effects

### ❌ DON'T
- Use bright colored gradients (red, purple, green, etc.)
- Add flashy or distracting animations
- Mix different glow colors on the same component
- Use sharp corners (always use rounded corners)
- Overwhelm with too many effects
- Break the monochromatic night theme

## Spacing System

### Section Structure
Each major section follows this consistent pattern:
```tsx
<section className="py-16 md:py-20 lg:py-24 border-t border-border-light/50">
  <div className="w-full">
    {/* Section header with mb-12 or mb-16 */}
    <div className="flex flex-col items-center justify-center mb-12">
      <p className="text-sm uppercase text-gray-500 mb-2">Subtitle</p>
      <h2 className="heading-responsive-size font-bold">Title</h2>
    </div>

    {/* Section content */}
    <div className="space-y-8">
      {/* Content here */}
    </div>
  </div>
</section>
```

### Spacing Scale
- **Section padding**: py-16 md:py-20 lg:py-24 (vertical)
- **Section dividers**: border-t border-border-light/50
- **Title to content**: mb-12 (About) or mb-16 (TechStack, Project)
- **Content gaps**: space-y-8 (project cards), space-y-12 (tech categories)
- **Component gaps**: gap-4, gap-5, gap-6, gap-8
- **Container padding**: px-4 md:px-6 lg:px-8
- **Grid gaps**: gap-4 (bento), gap-5 (tech icons)

### Section Order
1. **Hero**: Full viewport (h-[100vh])
2. **About**: py-16 md:py-20 lg:py-24
3. **TechStack**: py-16 md:py-20 lg:py-24 + border-t
4. **Project**: py-16 md:py-20 lg:py-24 + border-t
5. **Footer**: mt-16 md:mt-20 lg:mt-24 + border-t
