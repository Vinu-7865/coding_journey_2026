# 📅 Day 25 – Strings & Template Literals

**Phase:** 3 – JavaScript Fundamentals


---

## 🧠 What I Learned Today

### 1. Strings are Immutable

```javascript
const title = "  Flexbox  "
title.trim()           // "Flexbox" — new string returned
console.log(title)     // "  Flexbox  " — original unchanged

const clean = title.trim()   // must assign the result
```

---

### 2. Template Literals

```javascript
const title = "Flexbox"
const day   = 9

// Any expression inside ${}
const msg = `Topic: ${title} — Day ${day}`
const msg = `Rating: ${rating >= 3 ? "Good" : "Needs work"}`
const msg = `Upper: ${title.toUpperCase()}`

// Multi-line
const html = `
  <h3>${title}</h3>
  <p>Day ${day}</p>
`
```

---

### 3. Essential Methods

```javascript
// Case
"hello".toUpperCase()      // "HELLO"
"HELLO".toLowerCase()      // "hello"

// Trim
"  hello  ".trim()         // "hello"
"  hello  ".trimStart()    // "hello  "
"  hello  ".trimEnd()      // "  hello"

// Check contents
"Flexbox".includes("Flex")     // true
"Flexbox".startsWith("Flex")   // true
"Flexbox".endsWith("box")      // true

// Find position
"Flexbox".indexOf("box")       // 4
"Flexbox".indexOf("Grid")      // -1 — not found

// Extract
"CSS Flexbox".slice(4)         // "Flexbox"
"CSS Flexbox".slice(0, 3)      // "CSS"
"CSS Flexbox".slice(-3)        // "box" — from end

// Replace
"CSS-Flexbox".replace("-", " ")      // "CSS Flexbox" — first only
"CSS-Flex-Box".replaceAll("-", " ")  // "CSS Flex Box" — all

// Split
"a,b,c".split(",")     // ["a", "b", "c"]
"hello".split("")      // ["h","e","l","l","o"]

// Padding
"9".padStart(2, "0")   // "09"
"9".padEnd(3, "0")     // "900"

// Repeat
"-".repeat(10)         // "----------"
```

---

### 4. Number ↔ String

```javascript
// Number to string
String(42)        // "42"
(3.14).toFixed(2) // "3.14"
(3).toFixed(2)    // "3.00"

// String to number
Number("42")      // 42
Number("abc")     // NaN
parseInt("42px")  // 42
+"42"             // 42 — unary plus
```

---

## REF Connection

```javascript
// Clean user input
const clean = (s) => s.trim().toLowerCase()

// Search topics
const search = (topics, q) =>
  topics.filter(t => t.title.toLowerCase().includes(q.trim().toLowerCase()))

// Format summary
const getSummary = ({ title, subject, day, rating }) =>
  `${title} (${subject}) — Day ${String(day).padStart(2,"0")} — ${rating ? `Rating: ${rating}` : "Not rated"}`
```

---

## 💡 Key Takeaways

1. **Strings are immutable — methods return new strings, always assign.**
2. **Template literals for anything with variables — no concatenation.**
3. **trim() user input before every operation.**
4. **includes() for simple checks — indexOf for position.**
5. **slice(start, end) — end is exclusive, negatives count from end.**
6. **split() + join() to transform strings.**
7. **padStart(2,"0") for consistent number formatting.**
8. **Number("abc") returns NaN — always validate user input.**

---

