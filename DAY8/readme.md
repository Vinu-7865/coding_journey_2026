# 📅 Day 8 – HTML Foundations

**Phase:** 2 – HTML & CSS Foundations

---

## 🧠 What I Learned Today

### 1. What HTML Actually Is

HTML is a **markup language** — not a programming language. No logic, no loops. It describes the structure and meaning of content. The browser reads it and renders it visually.

Three things HTML does NOT do:
- Style (that's CSS)
- Behaviour (that's JavaScript)
- Logic (that's neither)

---

### 2. Tags, Elements, Attributes

```html
<a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
 ↑  ↑                         ↑               ↑             ↑      ↑
tag attr=value              attr=value      attr=value    content  closing tag
```

**Self-closing tags (no content, no closing tag):**
```html
<img src="photo.jpg" alt="Description">
<input type="text">
<br>  <hr>  <meta>  <link>
```

---

### 3. Core Tags

```html
<!-- Document structure -->
<!DOCTYPE html>                  → tells browser this is HTML5
<html lang="en">                 → root, lang helps screen readers
<head>                           → metadata, not visible
<body>                           → everything visible

<!-- Text -->
<h1> to <h6>                     → headings, h1 most important
<p>                              → paragraph
<strong>                         → bold + important
<em>                             → italic + emphasized
<span>                           → inline container, no meaning

<!-- Links & Media -->
<a href="url" target="_blank" rel="noopener">   → link (always add rel="noopener")
<img src="" alt="">              → image, alt ALWAYS required

<!-- Lists -->
<ul><li>                         → unordered (bullets)
<ol><li>                         → ordered (numbers)

<!-- Forms -->
<form action="/submit" method="POST">
<label for="id">                 → must match input id
<input type="email" id="id">     → connected to label
<button type="submit">

<!-- Containers -->
<div>                            → block container, no meaning
<span>                           → inline container, no meaning
```

**Input types:**
```html
text · email · password · number · tel · checkbox · radio
file · date · range · hidden · textarea · select
```

---

### 4. Semantic HTML

Use elements that describe what content IS, not just how it looks.

```html
<!-- Wrong — meaningless div soup -->
<div class="header">
  <div class="nav"><div>Home</div></div>
</div>

<!-- Right — semantic -->
<header>
  <nav><a href="/">Home</a></nav>
</header>
```

**Semantic elements:**
```html
<header>     top of page or section
<nav>        navigation links
<main>       primary content — ONE per page only
<article>    self-contained content (blog post, card, comment)
<section>    themed grouping — needs a heading inside
<aside>      sidebar, related but not main content
<footer>     bottom of page or section
<figure>     image with caption
<figcaption> caption inside figure
<time>       dates — machine readable
<address>    contact info
```

**article vs section:**
- `<article>` — could be published or syndicated independently (blog post, product card, tweet)
- `<section>` — groups related content within a page, needs a heading, not standalone

---

### 5. Accessibility (a11y)

**5 non-negotiable rules:**

```html
<!-- 1. Every image needs alt text -->
<img src="chart.png" alt="Revenue grew 40% in Q3">
<img src="divider.svg" alt="">     <!-- empty = decorative, skip it -->

<!-- 2. Labels connected to inputs -->
<label for="email">Email</label>
<input type="email" id="email">   <!-- for and id must match -->

<!-- 3. Buttons need descriptive text -->
<button aria-label="Close dialog">✕</button>

<!-- 4. Heading hierarchy is sequential -->
<h1>Title</h1>
<h2>Section</h2>     <!-- never jump from h1 to h3 -->
<h3>Subsection</h3>

<!-- 5. Links describe destination -->
<a href="/docs">View documentation</a>   <!-- not "click here" -->
```

**Test:** Press Tab through your page — every interactive element must be reachable. Turn on VoiceOver (Mac: Cmd+F5) and navigate — it should make sense.

---

### 6. How Browsers Parse HTML

```
Bytes received
    ↓ decode
Characters (UTF-8)
    ↓ tokenize
Tokens (tags, text)
    ↓ node creation
DOM (tree of objects)
    ↓ combine with CSSOM
Render Tree → Layout → Paint → Screen
```

The DOM is the in-memory tree JavaScript manipulates with `document.querySelector()`.

**Script loading:**
```html
<!-- Blocks parsing — browser stops until JS loads+runs -->
<script src="app.js"></script>

<!-- Downloads parallel, runs AFTER HTML parsed — use this -->
<script src="app.js" defer></script>

<!-- Downloads parallel, runs immediately when ready — for independent scripts -->
<script src="analytics.js" async></script>
```

Rule: `defer` for your own scripts. `async` for independent third-party scripts. Both go in `<head>`.

---

### 7. Complete Correct HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description for SEO">
  <title>Page Title — Site Name</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Main Heading</h1>
      <p>Content...</p>
    </article>
  </main>
  <footer>
    <p>&copy; 2026 My SaaS</p>
  </footer>
</body>
</html>
```

---

## 🏗️ Project Built Today

**`frontend/index.html`** — personal developer bio page with:
- Semantic structure: header, nav, main, sections, articles, footer
- About section with photo (with alt text) and bio
- Skills section with unordered list
- Projects section with article elements, each with h3, description, and GitHub link
- Contact form with properly labelled inputs
- All accessibility rules applied

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| Decorative image — correct alt attribute? | ✅ alt="" — empty tells screen readers to skip it |
| Problem with plain script tag in head? | ✅ Blocks HTML parsing until JS loads and executes |
| Wrapping blog post previews — article or section? | ✅ article — each post is self-contained content |

---

## 💡 Key Takeaways

1. **HTML describes meaning, not appearance.** That's CSS's job.
2. **Semantic elements are not optional.** They affect SEO, accessibility, and maintainability.
3. **Every image needs an alt attribute.** Decorative = empty string. Informative = description.
4. **One h1 per page.** Never skip heading levels.
5. **target="_blank" always needs rel="noopener".** Security requirement.
6. **Always use defer on your scripts.** No more render blocking.
7. **The DOM is built from your HTML.** It's what JavaScript actually works with.
