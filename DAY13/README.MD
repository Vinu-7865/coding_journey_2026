# 📅 Day 13 – CSS Animations & Transitions

**Phase:** 2 – HTML & CSS Foundations


## 🧠 What I Learned Today

### 1. CSS Transitions

Smoothly animate a property when state changes (hover, focus, active).

```css
/* Syntax */
transition: property duration timing-function delay;

/* Single property */
transition: background 0.2s ease;

/* Multiple properties — comma separated */
transition: transform 0.3s ease, opacity 0.2s ease, box-shadow 0.2s ease;

/* Avoid — transitions EVERYTHING including layout properties */
transition: all 0.2s ease;
```

**Timing functions:**
```css
ease         /* default — slow start, fast middle, slow end */
ease-in      /* slow start */
ease-out     /* slow end — best for elements leaving screen */
ease-in-out  /* slow start and end */
linear       /* constant speed — use for spinners */
cubic-bezier(0.34, 1.56, 0.64, 1) /* custom curve — bouncy */
```

**Only transition these — they are GPU accelerated:**
```css
transform    /* move, scale, rotate — composite only */
opacity      /* fade — composite only */
background   /* colour change — repaint only */
box-shadow   /* shadow — repaint only */

/* Never transition — causes reflow every frame */
width, height, margin, padding, top, left
```

---

### 2. Common Transition Patterns

**Button hover — lift + shadow:**
```css
.btn {
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;
}
.btn:hover  { background: #2563eb; transform: translateY(-2px); box-shadow: 0 8px 16px rgba(59,130,246,0.3); }
.btn:active { transform: translateY(0) scale(0.97); }
```

**Card lift:**
```css
.card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
```

**Nav link underline slide:**
```css
.nav-link { position: relative; transition: color 0.15s ease; }
.nav-link::after {
  content: ""; position: absolute; bottom: -2px; left: 0;
  width: 0; height: 2px; background: #3b82f6;
  transition: width 0.2s ease;
}
.nav-link:hover { color: #3b82f6; }
.nav-link:hover::after { width: 100%; }
```

---

### 3. Keyframe Animations

Run automatically without needing a trigger.

```css
@keyframes animationName {
  from { /* start */ }
  to   { /* end   */ }
}

/* Or with steps */
@keyframes animationName {
  0%   { }
  50%  { }
  100% { }
}

/* Apply */
.element {
  animation: name duration timing delay iteration fill-mode;
}
```

**Key properties:**
```css
animation-duration:        0.4s;
animation-timing-function: ease;
animation-delay:           200ms;
animation-iteration-count: 1 | infinite;
animation-fill-mode:       forwards; /* keeps end state after animation */
```

---

### 4. Essential Animations to Know

**fadeInUp — most used:**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card { opacity: 0; animation: fadeInUp 0.4s ease forwards; }
```

**Spinner — loading state:**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.spinner {
  width: 20px; height: 20px;
  border: 2px solid #e2e8f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
```

**Pulse — draws attention:**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}
.badge { animation: pulse 2s ease-in-out infinite; }
```

**Shimmer — skeleton loading:**
```css
@keyframes shimmer {
  from { background-position: -200% 0; }
  to   { background-position: 200% 0; }
}
.skeleton {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

**Bounce in:**
```css
@keyframes bounceIn {
  0%   { transform: scale(0); }
  60%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.badge { animation: bounceIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
```

---

### 5. Staggered Animations

Makes multiple elements animate in one by one — much more professional:

```css
.card { opacity: 0; animation: fadeInUp 0.4s ease forwards; }
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
.card:nth-child(4) { animation-delay: 300ms; }
```

---

### 6. Microinteractions

**Toggle switch:**
```css
.toggle { width:44px; height:24px; background:#e2e8f0; border-radius:99px; position:relative; transition:background 0.2s; }
.toggle.on { background: #3b82f6; }
.toggle::after { content:""; position:absolute; width:18px; height:18px; background:#fff; border-radius:50%; top:3px; left:3px; transition:transform 0.2s; }
.toggle.on::after { transform: translateX(20px); }
```

**Input focus ring:**
```css
.input { border:1px solid #d1d5db; transition: border-color 0.15s, box-shadow 0.15s; outline:none; }
.input:focus { border-color:#3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
```

---

## 💡 Key Takeaways

1. **Transition = state change. Animation = runs automatically.**
2. **Only animate transform and opacity for 60fps performance.**
3. **Never animate width, height, margin, top, left — they trigger reflow.**
4. **animation-fill-mode: forwards keeps the end state** — without it the element snaps back.
5. **opacity: 0 on the element before animating** — otherwise it flashes visible before the animation runs.
6. **Stagger with animation-delay** — 100ms per element looks professional.
7. **cubic-bezier for bouncy effects** — cubic-bezier(0.34, 1.56, 0.64, 1) is the standard bounce.
8. **linear for spinners** — constant speed looks right for loading states.

---

