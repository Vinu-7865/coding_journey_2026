/*
  ════════════════════════════════════════════════
  JAVASCRIPT CONSOLIDATION — Days 18-25
  
  This file connects EVERYTHING you have learned
  through one project: REF.

  RULES:
  1. Predict BEFORE running every console.log
  2. Write your prediction as a comment
  3. If wrong — explain why before moving on
  4. No looking at notes for Exercises 1-4
  5. Every function you write must have a
     plain English comment explaining what it does
     (Feynman technique)

  Run: node js-consolidation.js
  ════════════════════════════════════════════════
*/


/* ══════════════════════════════════════════════
   PART 1 — DATA TYPES & VARIABLES (Day 18)
   
   Before writing any code, answer these:
   1. What is the difference between null and undefined? the null is used to intentionally set as empty value, while undefined is intentionally set to undefined value
   2. When does ?? trigger vs ||? ; The ?? operator triggers when the left-hand side is null or undefined, while the || operator triggers when the left-hand side is falsy (which includes null, undefined, 0, "",false,NaN)
   3. Why does typeof null === "object"? , it was a famous bug in JavaScript that has been around since the beginning. 
   ══════════════════════════════════════════════ */

   console.log("════ PART 1: Data Types ════")

   // Predict each — write prediction as comment first
   console.log(typeof "REF")            // prediction: the typeof is string
   console.log(typeof 170)              // prediction: the typeof is number
   console.log(typeof null)             // prediction: ← the famous bug , the typeof is object, but actually null is a primitive value that represents the intentional empty value.
   console.log(typeof undefined)        // prediction: the typeof undefined is undefined
   console.log(typeof {})               // prediction: the typeof of {} is object
   console.log(typeof [])               // prediction: the type of [] is object, because arrays are a special type of object in JavaScript
   
   // ?? vs ||
   const score1 = 0 ?? "default"
   const score2 = 0 || "default"
   const score3 = null ?? "default"
   const score4 = null || "default"
   console.log(score1)  // prediction: 0 is not null or undefined, so it will return 0
   console.log(score2)  // prediction: it will return "default" because 0 is falsy
   console.log(score3)  // prediction: the output will be "default" because null is null, so it will return the right-hand side value "default"
   console.log(score4)  // prediction: the output will be "default" because null is falsy
   
   // Optional chaining
   const topic = { title: "Flexbox", review: { rating: 4 } }
   const noTopic = null
   
   console.log(topic?.review?.rating)     // prediction: the output will be 4 , because it present in the deep nested object of topic and the ? is used to safely access the nested property without throwing an error if any part of the chain is null or undefined.
   console.log(noTopic?.review?.rating)   // prediction: the output will be undefined , because it will not throw any error, due to the optional chaining operator, but it will return undefined since noTopic is null and does not have a review property.
   console.log(topic?.notes?.text ?? "No notes")  // prediction: the output will be "NO notes" because topic does not have a notes property, so using the optional chaining property it will safely access the notes property and return undefined because that property is not exist in the topic object, then the nullish coalescing operator will return the right-hand side value "No notes" since the left-hand side is null or undefined.
   
   
   /* ══════════════════════════════════════════════
      PART 2 — CONDITIONALS (Day 19)
      
      Before writing: what are the 6 falsy values?
      Write them from memory here:
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 2: Conditionals ════")
   
   // TASK: write getRatingLabel(rating)
   // Receives a number 1-4
   // Returns: 4="Easy" 3="Good" 2="Hard" 1="Forgot"
   // Anything else → throw new Error
   // Plain English first: "This function takes a rating number
   //   and returns the human-readable label for it.
   //   If the rating is invalid it fails loudly."
   
   const getRatingLabel = (rating) => {
     // YOUR CODE HERE
     if(rating === 4){
      return "Easy"
     }else if(rating === 3){
      return "Good"
   }else if(rating === 2){
      return "Hard"
  }else if(rating === 1){
      return "Forgot"
  } else{
    throw new Error("Invalid rating")
  }

}
   console.log(getRatingLabel(4))   // "Easy"
   console.log(getRatingLabel(1))   // "Forgot"
   // getRatingLabel(5)             // should throw — uncomment to test
   
   // Truthy/falsy predictions
   const values = [0, "", null, undefined, NaN, "0", [], {}, -1]
   values.forEach(v => {
     console.log(`${JSON.stringify(v)} → ${v ? "truthy" : "falsy"}`)
   })
   // Write ALL predictions before running: the output will be:
   // "0" → falsy
   // "" → falsy
    // null → falsy  
    // undefined → falsy
    // NaN → falsy
    // "0" → truthy
    // [] → truthy
    // {} → truthy
    // -1 → truthy
   
   /* ══════════════════════════════════════════════
      PART 3 — LOOPS (Day 20)
      
      Before writing: what is the difference between
      for...of and for...in?
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 3: Loops ════")
   
   // TASK: write calculateStreak(reviewDays)
   // Receives array of booleans — each = did user review that day?
   // Returns count of consecutive trues from the END
   // [true, false, true, true, true] → 3
   // [true, false] → 0
   // [] → 0
   // Plain English: "Count how many days in a row the user
   //   reviewed, starting from the most recent day
   //   and going backwards until they missed one."

   const reviewDays = [1, 3, 7, 14, 30];
   
   const calculateStreak = (reviewDays) => {
     // YOUR CODE HERE — use a loop, no array methods
      let streak = 0;
      for(let i = reviewDays.length - 1; i >= 0; i--){
        if(reviewDays[i]){
          streak++;
        }else{
          break;
        }
      }
   }
   
   console.log(calculateStreak([true, false, true, true, true]))  // 3
   console.log(calculateStreak([true, false]))                    // 0
   console.log(calculateStreak([true, true, true]))               // 3
   console.log(calculateStreak([]))                               // 0
   
   // Loop predictions
   const ratings = [4, 1, 3, 2, 4]
   let sum = 0
   for (const r of ratings) {
     if (r === 1) break
     sum += r
   }
   console.log("Sum:", sum)   // prediction:
   
   let count = 0
   for (const r of ratings) {
     if (r < 3) continue
     count++
   }
   console.log("Count >= 3:", count)  // prediction:
   
   
   /* ══════════════════════════════════════════════
      PART 4 — FUNCTIONS I (Day 21)
      
      Before writing: what does a function return
      if there is no return statement?
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 4: Functions I ════")
   
   // TASK: write getDaysUntilReview(rating)
   // Pure function — same input always same output
   // No side effects
   // Plain English: "Given how well I remembered something (1-4),
   //   return how many days to wait before reviewing again.
   //   Fail loudly for invalid input."
   
   const getDaysUntilReview = (rating) => {
     // YOUR CODE HERE
   }
   
   // TASK: write getNextReviewDate(rating)
   // Uses getDaysUntilReview
   // Returns a Date object
   // Plain English: "Calculate the actual calendar date
   //   when I should next review this topic."
   
   const getNextReviewDate = (rating) => {
     // YOUR CODE HERE
   }
   
   // TASK: write formatDate(date)
   // Receives a Date, returns "15 Jan 2026"
   // Plain English: "Turn a Date object into a
   //   human-readable string."
   
   const formatDate = (date) =>
     date.toLocaleDateString("en-GB", {
       day: "numeric", month: "short", year: "numeric"
     })
   
   console.log(getDaysUntilReview(4))   // 14
   console.log(getDaysUntilReview(1))   // 1
   console.log(formatDate(getNextReviewDate(3)))  // date 7 days from now
   
   // Default parameter prediction
   const create = (title, subject = "General") => ({ title, subject })
   console.log(create("Flexbox"))         // prediction:
   console.log(create("Flexbox", null))   // prediction: ← null vs undefined
   
   
   /* ══════════════════════════════════════════════
      PART 5 — FUNCTIONS II: CLOSURES (Day 22)
      
      Before writing: explain a closure in one sentence
      without using the word "closure":
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 5: Closures ════")
   
   // TASK: write makeTopicTracker(topicTitle)
   // Uses closures to keep each topic's data private
   // Returns object with review(rating) and getStats()
   // Plain English: "A factory that creates an independent
   //   tracker for each topic. Each tracker remembers
   //   its own review history privately — other code
   //   cannot access or corrupt it directly."
   
   const makeTopicTracker = (topicTitle) => {
     // YOUR CODE HERE
     // Closed over: reviewCount, lastRating
     // review(rating) — validates rating, increments count, saves rating
     // getStats() — returns { title, reviewCount, lastRating }
   }
   
   const flexbox  = makeTopicTracker("Flexbox")
   const closures = makeTopicTracker("Closures")
   
   flexbox.review(4)
   flexbox.review(3)
   closures.review(2)
   
   console.log(flexbox.getStats())
   // { title: "Flexbox", reviewCount: 2, lastRating: 3 }
   console.log(closures.getStats())
   // { title: "Closures", reviewCount: 1, lastRating: 2 }
   console.log(flexbox.reviewCount)  // undefined — private
   
   // Classic closure bug — predict both
   const fnsVar = []
   for (var i = 0; i < 3; i++) fnsVar.push(() => i)
   console.log(fnsVar[0](), fnsVar[1](), fnsVar[2]())  // prediction:
   
   const fnsLet = []
   for (let j = 0; j < 3; j++) fnsLet.push(() => j)
   console.log(fnsLet[0](), fnsLet[1](), fnsLet[2]())  // prediction:
   
   
   /* ══════════════════════════════════════════════
      PART 6 — ARRAYS (Day 23)
      
      Before writing: what is the difference between
      map and forEach? What does filter return when
      nothing matches?
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 6: Arrays ════")
   
   const today     = new Date()
   const yesterday = new Date(); yesterday.setDate(today.getDate() - 1)
   const tomorrow  = new Date(); tomorrow.setDate(today.getDate() + 1)
   
   const topics = [
     { title: "Flexbox",   rating: 4,    nextReview: yesterday, subject: "CSS", reviewCount: 3 },
     { title: "Grid",      rating: 1,    nextReview: yesterday, subject: "CSS", reviewCount: 1 },
     { title: "Variables", rating: 3,    nextReview: tomorrow,  subject: "JS",  reviewCount: 2 },
     { title: "Closures",  rating: null, nextReview: null,      subject: "JS",  reviewCount: 0 },
     { title: "Arrays",    rating: 2,    nextReview: yesterday, subject: "JS",  reviewCount: 1 },
   ]
   
   // 1. Titles of all topics
   const allTitles = // YOUR CODE
   console.log("All titles:", allTitles)
   
   // 2. Topics due today (nextReview not null AND <= today)
   const dueToday = // YOUR CODE
   console.log("Due today:", dueToday.map(t => t.title))
   // ["Flexbox", "Grid", "Arrays"]
   
   // 3. Has any topic been forgotten (rating === 1)?
   const hasForgotten = // YOUR CODE
   console.log("Has forgotten:", hasForgotten)  // true
   
   // 4. Are all rated topics rated >= 2?
   const allDecent = // YOUR CODE (filter nulls first)
   console.log("All decent:", allDecent)  // false — Grid is 1
   
   // 5. Total review count across all topics
   const totalReviews = // YOUR CODE
   console.log("Total reviews:", totalReviews)  // 7
   
   // 6. Count topics per subject using reduce
   // Result: { CSS: 2, JS: 3 }
   const bySubject = topics.reduce((acc, t) => {
     // YOUR CODE
   }, {})
   console.log("By subject:", bySubject)
   
   // 7. Find the topic with highest reviewCount
   const mostReviewed = topics.reduce((best, t) =>
     // YOUR CODE
   )
   console.log("Most reviewed:", mostReviewed.title)  // "Flexbox"
   
   
   /* ══════════════════════════════════════════════
      PART 7 — OBJECTS (Day 24)
      
      Before writing: what is the difference between
      { ...obj, key: val } and obj.key = val?
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 7: Objects ════")
   
   // TASK: write createTopic(title, subject, day)
   // Pure — returns a new object
   // Defaults: subject="General", day=1
   // Fields: title, subject, day, rating:null,
   //         reviewed:false, reviewCount:0, nextReview:null
   
   const createTopic = (title, subject = "General", day = 1) => ({
     // YOUR CODE — use shorthand where possible
   })
   
   // TASK: write updateTopic(topic, changes)
   // Pure — returns NEW object, never mutates original
   // Plain English: "Take a topic and some changes,
   //   return a new topic with those changes applied.
   //   The original must never be touched."
   
   const updateTopic = (topic, changes) => ({
     // YOUR CODE — one line
   })
   
   const t1 = createTopic("Flexbox", "CSS", 9)
   const t2 = updateTopic(t1, { rating: 4, reviewed: true })
   
   console.log(t1.reviewed)   // false — original unchanged
   console.log(t2.reviewed)   // true
   console.log(t2.title)      // "Flexbox" — spread kept it
   
   // Object.entries loop
   const summary = { flexbox: 4, grid: 1, closures: 3 }
   for (const [key, val] of Object.entries(summary)) {
     console.log(`${key}: ${getRatingLabel(val)}`)
   }
   // prediction:
   
   // Spread order — predict each
   const base   = { a: 1, b: 2 }
   const merged = { ...base, b: 99, c: 3 }
   console.log(merged)  // prediction:
   
   
   /* ══════════════════════════════════════════════
      PART 8 — STRINGS (Day 25)
      
      Before writing: why must you always assign
      the result of string methods?
      //
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 8: Strings ════")
   
   // TASK: write cleanInput(str)
   // Trim + lowercase
   const cleanInput = (str) => // YOUR CODE — one line
   
   // TASK: write capitalize(str)
   // First letter uppercase, rest lowercase
   // "FLEXBOX" → "Flexbox"
   const capitalize = (str) => // YOUR CODE
   
   // TASK: write slugify(title)
   // "CSS Flexbox" → "css-flexbox"
   const slugify = (title) => // YOUR CODE
   
   // TASK: write formatTopicSummary({ title, subject, day, rating })
   // "Flexbox (CSS) — Day 09 — Rating: Easy"
   // If rating null → "Not rated"
   // Use getRatingLabel from Part 2
   
   const formatTopicSummary = ({ title, subject, day, rating }) => {
     // YOUR CODE
     // Use: capitalize, formatDay (padStart), getRatingLabel
     // All in a template literal
   }
   
   console.log(cleanInput("  FLEXBOX  "))       // "flexbox"
   console.log(capitalize("cSS"))               // "Css"
   console.log(slugify("CSS Flexbox Day 9"))    // "css-flexbox-day-9"
   
   const testTopic = createTopic("css flexbox", "CSS", 9)
   const reviewed  = updateTopic(testTopic, { rating: 4 })
   console.log(formatTopicSummary(reviewed))
   // "Css Flexbox (CSS) — Day 09 — Rating: Easy"
   console.log(formatTopicSummary(testTopic))
   // "Css Flexbox (CSS) — Day 01 — Rating: Not rated"
   
   
   /* ══════════════════════════════════════════════
      PART 9 — FULL REF SYSTEM
      
      Put everything together. No hints.
      This is the spaced repetition system
      built from pure JavaScript.
      ══════════════════════════════════════════════ */
   
   console.log("\n════ PART 9: Full REF System ════")
   
   // Using all functions built above — build a mini REF session:
   
   // 1. Create 3 topics
   const refTopics = [
     createTopic("Flexbox",   "CSS", 9),
     createTopic("Closures",  "JS",  22),
     createTopic("Objects",   "JS",  24),
   ]
   
   // 2. Simulate user reviewing all 3 with ratings
   const afterReview = [
     updateTopic(refTopics[0], { rating: 4, reviewed: true, reviewCount: 1,
       nextReview: getNextReviewDate(4) }),
     updateTopic(refTopics[1], { rating: 2, reviewed: true, reviewCount: 1,
       nextReview: getNextReviewDate(2) }),
     updateTopic(refTopics[2], { rating: 3, reviewed: true, reviewCount: 1,
       nextReview: getNextReviewDate(3) }),
   ]
   
   // 3. Print a summary of each topic
   afterReview.forEach(t => {
     console.log(formatTopicSummary(t))
     console.log(`  Next review: ${formatDate(t.nextReview)}`)
   })
   
   // 4. Which topic needs the most urgent review?
   // (lowest rating = review soonest)
   const mostUrgent = afterReview.reduce((urgent, t) =>
     t.rating < urgent.rating ? t : urgent
   )
   console.log(`Most urgent: ${mostUrgent.title} (${getRatingLabel(mostUrgent.rating)})`)
   
   // 5. Build a stats object
   const stats = {
     total:       afterReview.length,
     reviewed:    afterReview.filter(t => t.reviewed).length,
     avgRating:   afterReview.reduce((sum, t) => sum + t.rating, 0) / afterReview.length,
     streak:      calculateStreak(afterReview.map(t => t.reviewed)),
     bySubject:   afterReview.reduce((acc, t) => {
                    acc[t.subject] = (acc[t.subject] || 0) + 1
                    return acc
                  }, {})
   }
   console.log("Session stats:", stats)
   
   
   /* ══════════════════════════════════════════════
      FEYNMAN CHECK — complete this after finishing
   
      For each concept — write one sentence explaining
      it as if teaching someone who has never coded.
      If you cannot write the sentence, that is your gap.
   
      Day 18 — Variables & Types:
      //
   
      Day 19 — Conditionals:
      //
   
      Day 20 — Loops:
      //
   
      Day 21 — Functions I:
      //
   
      Day 22 — Closures:
      //
   
      Day 23 — Arrays:
      //
   
      Day 24 — Objects:
      //
   
      Day 25 — Strings:
      //
   
      Gaps I found today (concepts still fuzzy):
      //
   
      What surprised me:
      //
      ══════════════════════════════════════════════ */