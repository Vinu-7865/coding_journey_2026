# 📅 Day 9 – CSS Foundations

**Phase:** 2 – HTML & CSS Foundations


## 🧠 What I Learned Today

### 1. The Cascade, Specificity, Inheritance

**Cascade** — when multiple rules target the same element, the winner is decided by:
1. Importance (`!important` — avoid)
2. Specificity (how specific the selector is)
3. Source order (last rule wins if equal specificity)

**Specificity:**
```
inline style      1000
#id               100
.class            10
element           1
```

**Inheritance** — some properties pass to children automatically (color, font-family, line-height). Others don't (margin, padding, border, width).

---

### 2. The Box Model

Every element is a rectangular box with 4 layers:

```
┌─────────────────────────┐
│         MARGIN          │  space outside border
│  ┌───────────────────┐  │
│  │      BORDER       │  │  visible border line
│  │  ┌─────────────┐  │  │
│  │  │   PADDING   │  │  │  space inside border
│  │  │  ┌───────┐  │  │  │
│  │  │  │CONTENT│  │  │  │  actual text/image
│  │  │  └───────┘  │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

**Always use border-box:**
```css
/* content-box (default) — width only sets content area */
/* width:200px + padding:20px = 240px total — confusing! */

/* border-box — width includes padding and border */
/* width:200px always means 200px total — predictable */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

### 3. Selectors

```css
p { }                      /* element — specificity: 1 */
.card { }                  /* class — specificity: 10 */
#header { }                /* id — specificity: 100, avoid */
.card p { }                /* descendant */
.nav > a { }               /* direct child only */
h1, h2, h3 { }            /* multiple selectors */
a:hover { }                /* pseudo-class — state */
input:focus { }
li:first-child { }
li:nth-child(2) { }
p::first-line { }          /* pseudo-element — part of element */
.card::before { content: ""; }
input[type="email"] { }    /* attribute selector */
```

Rule: Use classes for almost everything. Avoid IDs in CSS. Never use `!important`.

---

### 4. Display Types

```css
display: block;        /* full width, stacks vertically */
display: inline;       /* sits in text, width/height ignored */
display: inline-block; /* sits inline, BUT respects width/height */
display: flex;         /* flexbox container */
display: grid;         /* grid container */
display: none;         /* removes from flow entirely */
```

---

### 5. Flexbox

Put `display: flex` on the parent. Children become flex items.

```css
/* PARENT (container) properties */
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;
align-items: flex-start | center | flex-end | stretch;
flex-wrap: nowrap | wrap;
gap: 16px;

/* CHILDREN (items) properties */
flex: 1;               /* grow to fill available space */
flex: 0 0 200px;       /* fixed 200px, no grow/shrink */
align-self: center;    /* override parent's align-items */
order: 2;              /* change visual order */
```

**6 patterns memorized:**
```css
/* 1. Center anything */
.center { display:flex; justify-content:center; align-items:center; }

/* 2. Navbar */
.navbar { display:flex; justify-content:space-between; align-items:center; }

/* 3. Equal cards */
.cards { display:flex; gap:24px; }
.card { flex:1; }

/* 4. Sidebar layout */
.layout { display:flex; gap:32px; }
.sidebar { flex: 0 0 260px; }
.content { flex:1; }

/* 5. Wrapping cards */
.card-grid { display:flex; flex-wrap:wrap; gap:16px; }

/* 6. Stack (column) */
.stack { display:flex; flex-direction:column; gap:16px; }
```

---

### 6. Responsive Design — Mobile First

Write styles for mobile first. Add `min-width` media queries for larger screens.

```css
/* Base = mobile */
.cards { flex-direction: column; gap: 16px; }

/* Tablet */
@media (min-width: 768px) {
  .cards { flex-direction: row; flex-wrap: wrap; }
  .card { flex: 0 0 calc(50% - 8px); }
}

/* Desktop */
@media (min-width: 1024px) {
  .card { flex: 0 0 calc(33.33% - 11px); }
}
```

**Common breakpoints:** 768px (tablet), 1024px (desktop), 1280px (wide desktop)

**Units:**
```css
px    fixed pixels
rem   relative to root font-size (16px by default)  ← use for spacing/font
em    relative to parent font-size  ← use carefully
%     relative to parent
vw    viewport width
vh    viewport height
```

---

### 7. Tailwind CSS

Utility-first CSS — use pre-built classes directly in HTML.

```html
<!-- CDN for prototyping (no build step needed) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Common classes -->
flex items-center justify-between   → flexbox patterns
p-4 px-6 py-2 m-4 mx-auto gap-4   → spacing
w-full h-screen max-w-xl           → sizing
text-xl font-bold text-gray-600     → typography
bg-blue-500 text-white             → colors
border rounded-lg shadow-md         → decoration
hover:bg-blue-600                   → hover states
md:flex-row lg:grid-cols-3          → responsive prefixes
```

---

## 🏗️ Project Built Today

**`frontend/style.css`** — complete styles for the bio page:
- Global reset with border-box
- Sticky header with flexbox navbar
- Responsive projects grid (1 col mobile → 2 col tablet)
- Styled form inputs with focus states
- Hover effects on links and buttons

**`frontend/tailwind.html`** — rebuilt navbar and project card using Tailwind utility classes

**`frontend/flexbox.html`** — all 6 Flexbox patterns demonstrated

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| Total width with content-box: 200px width + 20px padding + 2px border | ✅ 244px |
| How to vertically center flex items in a row layout | ✅ align-items: center (cross axis) |
| Why write mobile styles first with min-width queries | ✅ Simpler base styles, progressive enhancement, better mobile performance |

---

## 💡 Key Takeaways

1. **Always use box-sizing: border-box globally.** content-box causes constant confusion.
2. **Flexbox: parent controls, children respond.** Put flex on the container, not the items.
3. **justify-content = main axis. align-items = cross axis.** In row layout: horizontal vs vertical.
4. **Mobile first + min-width = correct responsive approach.** Add complexity, don't subtract it.
5. **rem for font sizes and spacing.** px for borders and shadows. Never use px for font sizes.
6. **Tailwind replaces most of your custom CSS.** You'll use it for the entire SaaS frontend.
7. **DevTools box model diagram is your best CSS debugging tool.** F12 → click element → see numbers.

---

