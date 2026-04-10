# 📅 Day 22 – Functions II: Scope, Hoisting & Closures

**Phase:** 3 – JavaScript Fundamentals

---

## 🧠 What I Learned Today

### 1. Scope — 3 Levels

```javascript
const appName = "REF"           // global — everywhere

const fn = () => {
  const result = 42             // function scope — only inside fn
}
console.log(result)             // ReferenceError

if (true) {
  const blockVar = "inside"    // block scope — only inside {}
}
console.log(blockVar)           // ReferenceError
```

**Scope chain — JavaScript looks UP never down:**
```javascript
const outer = () => {
  const x = "outer"
  const inner = () => {
    console.log(x)  // works — looks up to outer scope
  }
  inner()
}
// inner can see outer's variables
// outer CANNOT see inner's variables
```

---

### 2. Hoisting

JavaScript reads files in 2 passes before running.

**Creation phase — what gets hoisted:**
```javascript
// Function declarations — fully hoisted (definition moves to top)
fn()              // works — declaration hoisted
function fn() { return "hello" }

// var — hoisted but value is undefined
console.log(a)    // undefined — not ReferenceError
var a = 1

// const and let — hoisted but in Temporal Dead Zone
console.log(b)    // ReferenceError — TDZ
const b = 2
```

**Temporal Dead Zone (TDZ):**
The period between the start of the block and the `const`/`let` declaration. Variable exists but cannot be accessed. Accessing it throws ReferenceError.

---

### 3. Closures

A function that remembers variables from the scope where it was created — even after that scope has finished.

```javascript
const makeCounter = () => {
  let count = 0              // closed over

  return () => {
    count++
    return count
  }
}

const counter = makeCounter()
counter()   // 1
counter()   // 2
counter()   // 3 — count stays alive because of closure
```

**3 real uses:**

```javascript
// 1. Data privacy
const makeCounter = () => {
  let count = 0
  return {
    increment: () => ++count,
    getCount:  () => count
  }
  // count is private — no direct access from outside
}

// 2. Function factories
const makeMultiplier = (factor) => (number) => number * factor
const double = makeMultiplier(2)
const triple = makeMultiplier(3)
double(5)  // 10
triple(5)  // 15

// 3. REF topic tracker
const makeTopicTracker = (title) => {
  let reviewCount = 0
  let lastRating  = null
  return {
    review:   (rating) => { reviewCount++; lastRating = rating },
    getStats: () => ({ title, reviewCount, lastRating })
  }
}
```

---

### 4. The Classic Closure Bug

```javascript
// Bug — var shares one binding across all iterations
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}
// Prints: 3 3 3 — not 0 1 2

// Fix — let creates a new binding per iteration
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}
// Prints: 0 1 2
```

This is a famous interview question. Know it deeply.

---

## 💡 Key Takeaways

1. **JavaScript looks UP the scope chain. Never down.**
2. **Function declarations are fully hoisted. const/let are not.**
3. **TDZ: accessing const/let before declaration = ReferenceError.**
4. **A closure keeps a variable alive after its scope ends.**
5. **Each closure call creates a new independent scope.**
6. **var in loops = shared binding = classic bug. Use let.**
7. **Closures enable data privacy, function factories, state.**

---

