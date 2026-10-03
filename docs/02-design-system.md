# Design System & Technical Decisions

## 1. Tech Stack (Fixed)
- **Build tool:** Vite
- **Framework:** React with TypeScript (strict mode on)
- **Styling:** Tailwind CSS, with design tokens as CSS variables
- **Animation:** Framer Motion (scroll reveals, drawers, transitions); plain CSS for hover effects
- **Hosting:** Netlify
- **Payments:** Paystack
- **Proposed/Pending Libraries:** React Router, Zustand, React Hook Form + Zod, react-helmet-async, Vitest, ESLint, Prettier.

## 2. Colour Palette
These hex values are **locked** and must be defined as CSS variables. Hard-coded hex values in components are forbidden.

| Name     | Hex       | Role |
|----------|-----------|------|
| Espresso | `#2A2420` | Primary text and buttons (light mode); page background (dark mode) |
| Clay     | `#896A58` | Brand accent: links, highlights, hover states |
| Sage     | `#567257` | Success states and the free-shipping progress bar |
| Stone    | `#ACAB9E` | Borders, dividers, muted elements (No text on light backgrounds due to contrast) |
| Mist     | `#D9D8D5` | Page background (light mode); primary text (dark mode) |

*(Note: Tints for card surfaces, hovers, and disabled states are pending owner approval).*

## 3. Exclusively Dark Mode
- Per the owner's request during Phase 2, Light Mode has been permanently removed.
- The application will exclusively run in Dark Mode.
- No theme toggles or light mode styles are permitted.

## 4. Typography
- Use the default typography: the system sans-serif stack provided by Tailwind.
- No custom web fonts.
- Build hierarchy via size, weight, and spacing.

## 5. Spacing, Layout & Feel
- **Mobile-First:** Design every component at ~375px wide first, then enhance for larger screens.
- Generous white space and large product imagery. Quiet and premium feel.
- Consistent corner radius, border width, and shadow rules defined as tokens.

## 6. Motion & Animation Principles
Motion must guide the eye to what matters and never pull it away.
- **One focal motion at a time.**
- **One motion language:** fast (150-200ms), base (300-400ms), slow (500-700ms). One easing curve, one spring preset.
- **Content first:** Never make users wait for content. Keep stagger times < 400ms.
- **Respect `prefers-reduced-motion`:** Replace movement with simple fades or nothing.
- **Strictly Prohibited (unless approved):** Parallax, auto-playing carousels, cursor-following effects, scroll-jacking, large bouncing effects, blocking animations.

### Approved Motion List
- **Page Level:** Hero mask reveals (700ms max), soft crossfade page transitions with slight vertical shift (250-350ms), 16-24px rise and fade scroll reveals, thin underlines drawing in for section headings.
- **Nav:** Smooth marquee (announcement bar - the only continuous loop), hover underlines, sliding side-menu on mobile, fading dropdowns on desktop.
- **Browsing:** Staggered card entrances, slow image zooms on hover, reflowing layout animations for filters, sliding active indicators.
- **Product Page:** Crossfade galleries (swipe on mobile), morphing add-to-cart button, springy cart drawer entrance.
- **Capsule Builder:** Crossfades/slides for new items settling in.
