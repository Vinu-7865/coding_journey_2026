# 📅 Day 24 – Objects

**Phase:** 3 – JavaScript Fundamentals


---

## 🧠 What I Learned Today

### 1. Object Basics

```javascript
const topic = { title: "Flexbox", day: 9, rating: 4 }

topic.title       // "Flexbox" — dot notation
topic["title"]    // "Flexbox" — bracket notation

// Bracket notation when key is dynamic
const key = "title"
topic[key]        // "Flexbox"
```

---

### 2. Creating and Modifying

```javascript
topic.rating = 3         // add or update
delete topic.rating      // delete
"title" in topic         // true — check existence
```

---

### 3. Shorthand Property Names

```javascript
const title = "Flexbox"
const day   = 9

// Longhand
const topic = { title: title, day: day }

// Shorthand — same result
const topic = { title, day }
```

---

### 4. Object Destructuring

```javascript
const { title, subject } = topic

// Rename
const { title: topicTitle } = topic

// Default values
const { rating = 0, notes = "" } = topic

// In function parameters
const formatTopic = ({ title, day, rating = null }) => {
  return `${title} — Day ${day}`
}
```

---

### 5. Object Spread

```javascript
// Copy
const copy = { ...topic }

// Override
const updated = { ...topic, rating: 3 }

// Pure update — does not mutate
const updateTopic = (topic, changes) => ({ ...topic, ...changes })
```

---

### 6. Object.keys / values / entries

```javascript
Object.keys(topic)     // ["title", "day", "rating"]
Object.values(topic)   // ["Flexbox", 9, 4]
Object.entries(topic)  // [["title","Flexbox"],["day",9],["rating",4]]

// Loop over object
for (const [key, value] of Object.entries(topic)) {
  console.log(`${key}: ${value}`)
}
```

---

### 7. Computed Property Names

```javascript
const field = "rating"
const topic = { title: "Flexbox", [field]: 4 }
// { title: "Flexbox", rating: 4 }

const buildUpdate = (key, val) => ({ [key]: val })
buildUpdate("rating", 3)   // { rating: 3 }
```

---

## REF Connection

```javascript
const createTopic = ({ title, subject = "General", day = 1 }) => ({
  id: `topic_${Date.now()}`,
  title, subject, day,
  rating: null, reviewed: false,
  reviewCount: 0, nextReview: null,
  createdAt: new Date()
})

const updateTopic = (topic, changes) => ({ ...topic, ...changes })

// Pure update — original never changes
const updated = updateTopic(topic, { rating: 4, reviewed: true })
```

---

## 💡 Key Takeaways

1. **Dot notation for static keys. Bracket for dynamic.**
2. **Shorthand — { title } instead of { title: title }.**
3. **Destructuring extracts values cleanly — use in function params.**
4. **Spread copies without mutating — pure object updates.**
5. **Later keys win in spread — { ...obj, rating: 3 } overrides rating.**
6. **Object.entries for looping over objects.**
7. **Computed keys — [variable]: value for dynamic keys.**
8. **Never mutate objects directly — always spread to update.**

---

