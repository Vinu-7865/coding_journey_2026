# 📅 Day 11 – CSS Selectors & Specificity

**Phase:** 2 – HTML & CSS Foundations


## 🧠 What I Learned Today

### 1. The Cascade — How CSS Resolves Conflicts

When two rules target the same element, CSS resolves the conflict in this exact order:

1. **Importance** — `!important` beats everything (never use this)
2. **Specificity** — higher score wins
3. **Source order** — if equal specificity, last rule written wins

---

### 2. Every Selector Type

**Basic:**
```css
p { }              /* element */
.card { }          /* class */
#header { }        /* id — avoid in CSS */
* { }              /* universal */
```

**Combinators:**
```css
.card p { }        /* descendant — any p inside .card at any depth */
.nav > a { }       /* child — DIRECT children only */
h2 + p { }         /* adjacent sibling — p immediately after h2 */
h2 ~ p { }         /* general sibling — all p elements after h2 */
```

**Multiple:**
```css
h1, h2, h3 { }    /* same style for all three */
```

**Attribute:**
```css
input[type="email"] { }   /* exact match */
a[href^="https"] { }      /* starts with */
a[href$=".pdf"] { }       /* ends with */
img[alt*="logo"] { }      /* contains */
```

---

### 3. Specificity Scoring

Specificity is scored as 4 numbers: **inline — id — class — element**

| Selector | Score |
|----------|-------|
| `p` | 0-0-0-1 |
| `.card` | 0-0-1-0 |
| `.card p` | 0-0-1-1 |
| `.nav .link` | 0-0-2-0 |
| `#header` | 0-1-0-0 |
| `#header .nav a` | 0-1-1-1 |
| `style=""` | 1-0-0-0 |

**Higher number wins:**
```css
p { color: red; }           /* 0-0-0-1 */
.intro p { color: blue; }   /* 0-0-1-1 ← wins */
```

**Same specificity — last rule wins:**
```css
.btn { background: blue; }
.btn { background: red; }   /* ← wins, comes last */
```

**Never use `!important`** — if you feel like you need it, your CSS structure is wrong.

---

### 4. Pseudo-classes

```css
/* State */
a:hover        { color: #3b82f6; }
input:focus    { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,.15); }
button:active  { transform: scale(0.97); }
input:disabled { opacity: 0.5; cursor: not-allowed; }

/* Position */
li:first-child    { font-weight: 700; }
li:last-child     { border-bottom: none; }
li:nth-child(2)   { color: red; }
li:nth-child(odd) { background: #f8fafc; }
li:nth-child(3n)  { color: blue; } /* every 3rd */

/* Negation */
.card:not(.featured)          { opacity: 0.8; }
input:not([type="submit"])    { border: 1px solid #e2e8f0; }
```

---

### 5. Pseudo-elements

Add content before or after an element — purely in CSS, no HTML needed. Always requires `content` property even if empty.

```css
/* Add checkmark before list items */
.feature-list li::before {
  content: "✓ ";
  color: #3b82f6;
  font-weight: 700;
}

/* Decorative underline after headings */
.section-title::after {
  content: "";           /* required even if empty */
  display: block;
  width: 48px;
  height: 3px;
  background: #3b82f6;
  margin-top: 8px;
}

/* CSS-only tooltip */
[data-tooltip] { position: relative; }
[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
}
```

---

### 6. Key Rules for Real Projects

```css
/* Good — use classes for everything */
.nav-link { color: #64748b; }
.nav-link:hover { color: #3b82f6; }
.nav-link.active { color: #3b82f6; font-weight: 600; }

/* Bad — ID is too specific, hard to override */
#nav-link { color: #64748b; }

/* Good — BEM keeps specificity flat */
.card { }
.card__title { }
.card__body { }
.card--featured { }

/* Bad — deep nesting raises specificity unnecessarily */
.section .container .card .title { }
```

---

## 🏗️ Project Built Today

**`frontend/card.html` + `frontend/card.css`** — a pricing card styled using only CSS selectors. No extra classes or IDs added to the HTML. Used:
- `.card > span` — direct child for the badge
- `.card li:last-child` — remove last border
- `.card li::before` — checkmark pseudo-element
- `.card > a:hover` — button hover state
- `li:nth-child(odd)` — alternating row backgrounds

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| .nav a vs a:hover — which wins? | ✅ .nav a wins — 0-0-1-1 beats 0-0-1-0 |
| Difference between .card p and .card > p | ✅ > is direct child only. Without > targets any depth. |
| Add underline under h2 without touching HTML | ✅ h2::after with content:"", display:block, width, height, background |

---

## 💡 Key Takeaways

1. **Cascade order: importance → specificity → source order.**
2. **Specificity = inline-id-class-element.** Higher number wins.
3. **Never use !important.** If you need it, restructure your CSS.
4. **Avoid IDs in CSS.** Too specific, hard to override — use classes.
5. **Keep specificity flat.** Deep nesting creates specificity wars.
6. **.card p vs .card > p** — the > restricts to direct children only.
7. **::before and ::after need content: ""** even if decorative and empty.
8. **Pseudo-classes count as class-level (0-0-1-0) in specificity.**

---

