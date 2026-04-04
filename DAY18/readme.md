# 📅 Day 18 – JavaScript Variables, Data Types & Operators

**Phase:** 3 – JavaScript Fundamentals


## 🧠 What I Learned Today

### 1. Variables

```javascript
const name = "REF"    // value never changes — use by default
let   count = 0       // value will change
// never use var      // confusing scoping — avoid
```

Rule: always start with const. Change to let only when you know the value needs to change. This forces you to think about mutability.

---

### 2. The 7 Primitive Data Types

```javascript
const name    = "REF"         // String
const days    = 170           // Number
const active  = true          // Boolean
let   score                   // Undefined — declared, no value
const user    = null          // Null — intentional absence
// Symbol and BigInt — advanced, used rarely
```

**undefined vs null:**
- `undefined` — variable exists but has no value yet
- `null` — deliberately set to nothing

---

### 3. typeof

```javascript
typeof "REF"    // "string"
typeof 170      // "number"
typeof true     // "boolean"
typeof undefined // "undefined"
typeof null     // "object" ← famous JS bug — null is NOT an object
typeof {}       // "object"
typeof []       // "object" ← arrays are objects
typeof fn       // "function"
```

To check for null: `value === null` not `typeof value === "object"`

---

### 4. Type Coercion

JavaScript auto-converts types. Causes bugs.

```javascript
// Always use === not ==
0  == false    // true  ← dangerous
0  === false   // false ← correct

// String + Number
"5" + 3   // "53" ← number becomes string
"5" - 3   // 2    ← string becomes number
"5" * 3   // 15   ← string becomes number

// Fix: always convert user input
const input = "42"        // forms give strings
Number(input) + 1         // 43 — correct
parseInt(input, 10) + 1   // 43 — also correct
```

---

### 5. Operators

```javascript
// Arithmetic
+ - * / % **

// Assignment shorthand
x += 5  x -= 3  x *= 2  x /= 4  x++  x--

// Comparison — always ===
=== !== > >= < <=

// Logical
&&   // AND — both must be true
||   // OR  — at least one true
!    // NOT — flips boolean

// Nullish coalescing ??
const name = user.name ?? "Anonymous"
// Returns right side only if left is null or undefined
// Different from || which also catches 0 and ""

// Optional chaining ?.
const date = topic?.reviews?.nextDate
// Returns undefined instead of crashing if topic is null
```

---

### 6. The ?? vs || Difference — Critical

```javascript
const count = 0

count || 10   // 10 ← wrong, 0 is treated as falsy
count ?? 10   // 0  ← correct, 0 is a valid value

// Use ?? when 0 or "" are valid values
// Use || when you want to catch all falsy values
```

---

### 7. How JavaScript Runs

```
.js file → V8 engine → bytecode → JIT compiled → CPU executes

Single-threaded → one call stack → one thing at a time
This is why async/await exists — so long tasks don't block everything
```

---

## REF Connection

```javascript
// Topics in REF will use all these types
const topic = {
  id:          "topic_001",          // string
  title:       "CSS Flexbox",        // string
  dayLearned:  9,                    // number
  isReviewed:  false,                // boolean
  nextReview:  null,                 // null — not scheduled yet
  rating:      undefined,            // undefined — not rated yet
}

// Safe access
const nextDate = topic?.nextReview ?? "Not scheduled yet"
```

---

## 💡 Key Takeaways

1. **Always const, then let if needed.** Never var.
2. **Always === never ==.** Type coercion causes silent bugs.
3. **typeof null === "object" is a bug.** Use value === null instead.
4. **"5" + 3 = "53" not 8.** Always convert user input with Number().
5. **?? checks null/undefined only.** || checks all falsy values.
6. **?. prevents crashes on null access.** Returns undefined instead.
7. **JavaScript is single-threaded.** One thing at a time.

---
