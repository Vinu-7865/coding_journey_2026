/*
  DAY 18 — Variables, Data Types, Operators
  
  HOW THIS WORKS:
  Every exercise has a PREDICT section.
  Write your prediction BEFORE running the code.
  Then run it in the browser console (F12) or Node.js.
  If you were wrong — find out EXACTLY why.
  
  Do NOT just run it and move on.
  The prediction is the learning.
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — typeof predictions
   
   PREDICT: what does each typeof return?
   Write your answers as comments first.
   Then run: node script.js to check your predictions.
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: typeof ──")

   console.log(typeof "REF")           // your prediction: the typeof data is string
   console.log(typeof 170)             // your prediction: the typeof data is number
   console.log(typeof true)            // your prediction: the typeof data is boolean
   console.log(typeof undefined)       // your prediction: the typeof data is undefined
   console.log(typeof null)            // your prediction: ← careful the typeof data is object but it is a bug in JavaScript happened during 1995.
   console.log(typeof {})              // your prediction: the type of data is object
   console.log(typeof [])              // your prediction: ← careful , the typeof data is object but it is an array
   console.log(typeof function(){})    // your prediction: the typeof data is function
   console.log(typeof 3.14)            // your prediction: the typeof data is number
   console.log(typeof "")              // your prediction: the typeof data is string
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — coercion traps
      
      PREDICT: what does each line output?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: coercion ──")
   
   console.log("5" + 3)       // your prediction: the 3 is converted to string and concatenated with "5" and the  output is "53"
   console.log("5" - 3)       // your prediction: the 5 in double quotes is converted to number and subtracted by 3 and the output is 2
   console.log("5" * 2)       // your prediction: the 5 in double quotes is converted to number and multiplied by 2 and the output is 10
   console.log("5" + "3")     // your prediction: both numbers are in doubles quotes so it will treat as string and both will be concatenated and the output is "53"
   console.log(true + 1)      // your prediction: ← think about this , the true will be converted to number and the output will be 2
   console.log(false + 1)     // your prediction: the  false will be converted to number and the output will be 1
   console.log("" + 1)        // your prediction: the empty string will be converted to number and the output will be 1
   console.log(null + 1)      // your prediction: ← careful , the null will be converted to number and the output will be 1
   console.log(undefined + 1) // your prediction: ← careful , the output will be NaN because the undefined cannot be converted to number
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — === vs ==
      
      PREDICT: true or false?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: === vs == ──")
   
   console.log(0 == false)      // your prediction: true , the 0 will be converted to boolean and the output is true
   console.log(0 === false)     // your prediction: false, the 0 is number and the false is boolean so they are not strictly equal
   console.log("" == false)     // your prediction: true, the empty string will be converted to boolean and the output is true
   console.log("" === false)    // your prediction: false, the empty string is string and the false is boolean so they are not strictly equal
   console.log(1 == "1")        // your prediction: true , the 1 will be converted to string and the output is true
   console.log(1 === "1")       // your prediction: false, the 1 is number and the "1" is string so they are not strictly equal
   console.log(null == undefined)  // your prediction: true, the null and undefined are considered equal in loose equality
   console.log(null === undefined) // your prediction: false, the null is object and the undefined is undefined so they are not strictly equal
   console.log(NaN === NaN)        // your prediction: ← trick question , the NaN is not equal to itself in JavaScript so the output is false
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — ?? vs ||
      
      PREDICT: what value does each variable get?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: ?? vs || ──")
   
   const a = 0 || "default"
   const b = 0 ?? "default"
   const c = "" || "empty"
   const d = "" ?? "empty"
   const e = null || "nothing"
   const f = null ?? "nothing"
   const g = undefined || "undefined"
   const h = undefined ?? "undefined"
   const i = false || "false"
   const j = false ?? "false"
   
   console.log("a:", a)  // your prediction: the 0 is falsy so it will return "default"
   console.log("b:", b)  // your prediction: the 0 is not null or undefined so it will return 0
   console.log("c:", c)  // your prediction: the empty string is falsy so it will return "empty"
   console.log("d:", d)  // your prediction: the empty string is not null or undefined so it will return ""
   console.log("e:", e)  // your prediction: it will return "nothing" because null is falsy
   console.log("f:", f)  // your prediction:  "nothing" because null is null so it will return "nothing"
   console.log("g:", g)  // your prediction: "undefined" because undefined is falsy
   console.log("h:", h)  // your prediction: "undefined" because undefined is undefined so it will return "undefined"
   console.log("i:", i)  // your prediction: "false" because false is falsy
   console.log("j:", j)  // your prediction: false because false is not null or undefined so it wil return false
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — optional chaining
      
      PREDICT: what does each line output?
      Does it crash or return undefined?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: optional chaining ──")
   
   const user = {
     name: "Alex",
     profile: {
       avatar: "https://example.com/alex.jpg"
     }
   }
   
   const emptyUser = null
   
   console.log(user?.name)                    // your prediction: it will safely access the name property and return "alex"
   console.log(user?.profile?.avatar)         // your prediction: it will safely access the avatar property and return "https://example.com/alex.jpg"
   console.log(user?.settings?.theme)         // your prediction: it will safely access the theme property but since settings is undefined it will return undefined without crashing
   console.log(emptyUser?.name)               // your prediction: it will safely access the name property but since emptyUser is null it will return undefined without crashing
   console.log(emptyUser?.profile?.avatar)    // your prediction: it will safely access the avatar property but since emptyUser is null it wll not return anything and it will return undefined without crashing
   
   // Without optional chaining — what happens?
   // Try this and see:
   // console.log(emptyUser.name)   // uncomment to test — what error?
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 6 — REF data model
      
      TASK: define the data for one REF topic
      using the correct types for each field.
      
      Think about:
      - What type should each field be?
      - What should the initial value be?
      - Which fields use null vs undefined?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 6: REF topic data model ──")
   
   // Define a topic object for "CSS Flexbox — Day 9"
   // Fields needed:
   //   id           → unique identifier
   //   title        → name of the topic
   //   dayLearned   → which day it was learned
   //   subject      → category e.g. "CSS"
   //   isReviewed   → has it been reviewed at least once?
   //   reviewCount  → how many times reviewed
   //   lastReview   → date of last review (null if never)
   //   nextReview   → date of next scheduled review (null if not set)
   //   rating       → last recall rating 1-4 (null if never rated)
   //   notes        → text notes (empty string if none)
   
   const topic = {
     // YOUR CODE HERE
        id: "css-flexbox-day9", // string type for unique identifier
        title: "CSS Flexbox — Day 9", // string type for topic title
        dayLearned: 9, // number type for the day it was learned
        subject: "CSS", // string type for the subject category
        isReviewed: false, // boolean type to indicate if it has been reviewed
        reviewCount: 0, // number type to count how many times it has been reviewed
        lastReview: null, // null to indicate it has never been reviewed
        nextReview: null, // null to indicate no scheduled review yet
        rating: null, // null to indicate it has never been rated
        notes: "" // empty string to indicate no notes yet
     // Use correct types for each field
     // Think before you type
   }
   
   console.log(topic)
   
   // Now answer these:
   // 1. Which fields are null vs undefined and why? 
    // lastReview,nextReview,rating shows null because they have been intentionally set the value to null
   // 2. Which fields use const vs let if they were standalone variables?
   // if you do not want to change the name of a variable u can use const but if you want to change the value of a variable you can use let.
   // 3. What would typeof return for each field?
   // type of would return typeof data of each variable
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 7 — fix the bugs
      
      Each line has a bug caused by type issues.
      Find the bug, explain why it is a bug,
      and write the fix.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 7: fix the bugs ──")
   
   // Bug 1: user submitted a form — daysUntilReview should be 8
   const daysInput = "7"       // from a form input
   const Review = Number(daysInput);
   const daysUntilReview = Review + 1
   console.log("Days until review:", daysUntilReview)
   // What is wrong? How do you fix it?
   // FIX: the number 7 is inside the double quotes it is consider as a string so when we add 1 it will concatenate
   // then i have to convert the string to number using Number() function and assign it to a variable
   // then i add Review + 1 in daysUntilReview variable to get the correct number of days until review which is 8
   
   // Bug 2: checking if a review is overdue
   const reviewCount = 0
   const hasReviews = reviewCount || false
   console.log("Has reviews:", hasReviews)
   // What is wrong? How do you fix it?
   // FIX: the reviewCount is 0 which is falsy so it will return false in hasReviews variable but it should return true because it has reviews even if the count is 0 
   // so i have to check if reviewCount is greater than or equal to 0 to get the correct value of hasReviews which is true
   
   // Bug 3: getting user theme preference
   const savedTheme = null
//    const theme = savedTheme || "cyberpunk"
   const theme = savedTheme ?? "cyberpunk"
   // This works — but what if savedTheme is ""?
   // 
   const savedTheme2 = ""
//    const theme2 = savedTheme2 || "cyberpunk"
   const theme2 = savedTheme2 ?? "cyberpunk"
   console.log("Theme:", theme2)
   // What is wrong? What operator should you use?
   // FIX:  
   
   // Bug 4: null check
   const currentUser = null
//    const isAdmin = typeof currentUser === "object" && currentUser.isAdmin
   const isAdmin = typeof currentUser === "object" && currentUser.isAdmin?
   console.log("Is admin:", isAdmin)
   // This does not crash — but it is wrong. Why?
   // What should the null check be?
   // FIX: the currentUser is null and the typeof null is object so it will return true in the first part of the condition but when it tries to access currentUser.
   // isAdmin it will return undefined because currentUser is null so the output of isAdmin will be undefined which is falsy but it should return false because there is no user
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW — after completing all exercises
      
      Answer these questions in comments below:
      
      1. What surprised you most about type coercion?
      2. When would you use ?? over ||?
      3. Why is typeof null === "object" a problem
         in real code?
      4. In REF, which fields of a topic would use
         null vs undefined and why?
      5. What is the difference between:
           const user = {}
           const user = null
           let user
         When would you use each?
      ══════════════════════════════════════════════ */
   
   // YOUR ANSWERS:
   // 1. automatic type coercion can lead to unexpected results
   // 2. I would use ?? over // when I want to provide a default value only for null or undefined
   // 3. actually it was a bug in javascript happened in 1995
   // 4. in REF, I Will use in those section where the user has not set any value or just left is as null or undefined 
   // 5. const user = {} is an empty object which can be used when we want to create a user object without any properties yet
    // const user = null is used when we want to indicate that there is no user or the user has been deleted
    // let user is used when we want to declare a variable that will hold the user object but we do not want to assign it a value yet because we will assign it later in the code