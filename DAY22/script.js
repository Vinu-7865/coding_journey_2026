/*
  DAY 23 — Arrays

  RULE: Predict BEFORE running.
  If wrong — explain why in a comment.
  Only syntax from Days 18-23 used here.

  Run: node day23-practice.js
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — predict the output

   Write predictions before running.
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: predictions ──")

   const nums = [1, 2, 3, 4, 5]
   
   // A
   console.log(nums.map(n => n * 2))
   // prediction: [2,4,6,8,10]
   
   // B
   console.log(nums.filter(n => n % 2 === 0))
   // prediction:[2,4]
   
   // C
   console.log(nums.reduce((sum, n) => sum + n, 0))
   // prediction:[15]
   
   // D
   console.log(nums.find(n => n > 3))
   // prediction: 4 (find returns the first match, not an array)
   
   // E
   console.log(nums.some(n => n > 4))
   // prediction: true (some returns true if at least one matches)
   
   // F
   console.log(nums.every(n => n > 0))
   // prediction: true (every returns true only if all match)
   
   // G — careful
   const result = nums.forEach(n => n * 2)
   console.log(result)
   // prediction: undefined (forEach does not return a new array, it returns undefined)
   
   // H — chaining
   console.log(nums.filter(n => n > 2).map(n => n * 10))
   // prediction:[30,40,50]
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — write these using array methods
   
      NO for loops allowed in this exercise.
      Use map, filter, reduce, find, some, every.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: array methods ──")
   
   const topics = [
     { title: "Flexbox",   rating: 4, reviewed: true,  subject: "CSS" },
     { title: "Grid",      rating: 1, reviewed: true,  subject: "CSS" },
     { title: "Variables", rating: 3, reviewed: false, subject: "JS"  },
     { title: "Closures",  rating: 4, reviewed: true,  subject: "JS"  },
     { title: "Arrays",    rating: 2, reviewed: false, subject: "JS"  },
   ]
   
   // 1. Get array of all titles
   const titles = // YOUR CODE topics.map(n=> n.title)
   console.log("titles:", titles)
   // ["Flexbox", "Grid", "Variables", "Closures", "Arrays"]
   // 
   // 2. Get only reviewed topics
   const reviewed = // YOUR CODE  topics.filter(n=> n.reviewed === true)
   console.log("reviewed count:", reviewed.length)   // 3
   
   // 3. Get titles of topics with rating >= 3
   const goodTitles = // YOUR CODE topics.filter(n=> n.rating >=3).map(n=> n.title)
   console.log("good titles:", goodTitles)
   // ["Flexbox", "Variables", "Closures"]
   
   // 4. Total of all ratings
   const totalRating = // YOUR CODE   topics.reduce((sum,n)=> sum + n.rating,0)
   console.log("total rating:", totalRating)   // 14
   
   // 5. Find the topic with title "Grid"
   const gridTopic = // YOUR CODE topics.filter(n=> n.title === "Grid") 
   console.log("grid topic:", gridTopic)
   // { title: "Grid", rating: 1, reviewed: true, subject: "CSS" }
   
   // 6. Does any topic have rating 1?
   const hasForgotten = // YOUR CODE  topics.some(n=> n.rating === 1)
   console.log("has forgotten:", hasForgotten)   // true
   
   // 7. Are all topics reviewed?
   const allReviewed = // YOUR CODE topics.every(n=> n.reviewed === true)
   console.log("all reviewed:", allReviewed)   // false
   
   // 8. Get titles of CSS topics only
   const cssTitles = // YOUR CODE topics.filter(n=> n.subject === "CSS").map(n=> n.title)
   console.log("css titles:", cssTitles)
   // ["Flexbox", "Grid"]
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — spread and destructuring
   
      PREDICT then verify.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: spread & destructuring ──")
   
   // A — spread combine
   const css = ["Flexbox", "Grid"]
   const js  = ["Variables", "Closures"]
   const all = [...css, ...js]
   console.log(all)
   // prediction:["Flexbox", "Grid", "Variables", "Closures"]
   
   // B — spread copy and add
   const original = [1, 2, 3]
   const withFour = [...original, 4]
   console.log(original)   // prediction: mutated or not?
   console.log(withFour)   // prediction: not mutated , new array with 4
   
   // C — destructuring
   const ratings = [4, 3, 2, 1]
   const [best, second, ...rest] = ratings
   console.log(best)    // prediction: 4
   console.log(second)  // prediction: 3 
   console.log(rest)    // prediction: [2,1] , rest collects the remaining elements into an array
   
   // D — skip elements
   const [,, third] = [10, 20, 30, 40]
   console.log(third)   // prediction: 30 (skips the first two elements and assigns the third to the variable)
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — reduce deep dive
   
      The most powerful method.
      Each task uses reduce only.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: reduce ──")
   
   const scores = [4, 3, 4, 1, 2, 4, 3]
   
   // 1. Count how many times each rating appears
   // Result should be: { 1: 1, 2: 1, 3: 2, 4: 3 }
   const ratingCount = scores.reduce((acc, score) => {
     // YOUR CODE  
     if(acc[score]){
        acc[score]++
     }else{
        acc[score] = 1
     }
     return acc
     // Hint: check if acc[score] exists, increment or set to 1
   }, {})
   console.log("rating count:", ratingCount)
   
   // 2. Find the highest rating
   const highest = scores.reduce((max, score) => {
     // YOUR CODE
     if(score > max){
        score 
     }else{
        max
     }
     return score
   }, 0)
   console.log("highest:", highest)   // 4
   
   // 3. Build a summary object
   // Result: { total: 21, count: 7, average: 3 }
   const summary = scores.reduce((acc, score) => {
     // YOUR CODE
     acc.total += score;
     acc.count += 1;
     acc.average = acc.total / acc.count;
   }, { total: 0, count: 0, average: 0 })
   console.log("summary:", summary)
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — REF array operations
   
      Use only array methods — no for loops.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: REF operations ──")
   
   const today = new Date()
   const yesterday = new Date(); yesterday.setDate(today.getDate() - 1)
   const tomorrow  = new Date(); tomorrow.setDate(today.getDate() + 1)
   
   const refTopics = [
     { title: "Flexbox",   nextReview: yesterday, rating: 4, reviewCount: 3 },
     { title: "Grid",      nextReview: tomorrow,  rating: 3, reviewCount: 1 },
     { title: "Variables", nextReview: yesterday, rating: 1, reviewCount: 2 },
     { title: "Closures",  nextReview: null,      rating: null, reviewCount: 0 },
     { title: "Arrays",    nextReview: yesterday, rating: 2, reviewCount: 1 },
   ]
   
   // 1. Get topics due today (nextReview is not null AND <= today)
   const dueToday = // YOUR CODE
   console.log("due today:", dueToday.map(t => t.title))
   // ["Flexbox", "Variables", "Arrays"]
   
   // 2. Get titles of overdue topics with rating 1 (forgotten)
   const forgotten = // YOUR CODE
   console.log("forgotten:", forgotten)
   // ["Variables"]
   
   // 3. Total review count across all topics
   const totalReviews = // YOUR CODE
   console.log("total reviews:", totalReviews)   // 7
   
   // 4. Is any topic never reviewed? (reviewCount === 0)
   const hasUnreviewed = // YOUR CODE
   console.log("has unreviewed:", hasUnreviewed)   // true
   
   // 5. Get topics sorted by rating — highest first
   // Hint: use .filter to get rated topics first (rating !== null)
   // then think about how to sort — you will need a loop or a method
   // For now: just filter out null ratings and use reduce to find highest rated
   const highestRated = refTopics
     .filter(t => t.rating !== null)
     .reduce((best, t) => t.rating > best.rating ? t : best)
   console.log("highest rated:", highestRated.title)   // "Flexbox"
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW
   
      1. What is the difference between map and forEach?
      2. What does filter return if nothing matches?
      3. What is the initial value in reduce for?
         What happens if you omit it?
      4. What is the difference between find and filter?
      5. When would you use spread [...arr, item]
         instead of arr.push(item)?
      6. In REF — why is filter + map better than
         a for loop that does both at once?
      ══════════════════════════════════════════════ */
   
   // ANSWERS:
   // 1.
   // 2.
   // 3.
   // 4.
   // 5.
   // 6.