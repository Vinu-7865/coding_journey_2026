/*
  DAY 19 — Conditionals & Loops
  
  RULE: Write your prediction as a comment
  BEFORE running each exercise.
  If you were wrong — explain why in a comment.
  Do not move on until you understand the why.
  
  Run with: node day19-practice.js
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — truthy/falsy predictions
   
   PREDICT: does the if block run? yes or no?
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: truthy / falsy ──")

   // Write prediction as comment, then uncomment to verify
   
   const values = [false, 0, "", null, undefined, NaN,
                   "0", [], {}, -1, "false", 0.1]
   
   for (const val of values) {
     if (val) {
       console.log(`TRUTHY: ${JSON.stringify(val)} (${typeof val})`)
     } else {
       console.log(`FALSY:  ${JSON.stringify(val)} (${typeof val})`)
     }
   }
   
   // Before running — list which ones you think are truthy:
   // My truthy predictions: the truthy values are : "0", [], {}, -1, "false", 0.1 because none of them are false, 0, "", null, undefined, NaN
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — if/else vs switch
      
      TASK: write getDaysUntilNextReview TWO ways:
      1. Using if/else
      2. Using switch
      Both must throw for invalid input.
      Both must produce identical results.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: getDaysUntilNextReview ──")
   
   // Version 1: if/else
   function getDaysIfElse(rating) {
     // YOUR CODE HERE
     if(rating === 1){
        return 1
     }else if(rating === 2){
        return 3
     }else if(rating === 3){
        return 7
     }else if(rating === 4){
        return 14
     }else{
        throw new Error("Invalid rating: " + rating)
     }
   }
   
   // Version 2: switch
   function getDaysSwitch(rating) {
     // YOUR CODE HERE
     case1:
     return 1;
    case2:
    return 3;
    case3:
    return 7;
    case4:
    return 14;
    break;
    default:
        throw new Error("Invalid rating: " + rating)


   }
   
   // Test both — should produce same results
   console.log(getDaysIfElse(4))   // prediction: 14
   console.log(getDaysIfElse(3))   // prediction: 7
   console.log(getDaysIfElse(2))   // prediction: 3
   console.log(getDaysIfElse(1))   // prediction: 1
   
   console.log(getDaysSwitch(4))   // prediction: 14
   console.log(getDaysSwitch(1))   // prediction: 1
   
   // Test error handling — uncomment one at a time
   // console.log(getDaysIfElse(5))       // should throw
   // console.log(getDaysIfElse(0))       // should throw
   // console.log(getDaysIfElse("good"))  // should throw
   // console.log(getDaysIfElse(null))    // should throw
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — loop predictions
      
      PREDICT: what does each loop output?
      Write predictions as comments first.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: loop predictions ──")
   
   // Loop A — predict the output
   for (let i = 1; i <= 5; i++) {
     if (i % 2 === 0) continue
     console.log(i)
   }
   // Prediction:
   
   // Loop B — predict the output
   const ratings = [4, 1, 3, 2, 4, 3]
   let sum = 0
   for (const r of ratings) {
     if (r === 1) break
     sum += r
   }
   console.log("Sum:", sum)
   // Prediction:
   
   // Loop C — predict the output
   const topic = { title: "Flexbox", day: 9, rating: 3, reviewed: true }
   const keys = []
   for (const key in topic) {
     keys.push(key)
   }
   console.log("Keys:", keys)
   // Prediction:
   
   // Loop D — predict the output
   let count = 3
   while (count > 0) {
     console.log(count)
     count--
   }
   console.log("Done")
   // Prediction:
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — build getTopicsDueToday
      
      TASK: write this function from scratch.
      
      It receives an array of topic objects.
      Each topic has: { title, nextReview (Date or null) }
      
      Return only topics where nextReview <= today.
      Skip topics where nextReview is null.
      If topics array is empty return [].
      
      After writing — test with the data below.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: getTopicsDueToday ──")
   
   function getTopicsDueToday(topics) {
     // YOUR CODE HERE
     // Think before typing:
     // 1. What type is topics? What if it is empty?
     // 2. What type is nextReview? How do you compare dates?
     // 3. How do you skip null nextReview values?
   }
   
   // Test data
   const today = new Date()
   const yesterday = new Date(today)
   yesterday.setDate(today.getDate() - 1)
   const tomorrow = new Date(today)
   tomorrow.setDate(today.getDate() + 1)
   
   const testTopics = [
     { title: "Flexbox",      nextReview: yesterday },  // due — yesterday
     { title: "CSS Grid",     nextReview: tomorrow },   // not due — tomorrow
     { title: "Variables",    nextReview: today },       // due — today
     { title: "Conditionals", nextReview: null },        // skip — not scheduled
     { title: "Loops",        nextReview: yesterday },   // due — yesterday
   ]
   
   const due = getTopicsDueToday(testTopics)
   console.log("Due today:", due.length)          // should be 3
   console.log("Titles:", due.map(t => t.title))  // Flexbox, Variables, Loops
   console.log("Empty:", getTopicsDueToday([]))   // should be []
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — edge cases
      
      A good engineer always tests the edges.
      For each function you wrote above —
      test these edge cases and handle any that break.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: edge cases ──")
   
   // Edge case 1: what if rating is a string "3"?
   // try: getDaysIfElse("3")
   // Does it work? Should it? Fix it if needed.
   
   // Edge case 2: what if topics contains non-objects?
   // try: getTopicsDueToday([null, undefined, "string"])
   // Does it crash? Handle it.
   
   // Edge case 3: what if nextReview is a string date instead of a Date object?
   // try: { title: "Test", nextReview: "2024-01-01" }
   // Does the comparison still work? Why or why not?
   
   // Write your findings as comments:
   // Edge 1:
   // Edge 2:
   // Edge 3:
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 6 — REF complete algorithm
      
      Put it all together. Write this file:
      recall-app/algorithm.js
      
      It should export 3 functions:
      - getDaysUntilNextReview(rating)
      - getNextReviewDate(rating)
      - getTopicsDueToday(topics)
      
      With full error handling and edge cases covered.
      
      Then test all 3 together:
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 6: complete algorithm ──")
   
   // Write algorithm.js separately, then test here:
   // const { getDaysUntilNextReview, getNextReviewDate, getTopicsDueToday }
   //   = require('./recall-app/algorithm.js')
   
   // Full test suite:
   // console.log(getDaysUntilNextReview(4))  // 14
   // console.log(getDaysUntilNextReview(1))  // 1
   // console.log(getNextReviewDate(3))       // 7 days from now
   // console.log(getTopicsDueToday([]))      // []
   // getDaysUntilNextReview(5)              // throws
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW
      
      Answer after completing all exercises:
      
      1. What is the difference between break and continue?
      2. When would you use for...of vs for...in?
      3. Why is [] truthy but 0 is falsy?
      4. What does throw new Error() do to program execution?
      5. In REF, what should happen if getTopicsDueToday
         receives undefined instead of an array?
      ══════════════════════════════════════════════ */
   
   // ANSWERS:
   // 1.
   // 2.
   // 3.
   // 4.
   // 5.