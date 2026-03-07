# CSS Component Guide - Quick Reference

This guide shows which CSS variables and classes are used by each component.

---

## 🎨 HEADER Component
**File:** `src/components/Header.jsx`

### Colors Used:
- `--color-linen` — Background color
- `--color-obsidian` — Navigation text
- `--color-brick-red` — Logo accent & hover effect
- `--color-slate-blue` — Link hover color
- `--color-white` — Profile container background

### How to Customize:
1. Open `src/styles/theme.css`
2. Find the COLOR PALETTE section
3. Change these values:
   ```css
   --color-linen: #f8f7f3e5;        /* Header background */
   --color-brick-red: #B7413E;      /* Logo "Canvas" color */
   --color-slate-blue: #2855bd;     /* Logo "Code" color */
   ```

---

## 🎭 HERO Component
**File:** `src/components/Hero.jsx`

### Colors Used:
- `--color-linen` — Section background
- `--color-brick-red` — Headline "Art" text & Primary button
- `--color-slate-blue` — Headline "Algorithm" text & Secondary button border
- `--color-obsidian` — Body text

### Button Styles:
- **Primary Button** (View My Work) → Uses `.btn-primary` class
  - Background: `--btn-primary-bg` (#B7413E - brick red)
  - Hover effect: Darker red (#A53528) + lift animation
  
- **Secondary Button** (Let's Talk) → Uses `.btn-secondary` class
  - Border: `--btn-secondary-border` (#2855bd - slate blue)
  - Hover: Fills with slate blue background

### How to Customize:
1. Open `src/styles/theme.css`
2. Change button colors:
   ```css
   --btn-primary-bg: #B7413E;       /* "View My Work" button */
   --btn-primary-bg-hover: #A53528; /* On hover - darker shade */
   --btn-secondary-border: #2855bd; /* "Let's Talk" border */
   --btn-secondary-bg-hover: #2855bd; /* Hover background */
   ```

### Button Hover Effects:
- Lift up: `transform: translateY(-2px)`
- Shadow appears: `box-shadow: 0 6px 12px rgba(...)`
- Smooth transition: `--transition-base: 0.3s ease`

---

## 🔘 BUTTON Component (UI)
**File:** `src/components/UI/Button.jsx`

### Classes & Styles:
- `.btn` — Base button styles
- `.btn-primary` — Brick red button (Hero CTA)
- `.btn-secondary` — Outlined button with slate blue
- `.btn-outline` — Alternative outlined style
- `.btn-small` — Header button size
- `.btn-medium` — Hero button size

### Hover Behavior:
All buttons have consistent interaction:
1. **Color change** — Using CSS variables
2. **Lift effect** — `translateY(-2px)` 
3. **Shadow** — `box-shadow` appears
4. **Smooth transition** — `0.3s ease`

---

## 🦶 FOOTER Component
**File:** `src/components/Footer.jsx`

### Colors Used:
- `--color-linen` — Background (same as body)
- `--color-obsidian` — Text content
- `--color-brick-red` — Accent highlights
- `--color-slate-blue` — Links and hover effects
- `--color-light-gray` — Divider borders

---

## 🎬 Global Styles & Utilities

### Typography (Applied Everywhere):
- `h1` — `3.5rem` (Brick red & Slate blue in Hero)
- `h2` — `2.5rem`
- `h3` — `1.5rem`
- `p` — Regular body text in obsidian color

### Spacing System:
```
--space-xs:   0.5rem   (Small, tight spacing)
--space-sm:   1rem     (Normal spacing)
--space-md:   1.5rem   (Medium gaps)
--space-lg:   2rem     (Large sections)
--space-xl:   3rem     (Extra large)
--space-xxl:  5rem     (Hero/major sections)
```

### Animation Speeds:
```
--transition-fast:  0.2s  (Quick hovers)
--transition-base:  0.3s  (Default transitions)
--transition-slow:  0.5s  (Fade-in effects)
```

---

## 📋 How to Make Changes

### Change a Button Color:
1. Edit `src/styles/theme.css`
2. Find: `--btn-primary-bg: #B7413E;`
3. Change to your color: `--btn-primary-bg: #FF5733;`
4. Save — buttons update everywhere

### Change Header Background:
1. Edit `src/styles/theme.css`
2. Find: `--color-linen: #f8f0d4af;`
3. Change to your color: `--color-linen: #FFFFFF;`
4. Save — automatically updates Header, Hero, Footer

### Change Text Color:
1. Edit `src/styles/theme.css`
2. Find: `--color-obsidian: #949497;`
3. Change to your color: `--color-obsidian: #000000;`
4. Save — updates all text throughout the site

---

## 🎯 Variable Map

| Variable | Current Value | Used By |
|----------|---|---|
| `--color-linen` | #f8f0d4af | Header, Hero, Footer backgrounds |
| `--color-brick-red` | #B7413E | Hero headline "Art", Buttons, accents |
| `--color-slate-blue` | #2855bd | Hero headline "Code", Link hover |
| `--color-obsidian` | #949497 | All body text, headings |
| `--color-white` | #f3ebeb | Card backgrounds, button text |
| `--color-light-gray` | #070303 | Borders, dividers |
| `--btn-primary-bg` | #B7413E | Hero "View My Work" button |
| `--btn-primary-bg-hover` | #A53528 | Button on hover |
| `--btn-secondary-border` | #2855bd | "Let's Talk" button border |

---

## ✅ File Organization

```
src/styles/
├── theme.css              ← COLOR VARIABLES (Edit here!)
├── global.css             ← GLOBAL STYLES (Section comments)
├── theme.js               ← JS exports of CSS variables
└── CSS_COMPONENT_GUIDE.md ← This file!
```

**Remember:** All colors are centralized in `theme.css` for easy, modern updates!
