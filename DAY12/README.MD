# 📅 Day 12 – Tailwind CSS Deep Dive

**Phase:** 2 – HTML & CSS Foundations


---

## 🧠 What I Learned Today

### 1. Why Tailwind Exists

Traditional CSS: write HTML → switch to CSS file → name classes → worry about specificity.

Tailwind: compose utility classes directly in HTML. No switching files. No naming things. No specificity conflicts.

```html
<!-- Traditional -->
<div class="card">...</div>
/* then in CSS: .card { background: white; padding: 24px; border-radius: 12px; } */

<!-- Tailwind -->
<div class="bg-white p-6 rounded-xl">...</div>
```

---

### 2. How Classes Map to CSS

Each Tailwind class = one CSS property:

```
bg-white        → background-color: white
p-6             → padding: 1.5rem
px-4            → padding left + right: 1rem
py-2            → padding top + bottom: 0.5rem
mt-4            → margin-top: 1rem
mx-auto         → margin: auto (centres block elements)
text-xl         → font-size: 1.25rem
font-bold       → font-weight: 700
text-gray-600   → color: #4b5563
rounded-lg      → border-radius: 0.5rem
border          → border-width: 1px
shadow-md       → box-shadow: medium
flex            → display: flex
items-center    → align-items: center
justify-between → justify-content: space-between
gap-4           → gap: 1rem
grid            → display: grid
w-full          → width: 100%
h-screen        → height: 100vh
hidden          → display: none
```

---

### 3. The Spacing Scale

Each number = 0.25rem (4px):
```
1 = 4px    2 = 8px    3 = 12px   4 = 16px
6 = 24px   8 = 32px   10 = 40px  12 = 48px   16 = 64px
```

So p-4 = 16px padding, mt-8 = 32px margin-top, gap-6 = 24px gap.

---

### 4. Responsive Prefixes

```html
<!-- Stack on mobile, row on tablet+ -->
<div class="flex flex-col md:flex-row gap-4">

<!-- 1 col mobile, 2 col tablet, 3 col desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Hide on mobile, show on large screens -->
<div class="hidden lg:block">
```

Breakpoints: sm=640px, md=768px, lg=1024px, xl=1280px

---

### 5. State Variants

```html
<button class="bg-blue-500 hover:bg-blue-600 active:scale-95">
<input class="border focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
<button class="disabled:opacity-50 disabled:cursor-not-allowed">
<div class="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
```

---

### 6. CDN vs CLI

**CDN** — prototyping only, one script tag, 3MB+ CSS file:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**CLI** — production, tree-shakes unused classes, often under 10KB:
```bash
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./input.css -o ./output.css --watch
```

---

### 7. @layer components — Reusable Patterns

```css
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer;
  }
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white;
  }
  .btn-secondary {
    @apply bg-gray-100 hover:bg-gray-200 text-gray-700;
  }
  .card {
    @apply bg-white rounded-xl border border-gray-200 p-6;
  }
  .input {
    @apply w-full border border-gray-300 rounded-lg px-3 py-2
           text-sm focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
}
```

Then in HTML: `<button class="btn btn-primary">Sign up</button>`

---

### 8. Real Components

**Navbar:**
```html
<nav class="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
  <a href="/" class="text-xl font-bold text-gray-900">MySaaS</a>
  <div class="flex items-center gap-6">
    <a href="#" class="text-gray-600 hover:text-gray-900 text-sm">Features</a>
    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Sign up</a>
  </div>
</nav>
```

**Feature card:**
```html
<div class="bg-white rounded-xl border border-gray-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
  <div class="text-2xl mb-3">⚡</div>
  <h3 class="font-bold text-gray-900 mb-2">Fast uploads</h3>
  <p class="text-gray-600 text-sm leading-relaxed">Description here.</p>
</div>
```

**Feature grid:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- cards here -->
</div>
```

**Hero:**
```html
<section class="py-20 px-6 text-center bg-gray-50">
  <h1 class="text-5xl font-black text-gray-900 mb-4 max-w-3xl mx-auto">Headline</h1>
  <p class="text-xl text-gray-600 mb-8 max-w-xl mx-auto">Subtext here.</p>
  <div class="flex gap-4 justify-center">
    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Get started</a>
    <a href="#" class="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">See demo</a>
  </div>
</section>
```

---

## 💡 Key Takeaways

1. **Each Tailwind class = one CSS property.** No magic, just shortcuts.
2. **Spacing scale: number × 4 = pixels.** p-4 = 16px, mt-8 = 32px.
3. **Responsive prefix + any class.** md:flex-row means flex-row at 768px+.
4. **State prefix + any class.** hover:bg-blue-600 means that colour on hover.
5. **CDN for prototyping, CLI for real projects.**
6. **@layer components + @apply for repeated patterns.** Keeps HTML clean.
7. **Tailwind replaces most of your custom CSS.** You rarely need a separate CSS file.

---

