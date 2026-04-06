# 📅 Day 19 – JavaScript Conditionals & Loops

**Phase:** 3 – JavaScript Fundamentals


---

## 🧠 What I Learned Today

### 1. if / else if / else

```javascript
if (rating === 4) {
  // easy
} else if (rating === 3) {
  // good
} else if (rating === 2) {
  // hard
} else {
  // forgot
}
```

Always think: what happens with unexpected values? Handle edge cases.

---

### 2. Ternary Operator

```javascript
const label = rating >= 3 ? "Good recall" : "Needs work"
// Use for simple single-line conditions only
// Use if/else for complex logic
```

---

### 3. Switch

```javascript
switch (rating) {
  case 4: return 14
  case 3: return 7
  case 2: return 3
  case 1: return 1
  default: throw new Error(`Invalid rating: ${rating}`)
}
// Use when matching one variable to multiple exact values
```

---

### 4. Truthy and Falsy

```javascript
// The 6 falsy values:
false, 0, "", null, undefined, NaN

// Everything else is truthy — including:
"0"   []   {}   -1   "false"

// Practical impact:
if (topics.length) { }      // 0 = falsy — safe for arrays
if (topics.length > 0) { }  // explicit — always clearer
```

---

### 5. Loops

```javascript
// for — when you know the count
for (let i = 0; i < 5; i++) { }

// for...of — loop through values (arrays, strings)
for (const topic of topics) { }

// for...in — loop through object keys
for (const key in topic) { }

// while — loop while condition is true
while (reviewsLeft > 0) { reviewsLeft-- }

// break — stop loop entirely
// continue — skip this iteration
```

---

### 6. REF Algorithm — Core Logic

```javascript
function getDaysUntilNextReview(rating) {
  if (rating === 4) return 14
  if (rating === 3) return 7
  if (rating === 2) return 3
  if (rating === 1) return 1
  throw new Error(`Invalid rating: ${rating}. Must be 1-4.`)
}

function getNextReviewDate(rating) {
  const days = getDaysUntilNextReview(rating)
  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

function getTopicsDueToday(topics) {
  const today = new Date()
  const due = []
  for (const topic of topics) {
    if (topic.nextReview === null) continue
    if (topic.nextReview <= today) due.push(topic)
  }
  return due
}
```

---

## 💡 Key Takeaways

1. **Always handle the default/else case.** Unexpected values cause silent bugs.
2. **Ternary for simple, if/else for complex.** Nested ternary is unreadable.
3. **6 falsy values: false 0 "" null undefined NaN.** Everything else truthy.
4. **[] and {} are truthy.** Check .length for arrays, Object.keys() for objects.
5. **for...of for values. for...in for keys.** Do not mix them up.
6. **break stops the loop. continue skips the iteration.**
7. **throw new Error() for invalid input.** Do not silently ignore bad data.

---

