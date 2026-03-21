# 📅 Day 10 – Advanced CSS

**Phase:** 2 – HTML & CSS Foundations


## 🧠 What I Learned Today

### 1. Browser Rendering Pipeline — Reflow vs Repaint

```
DOM + CSSOM → Render Tree → Layout → Paint → Composite
```

**Reflow (Layout)** — recalculates positions and sizes. Most expensive.
Triggered by: `width, height, margin, padding, top, left, display, font-size`

**Repaint** — redraws pixels without changing geometry. Cheaper.
Triggered by: `color, background-color, visibility, box-shadow`

**Composite only** — GPU handles it. Fastest. Use for all animations.
Triggered by: `transform, opacity`

```css
/* WRONG — triggers reflow every animation frame */
.bad { transition: width 0.3s, left 0.3s; }

/* CORRECT — composite only, smooth 60fps */
.good { transition: transform 0.3s, opacity 0.3s; }

/* Move with transform not left/top */
.move { transform: translateX(100px); }  /* fast */
.move { left: 100px; }                   /* slow */
```

---

### 2. CSS Grid

Flexbox = 1D (row OR column). Grid = 2D (rows AND columns).

```css
/* Responsive card grid — NO media queries needed */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* Named grid areas — page layout */
.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}
header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }

/* Spanning cells */
.wide { grid-column: span 2; }
.full { grid-column: 1 / -1; } /* always full width */
```

---

### 3. CSS Variables — Theme System

```css
/* Define on :root */
:root {
  --clr-primary:  #3b82f6;
  --clr-bg:       #ffffff;
  --clr-surface:  #f8fafc;
  --clr-border:   #e2e8f0;
  --clr-text:     #1e293b;
  --clr-muted:    #64748b;
  --radius:       0.5rem;
}

/* Dark mode — just override variables */
[data-theme="dark"] {
  --clr-bg:      #0f172a;
  --clr-surface: #1e293b;
  --clr-border:  #334155;
  --clr-text:    #f1f5f9;
  --clr-muted:   #94a3b8;
}

/* Use everywhere */
body  { background: var(--clr-bg); color: var(--clr-text); }
.card { background: var(--clr-surface); border: 1px solid var(--clr-border); }
```

**Dark mode toggle JS:**
```javascript
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? '' : 'dark';
  btn.textContent = isDark ? '🌙' : '☀️';
});
```

---

### 4. Transitions and Animations

```css
/* Transitions — smooth state changes */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

/* Keyframe animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Staggered card entry */
.feature-card { animation: fadeInUp 0.4s ease forwards; opacity: 0; }
.feature-card:nth-child(1) { animation-delay: 0ms; }
.feature-card:nth-child(2) { animation-delay: 100ms; }
.feature-card:nth-child(3) { animation-delay: 200ms; }
```

---

## 🏗️ Project Built Today

**`frontend/landing.html` + `frontend/landing.css`** — SaaS landing page with:
- Sticky nav with dark mode toggle button
- Hero section using CSS Grid 2 columns (text + image)
- Stats row using CSS Grid 3 equal columns
- Features grid using `auto-fill + minmax` — responsive with no media queries
- CSS variable theme system — all colours use `var(--clr-*)`
- Dark mode that switches entire page with one button
- Cards animate in with staggered `fadeInUp` on page load
- Hover effect on all cards using `transform` only

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| Best CSS for slide-in animation | ✅ transform: translateX() — composite only |
| What repeat(auto-fill, minmax(200px, 1fr)) does | ✅ Responsive columns, no media queries needed |
| What happens when data-theme="dark" is added to html | ✅ All CSS variables update — whole page switches instantly |

---

## 💡 Key Takeaways

1. **Always animate transform and opacity.** Never width, height, top, left — they trigger reflow.
2. **Grid for 2D, Flexbox for 1D.** Page layouts use Grid. Component layouts use Flexbox.
3. **auto-fill + minmax = best responsive pattern.** One line replaces multiple media queries.
4. **CSS variables cascade.** Change one :root value and every element using it updates.
5. **Dark mode is one attribute change.** Redefine variables on [data-theme="dark"] — done.
6. **animation-delay staggers elements.** Adds 100ms per card for a professional entrance effect.

---
