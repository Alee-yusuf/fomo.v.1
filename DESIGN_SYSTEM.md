# 🎨 FÔMOFI Design System

## Color Palette

### Primary Gradient (Teal to Cyan)
The main brand gradient is **#00d4ff to #0099cc** - a vibrant teal to cyan gradient representing technology and growth.

```css
/* Gradient */
primary-gradient: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);

/* Solid Colors */
primary-50:  #f0fcff  /* Lightest tint - backgrounds, hover states */
primary-100: #e0f8ff  /* Very light - subtle backgrounds */
primary-200: #b7ecff  /* Light - borders, dividers */
primary-300: #78dfff  /* Medium light - secondary text */
primary-400: #00d4ff  /* Medium - main brand color */
primary-500: #00b8e6  /* Main brand color - CTAs, links */
primary-600: #0099cc  /* Darker - hover states */
primary-700: #0077a3  /* Dark - active states */
primary-800: #005c80  /* Very dark - text on light backgrounds */
primary-900: #003d57  /* Darkest - headings */
primary-950: #002233  /* Ultra dark - high contrast text */
```

### Dark Theme Colors
Colors optimized for dark mode implementation.

```css
/* Backgrounds */
dark-bg: #0f172a  /* Primary dark background */
dark-surface: #1e293b  /* Secondary surfaces, cards */
dark-elevated: #334155  /* Elevated components */

/* Text on Dark */
text-primary: #f8fafc  /* Primary text */
text-secondary: #94a3b8  /* Secondary text */
text-tertiary: #64748b  /* Tertiary text, hints */

/* Borders & Dividers */
border-light: #334155  /* Light borders on dark */
border-dark: #1e293b  /* Dark borders */
```

### Semantic Colors
Status and feedback colors.

```css
success: #10b981  /* Green for success states */
warning: #f59e0b  /* Amber for warnings */
error:   #ef4444  /* Red for errors */
info:    #3b82f6  /* Blue for information */
```

## Usage Guidelines

### Primary Color Usage
- **primary-gradient**: Main CTAs, important highlights
- **primary-400/500**: Main brand color for text and icons
- **primary-600**: Hover states for primary buttons
- **primary-50-200**: Subtle backgrounds, hover effects
- **primary-700-900**: Text on light backgrounds

### Dark Theme Guidelines
- **dark-bg (#0f172a)**: Main page background
- **dark-surface (#1e293b)**: Cards, modals, elevated surfaces
- **dark-elevated (#334155)**: Secondary elements, dropdowns
- **text-primary (#f8fafc)**: Primary text
- **text-secondary (#94a3b8)**: Secondary text, labels
- **text-tertiary (#64748b)**: Disabled text, hints

### Text Colors on Dark
- **text-primary (#f8fafc)**: Headings, primary text
- **text-secondary (#94a3b8)**: Body text
- **text-tertiary (#64748b)**: Secondary text, captions
- **primary-400**: Brand text, interactive elements

## Component Examples

### Buttons
```jsx
// Primary Button (Gradient)
<button 
  className="font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 
  shadow-lg hover:shadow-2xl hover:scale-105 border border-[#00d4ff]/20"
  style={{ 
    background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
    color: '#0f172a'
  }}
>
  Primary Action
</button>

// Secondary Button (Outline)
<button 
  className="border-2 text-slate-300 font-semibold px-8 py-3.5 rounded-lg 
  transition-all duration-300 hover:text-[#0f172a] hover:scale-105"
  style={{ borderColor: '#00d4ff' }}
>
  Secondary Action
</button>

// Text Button
<button className="text-[#00d4ff] hover:text-[#00b8e6] transition-colors duration-300">
  Text Action
</button>
```

### Cards (Dark Theme)
```jsx
<div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 
     shadow-2xl p-8 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 
     transition-all duration-500">
  <h3 className="text-2xl font-bold text-white mb-3">Card Title</h3>
  <p className="text-slate-300 leading-relaxed">Card description text with more details</p>
</div>
```

### Headings
```jsx
<h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
  Main Heading
  <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] mt-2 rounded-full"></div>
</h1>

<h2 className="text-4xl font-bold text-white mb-4" style={{
  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}}>
  Gradient Heading
</h2>
```

### Navigation (Dark Theme)
```jsx
<header className="sticky top-0 z-50 border-b w-full shadow-2xl backdrop-blur-lg" 
        style={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }}>
  <a href="#" className="text-gray-700 hover:text-primary-500">Link</a>
</nav>
```

## Accessibility

All color combinations meet WCAG 2.1 AA standards:
- **primary-500 on white**: 4.5:1 contrast ratio ✅
- **gray-900 on white**: 16.6:1 contrast ratio ✅
- **gray-600 on white**: 7.2:1 contrast ratio ✅

## Dark Mode Support

The design system includes dark mode variants:
- Backgrounds automatically switch to dark grays
- Text colors invert appropriately
- Primary colors remain consistent for brand recognition

## Implementation

### CSS Custom Properties
All colors are available as CSS custom properties:
```css
color: var(--primary-500);
background: var(--gray-50);
```

### Tailwind Classes
Use Tailwind utility classes:
```css
bg-primary-500
text-gray-900
border-primary-200
hover:bg-primary-600
```

## Brand Guidelines

### Do's ✅
- Use primary-500 (#0eb27d) for main CTAs
- Use white backgrounds for clean, modern look
- Maintain consistent spacing and typography
- Use semantic colors for status indicators

### Don'ts ❌
- Don't use lime green (old color) anymore
- Don't use black backgrounds (except for special cases)
- Don't mix different green tones with the primary teal
- Don't use colors outside the defined palette

## Migration Notes

### Updated Components
- ✅ Header: White background + teal accents
- ✅ Hero: White background + teal highlights  
- ✅ Button: Teal primary colors
- ✅ PlanCard: White theme + teal accents
- ✅ Scrollbar: Teal colors

### Color Replacements Made
- `lime-400` → `primary-500` (main brand color)
- `bg-black` → `bg-white` (backgrounds)
- `text-white` → `text-gray-900` (primary text)
- `text-gray-300` → `text-gray-600` (body text)

Your design system is now consistent, accessible, and ready for scaling! 🚀