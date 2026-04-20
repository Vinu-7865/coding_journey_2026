# 📅 Day 22 – Arrays

**Phase:** 3 – JavaScript Fundamentals


---

## 🧠 What I Learned Today

### 1. Array Basics

```javascript
const ratings = [4, 3, 2, 1]
ratings[0]       // 4 — index starts at 0
ratings.length   // 4
ratings[4]       // undefined — out of bounds
```

---

### 2. The 6 Essential Methods

```javascript
// map — transform every element, returns same length array
const labels = ratings.map(r => r === 4 ? "Easy" : "Other")

// filter — keep matching elements, returns shorter or equal array
const good = ratings.filter(r => r >= 3)   // [4, 3]

// reduce — combine all into one value
const total = ratings.reduce((sum, r) => sum + r, 0)   // 10

// find — first matching element, or undefined
const topic = topics.find(t => t.id === 2)

// some — true if at least one matches
const hasForgotten = ratings.some(r => r === 1)   // true

// every — true if all match
const allGood = ratings.every(r => r >= 3)   // false
```

---

### 3. forEach vs map

```javascript
// forEach — runs for side effects, returns undefined
topics.forEach(t => console.log(t.title))

// map — creates a new array, use when you need the result
const titles = topics.map(t => t.title)

// Common mistake:
const result = topics.forEach(t => t.title)
result   // undefined — forEach never returns anything
```

---

### 4. Spread and Destructuring

```javascript
// Spread — expand array
const combined = [...a, ...b]

// Pure add to array — does not mutate original
const newTopics = [...topics, newTopic]

// Destructuring
const [first, second, ...rest] = [4, 3, 2, 1]
// first=4, second=3, rest=[2,1]
```

---

### 5. Chaining

```javascript
const result = topics
  .filter(t => t.reviewed)
  .filter(t => t.rating >= 3)
  .map(t => t.title)
```

---

## REF Connection

```javascript
// Due today
const due = topics.filter(t => t.nextReview !== null && t.nextReview <= today)

// Has forgotten topic
const hasForgotten = topics.some(t => t.rating === 1)

// Find specific topic
const topic = topics.find(t => t.title === "Flexbox")

// Total reviewed
const reviewed = topics.filter(t => t.rating !== null).length
```

---

## 💡 Key Takeaways

1. **map transforms. filter selects. reduce combines.**
2. **map always returns same length. filter returns same or shorter.**
3. **find returns one element or undefined. filter returns an array.**
4. **forEach returns undefined — never assign it.**
5. **Spread [...arr, item] adds without mutating — pure.**
6. **Chain methods — filter then map is very common.**
7. **reduce is the most powerful — can build anything from an array.**

---