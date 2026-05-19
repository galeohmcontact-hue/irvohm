---
name: Énergie Épurée
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4a3e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6c7b6d'
  outline-variant: '#bbcbbb'
  surface-tint: '#006d37'
  primary: '#006d37'
  on-primary: '#ffffff'
  primary-container: '#2ecc71'
  on-primary-container: '#005027'
  inverse-primary: '#4ae183'
  secondary: '#006397'
  on-secondary: '#ffffff'
  secondary-container: '#5cb8fd'
  on-secondary-container: '#00476e'
  tertiary: '#006b58'
  on-tertiary: '#ffffff'
  tertiary-container: '#32c8a7'
  on-tertiary-container: '#004f40'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bfe9c'
  primary-fixed-dim: '#4ae183'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#92ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#6ff9d6'
  tertiary-fixed-dim: '#4eddbb'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005141'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system embodies an innovative, reliable, and eco-conscious personality. It focuses on the transition to sustainable energy through a professional yet approachable lens. The target audience includes homeowners and property managers seeking high-tech, dependable electric vehicle charging solutions.

The visual style is **Minimalist / Tech-Forward**. It utilizes a clean, airy composition with generous whitespace to evoke a sense of simplicity and ease of use. High-quality lifestyle photography featuring modern electric vehicles and sleek home installations serves as the emotional core, grounding the technical aspects of the product in daily life. All layouts prioritize clarity and a "premium utility" feel.

## Colors

The palette is derived directly from the core brand identity, representing energy flow and technological precision. 

- **Primary Emerald (#2ECC71):** Used for primary actions, success states, and indicating "active" energy.
- **Secondary Electric Blue (#3498DB):** Used for secondary interactions, links, and informational highlights.
- **The Gradient:** A signature brand element used sparingly for high-impact moments like hero sections, primary buttons, or progress bars.
- **Surface Neutrals:** Backgrounds are primarily white (#FFFFFF) to maintain a clean aesthetic, with Slate Grey (#F8FAFC) used to differentiate page sections and container backgrounds.
- **Typography:** Deep slate (#1E293B) is used for body text to ensure high legibility while appearing softer than pure black.

## Typography

This design system uses a dual-font strategy to balance character with utility.

- **Montserrat** is the display typeface. Its geometric construction and modern feel align with the innovative nature of EV technology. It is used for all headlines and marketing taglines.
- **Inter** is the functional typeface. Highly legible at small sizes and optimized for screens, it handles all body copy, form labels, and UI data.

**Hierarchy Rules:**
- Large display text should use tight letter spacing for a more "designed" look.
- Body copy uses a generous line height (1.6) to improve readability in a light-themed environment.
- French text often requires more horizontal space than English; ensure UI containers account for roughly 20% expansion in character count.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict vertical rhythm based on an 8px baseline.

- **Desktop:** 12-column grid with a max-width of 1280px. Gutters are fixed at 24px, while outer margins expand to center the content.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

**Spacing Philosophy:**
Use "XL" spacing for separating major content sections to maintain the minimalist, airy feel. Content within cards should use "MD" spacing to ensure elements feel grouped and distinct.

## Elevation & Depth

To maintain a "Tech-Forward" and "Clean" look, this design system avoids heavy shadows in favor of **Tonal Layers** and **Low-contrast Outlines**.

- **Level 0 (Background):** White (#FFFFFF).
- **Level 1 (Sections):** Light Grey (#F8FAFC) used to break up long pages.
- **Level 2 (Cards/Containers):** White background with a subtle 1px border (#E2E8F0).
- **Interactive Depth:** Only use ambient shadows on hovered states to provide tactile feedback. These shadows should be extremely soft: `0px 10px 25px rgba(0, 0, 0, 0.05)`.
- **Primary Buttons:** May use a subtle glow effect using the primary emerald color at 20% opacity to emphasize their importance.

## Shapes

The shape language is **Rounded**, reflecting the fluid lines of modern vehicle design and the "circular" nature of the logo.

- **Buttons & Inputs:** Use the standard 0.5rem (8px) radius.
- **Cards & Hero Sections:** Use the "Rounded-LG" (1rem / 16px) radius to create a soft, premium container feel.
- **Icons:** Use a medium stroke weight (2px) with rounded caps and joins to match the typography.

## Components

### Buttons
- **Primary:** Features the brand gradient with white text. High emphasis.
- **Secondary:** Emerald Green border with Emerald Green text. Used for less critical actions.
- **Tertiary:** Ghost style (no border/background) with Electric Blue text.

### Inputs & Fields
Input fields use a subtle background (#F1F5F9) and an 8px corner radius. On focus, the border transitions to Electric Blue with a soft 2px outer glow. Labels are always positioned above the field in **Inter Semi-Bold**.

### Cards
Cards are the primary way to display charging station statistics or installation options. They use a white surface, a light border, and 16px rounded corners. Header areas within cards can use the light grey neutral color to create hierarchy.

### Status Chips
Used for "Disponibilité" (Availability) or "Chargement" (Charging).
- **Available:** Soft green background with dark green text.
- **In Use:** Soft blue background with dark blue text.

### Visual Accents
Use the "Omega" symbol from the logo as a large, low-opacity background watermark (5% opacity) to reinforce brand identity in editorial layouts.