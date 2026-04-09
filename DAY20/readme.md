# 📅 Day 20 – Functions I

**Phase:** 3 – JavaScript Fundamentals


---

## 🧠 What I Learned Today

### 1. What a Function Is

A named reusable block of code. Define once. Call anywhere.

```javascript
// Without — repeated code, hard to maintain
const d1 = new Date(); d1.setDate(d1.getDate() + 14)
const d2 = new Date(); d2.setDate(d2.getDate() + 7)

// With — define once, use everywhere
const addDays = (days) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date
}
const d1 = addDays(14)
const d2 = addDays(7)
```

---

### 2. Three Ways to Define

```javascript
// Declaration — hoisted, can call before definition
function greet(name) { return "Hello " + name }

// Expression — NOT hoisted, must define before calling
const greet = function(name) { return "Hello " + name }

// Arrow function — shortest, NOT hoisted
const greet = (name) => "Hello " + name
```

**Hoisting:**
```javascript
sayHello()              // works — declaration is hoisted
function sayHello() { console.log("hello") }

sayHi()                 // TypeError — expression not hoisted
const sayHi = () => console.log("hi")
```

---

### 3. Parameters, Arguments, Defaults

```javascript
// Parameters = names in definition. Arguments = values passed.
const getDays = (rating) => rating * 7   // rating = parameter
getDays(3)                               // 3 = argument

// Default parameters
const create = (title, subject = "General", rating = null) => ({
  title, subject, rating
})
create("Flexbox")              // subject = "General", rating = null
create("Flexbox", undefined)   // undefined triggers default
create("Flexbox", null)        // null does NOT trigger default

// Rest parameters — collect remaining into array
const logAll = (first, ...rest) => console.log(first, rest)
logAll("a", "b", "c")   // "a" ["b", "c"]
```

---

### 4. Return Values

```javascript
// No return statement = returns undefined
const nothing = () => { const x = 1 }
nothing()   // undefined

// Return exits immediately — use for early returns
const getDays = (rating) => {
  if (rating === 4) return 14
  if (rating === 3) return 7
  if (rating === 2) return 3
  if (rating === 1) return 1
  throw new Error(`Invalid rating: ${rating}`)
}
```

---

### 5. Arrow Function Shorthand

```javascript
// Multi params
const add = (a, b) => a + b

// One param — parens optional
const double = n => n * 2

// No params
const greet = () => "Hello"

// Multi-line — needs { } and return
const fn = (x) => {
  const y = x * 2
  return y + 1
}

// Returning an object — wrap in ( )
const make = (title) => ({ title, done: false })
```

---

### 6. Pure Functions

```javascript
// Pure — same input = same output, no side effects
const getDays = (rating) => {
  if (rating === 4) return 14
  throw new Error(`Invalid: ${rating}`)
}

// Impure — modifies external state
let count = 0
const add = () => { count++ }   // side effect
```

---

## REF Connection

```javascript
const getDaysUntilReview = (rating) => {
  if (rating === 4) return 14
  if (rating === 3) return 7
  if (rating === 2) return 3
  if (rating === 1) return 1
  throw new Error(`Invalid rating: ${rating}`)
}

const getNextReviewDate = (rating) => {
  const days = getDaysUntilReview(rating)
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date
}

const formatDate = (date) =>
  date.toLocaleDateString("en-GB", { day:"numeric", month:"short", year:"numeric" })
```

---

## 💡 Key Takeaways

1. **Define once, use many times.** That is the point of functions.
2. **Declarations are hoisted. Expressions and arrows are not.**
3. **Parameters are names. Arguments are values.**
4. **Default parameters only trigger for undefined — not null or 0.**
5. **No return statement = returns undefined.**
6. **Return exits immediately** — great for early returns.
7. **Arrow returning object needs ( )** — `() => ({ key: value })`
8. **Write pure functions by default.**

---
