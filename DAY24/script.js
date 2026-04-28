/*
  DAY 24 — Objects

  RULE: Predict BEFORE running.
  If wrong — explain why in a comment.
  Only syntax from Days 18-24 used here.

  Run: node day24-practice.js
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — predict the output
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: predictions ──")

   const topic = {
     title:   "Flexbox",
     subject: "CSS",
     day:     9,
     rating:  4
   }
   
   // A — dot vs bracket
   console.log(topic.title)          // prediction: "flexbox"
   console.log(topic["subject"])     // prediction: "CSS"
   
   const key = "day"
   console.log(topic[key])           // prediction:9
   console.log(topic["key"])         // prediction: ← careful => undefined , because "key" is not a property of topic, it's just a variable that holds the string "day"
   
   // B — does key exist?
   console.log("title" in topic)     // prediction: true
   console.log("notes" in topic)     // prediction: false
   console.log(topic.notes)          // prediction: undefined
   
   // C — shorthand
   const title   = "Grid"
   const day     = 14
   const newTopic = { title, day, reviewed: false }
   console.log(newTopic)             // prediction: { title: "Grid", day: 14, reviewed: false }
   
   // D — spread override — which rating wins?
   const updated = { ...topic, rating: 1, subject: "Layout" }
   console.log(updated.rating)       // prediction: 1
   console.log(updated.subject)      // prediction: "Layout"
   console.log(topic.rating)         // prediction: mutated or not? mutated , because they share the same reference in memory
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — destructuring
   
      PREDICT then verify.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: destructuring ──")
   
   const user = {
     name:    "Alex",
     age:     28,
     subject: "JavaScript",
     streak:  23
   }
   
   // A — basic destructuring
   const { name, age } = user
   console.log(name)    // prediction: alex , because we are destructuring the user object and assigning the value of the name property to the variable name
   console.log(age)     // prediction: 28
   
   // B — rename
   const { name: userName } = user
   console.log(userName)  // prediction: alex , 
   // console.log(name)   // still works? prediction: No, that variable is deleted after destructuring, because we are renaming the variable to userName, so the original variable name is not defined anymore.
   
   // C — default value
   const { rating = 0, notes = "none" } = user
   console.log(rating)  // prediction: 0 or undefined? 0 , because i don't assign a value to the rating property in the user object
   console.log(notes)   // prediction: none, because i don't assign a value to the notes property  in the user object
   
   // D — nested
   const profile = { user: { name: "Alex", location: "London" } }
   const { user: { location } } = profile
   console.log(location)  // prediction: london 
   
   // E — in function parameters
   const myUser = {name:"vinayak",age:20}
undefined
const formatUser = ({name,age})=>{return `name: ${name}, age: ${age}`}
   
   console.log(formatUser(myUser))  // prediction: "name: vinayak, age: 20"
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — Object.keys / values / entries
   
      PREDICT then verify.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: Object methods ──")
   
   const scores = { flexbox: 4, grid: 3, variables: 4, closures: 2 }
   
   console.log(Object.keys(scores))     // prediction:
   console.log(Object.values(scores))   // prediction:
   console.log(Object.entries(scores))  // prediction:
   
   // Loop and build a sentence for each
   for (const [subject, score] of Object.entries(scores)) {
     console.log(`${subject}: ${score}/4`)
   }
   // prediction — what prints?
   
   // Count subjects with score >= 3
   let highCount = 0
   for (const [, score] of Object.entries(scores)) {
     if (score >= 3) highCount++
   }
   console.log("High scores:", highCount)  // prediction:
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — write these functions
   
      No new syntax — only what is taught so far.
      Think about pure vs impure before writing.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: write the functions ──")
   
   // Function 1: createTopic(title, subject, day)
   // Returns a topic object with these fields:
   //   title, subject (default "General"), day (default 1),
   //   rating: null, reviewed: false,
   //   reviewCount: 0, nextReview: null
   // Use shorthand property names where possible
   
   const createTopic = (title, subject = "General", day = 1) => {
     // YOUR CODE HERE
     return {
        title,
        subject,
        day,
        rating:null,
        reviewed:false,
        reviewCount:0,
        nextReview:null
     }
   }
   
   const t1 = createTopic("Objects", "JavaScript", 9)
   const t2 = createTopic("Closures")
   console.log(t1)
   console.log(t2.subject)    // "General"
   console.log(t2.reviewed)   // false
   
   
   // Function 2: updateTopic(topic, changes)
   // Returns a NEW object — does NOT mutate original
   // changes is an object with fields to override
   
   const updateTopic = (topic, changes) => {
    Object.freeze(topic) // freeze the original object to prevent mutation
     // Use spread — one line
     return { ...topic, ...changes }
   }
   
   const original = createTopic("Flexbox", "CSS", 9)
   const reviewed = updateTopic(original, { rating: 4, reviewed: true, reviewCount: 1 })
   
   console.log(original.reviewed)   // false — original unchanged
   console.log(reviewed.reviewed)   // true
   console.log(reviewed.rating)     // 4
   console.log(original.title)      // "Flexbox" — still there
   
   
   // Function 3: getTopicSummary(topic)
   // Receives a topic object
   // Returns a string: 'Objects (JavaScript) — Day 9 — Rating: Not rated'
   // If rating is null — show "Not rated" instead of null
   
   const getTopicSummary = (topic) => {
     // YOUR CODE HERE
     if(topic.rating === null){
        return `${topic.title} (${topic.subject}) — Day ${topic.day} — Rating: Not rated`
     }else{
        return `${topic.title} is a ${topic.subject} topic rated ${topic.rating}/5`;
     }
   }
   
   console.log(getTopicSummary(t1))
   // "Objects (JavaScript) — Day 9 — Rating: Not rated"
   
   console.log(getTopicSummary(t2))
   // "Closures (General) — Day 1 — Rating: Not rated"
   
   
   // Function 4: buildUpdate(key, value)
   // Returns an object with one computed property
   // buildUpdate("rating", 3) → { rating: 3 }
   // buildUpdate("title", "Grid") → { title: "Grid" }
   
   const buildUpdate = (key, value) => {
     // YOUR CODE HERE
     return {[key]: value}
     // Use computed property names
   }
   
   console.log(buildUpdate("rating", 3))      // { rating: 3 }
   console.log(buildUpdate("title", "Grid"))  // { title: "Grid" }
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — REF object operations
   
      Build REF's topic system using what you know.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: REF object operations ──")
   
   const topics = [
     createTopic("Flexbox",   "CSS", 9),
     createTopic("Grid",      "CSS", 10),
     createTopic("Variables", "JS",  18),
     createTopic("Closures",  "JS",  22),
     createTopic("Arrays",    "JS",  23),
   ]
   
   // Simulate reviews on some topics
   const topics2 = [
     updateTopic(topics[0], { rating: 4, reviewed: true, reviewCount: 3 }),
     updateTopic(topics[1], { rating: 1, reviewed: true, reviewCount: 1 }),
     topics[2],   // not reviewed
     updateTopic(topics[3], { rating: 3, reviewed: true, reviewCount: 2 }),
     topics[4],   // not reviewed
   ]
   
   // 1. Get titles of all reviewed topics
   const reviewedTitles = topics2
     .filter(t => t.reviewed)
     .map(t => t.title)
   console.log("Reviewed:", reviewedTitles)
   // ["Flexbox", "Grid", "Closures"]
   
   // 2. Get average rating of reviewed topics
   // Hint: filter reviewed, use reduce to sum ratings, divide by count
   const avgRating = topics2
   .filter(t => t.reviewed)
    .reduce((sum, t) => sum + t.rating, 0) / reviewedTitles.length
   console.log("Avg rating:", avgRating.toFixed(1))   // "2.7"
   
   // 3. Build a lookup object: title → topic
   // Result: { Flexbox: {...}, Grid: {...}, ... }
   // Use reduce — accumulator starts as {}
   const topicLookup = topics2.reduce((acc, topic) => {
        // YOUR CODE
        acc[topic.title] = topic
        return acc
   }, {})
   console.log("Lookup Flexbox:", topicLookup["Flexbox"].rating)   // 4
   console.log("Lookup Grid:", topicLookup["Grid"].reviewed)       // true
   
   // 4. Count topics per subject
   // Result: { CSS: 2, JS: 3 }
   const subjectCount = topics2.reduce((acc, topic) => {
     // YOUR CODE
        if(acc[topic.subject]){
            acc[topic.subject]++
        }
        
   }, {})
   console.log("Subject count:", subjectCount)   // { CSS: 2, JS: 3 }
   
   // 5. Get summary string for each topic using getTopicSummary
   topics2.forEach(t => console.log(getTopicSummary(t)))
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW
   
      1. When do you use bracket notation over dot?
      2. What does { ...obj, key: newValue } do?
         Does it mutate the original?
      3. What does destructuring in function params
         look like? Write an example.
      4. What does Object.entries return?
         How do you loop over it?
      5. In REF — why should updateTopic return
         a new object instead of mutating the input?
      ══════════════════════════════════════════════ */
   
   // ANSWERS:
   // 1. bracket notation is used when the naming of the property is not a valid identifier (e.g. contains spaces or starts with a number) or when we want to access a property using a variable that holds the property name.
   // 2. { ...obj, key: newValue } creates a new object by copying all properties from obj and then overriding the value of the key property with newValue. It does not mutate the original object, it creates a new one.
   // 3. Destructuring in function params allows us to extract specific properties from an object passed as an argument. 
   // For example : 
   // 4. object.entries return key-value pairs of an object as an array of arrays. We can loop over it using a for...of loop or using array methods like forEach or map.
   // 5. In REF, updateTopic should return a new object instead of mutating the input to maintain immutability. This allows us to keep track of changes over time and avoid unintended side effects that can occur when mutating objects directly. It also makes it easier to implement features like undo/redo and time travel debugging.





