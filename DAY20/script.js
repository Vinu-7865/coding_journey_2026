/*
  DAY 21 — Functions I

  RULE: Write your prediction as a comment BEFORE running.
  If wrong — explain why in a comment.
  Only variables, data types, operators,
  conditionals, loops, and functions used here.

  Run: node day21-script.js
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — predict the output

   Read each block. Write prediction. Then run.
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: predictions ──")

   // Block A — hoisting
   console.log(add(3, 4))        // prediction: this function is hoisted because it is declared with the function keyword, so u can call the function from anywhere.
   function add(a, b) {
     return a + b
   }
   
   // Block B — NOT hoisted
   // console.log(multiply(3, 4))  // prediction: works or error?
   const multiply = (a, b) => a * b
   console.log(multiply(3, 4))   // prediction: this call function will work because the function is defined before the call,
   //  but in the above commented function call ,   it will throw error because u call the function before defining

   
   // Block C — no return
   const nothing = () => {
     const x = 100
   }
   console.log(nothing()) // prediction: the output of this function will be undefined because there is no return statement in the block of the function,
   //  so when we call the function it will return undefined.
   
   // Block D — default parameter
   const greet = (name = "developer") => "Hello " + name
   console.log(greet("Alex"))    // prediction: the output of the function will be hello alex , because u have passed a value to the parameter name, 
   // so the default value of the parameter will not trigger unless u didn't pass the value after calling the function.
   console.log(greet())          // prediction: the output will be hello developer , because here when u call the function u didn't pass the value
   // so by default the parameter name will trigger the default value to pass to the function.
   console.log(greet(undefined)) // prediction: the output will be hello developer because when u pass undefined to the function it triggers the
   // default value to pass to the function.
   console.log(greet(null))      // prediction: ← careful , the output will be hello null because u have intentionally passed null to the function so it wil be valid.
   
   // Block E — early return
   const checkRating = (r) => {
     if (r < 1) return "too low"
     if (r > 4) return "too high"
     return "valid"
   }
   console.log(checkRating(0))   // prediction: the output will be too low because the function will check the condition first and then return the value 
   console.log(checkRating(3))   // prediction: the output will be valid, because it is neither too law nor too high, so it will return valid.
   console.log(checkRating(5))   // prediction: the output will be too high, because it is greater than the condition so it will return too high.
   
   // Block F — returning an object
   const makeTopic = (title, day) => ({ title, day, reviewed: false })
   const topic = makeTopic("Flexbox", 9)
   console.log(topic)            // prediction: the output will be an object with the properties title, day and reviewed, the value of title will be
   // flexbox, the value of day will be 9 and the value of reviewed will be false
   console.log(topic.title)      // prediction: the output will be flexbox because it is the value of the property title in the object topic
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — write these functions
   
      No array methods. No new syntax.
      Only: variables, conditionals, loops, functions.
   
      Think about:
      - What does it receive?
      - What does it return?
      - What are the edge cases?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: write the functions ──")
   
   // Function 1: getDaysUntilReview(rating)
   // rating 4 → 14, rating 3 → 7, rating 2 → 3, rating 1 → 1
   // anything else → throw new Error
   
  //  const getDaysUntilReview = (rating) => {
  //    // YOUR CODE HERE
  //    if(rating===4){
  //     return 14
  //    }else if(rating===3){
  //     return 7
  //    }else if(rating===2){
  //     return 3
  //    }else if(rating===1){
  //     return 1
  //    }else{
  //     throw new Error("Invalid rating")
  //    }
  //  }
   
  //  console.log(getDaysUntilReview(4))   // 14
  //  console.log(getDaysUntilReview(3))   // 7
  //  console.log(getDaysUntilReview(2))   // 3
  //  console.log(getDaysUntilReview(1))   // 1
   // getDaysUntilReview(5)             // should throw — uncomment to test
   
   
   // Function 2: formatRating(rating)
   // Returns a label string:
   //   4 → "Easy — review in 14 days"
   //   3 → "Good — review in 7 days"
   //   2 → "Hard — review in 3 days"
   //   1 → "Forgot — review tomorrow"
   // Use getDaysUntilReview inside this function
   
  //  const formatRating = (rating) => {
  //    // YOUR CODE HERE
  //    if(rating===4){
  //     return 'Easy -review in 14 days'
  //    }else if(rating===3){
  //     return 'Good -review in 7 days'
  //    }else if(rating===2){
  //     return 'Hard - review in 3 days'
  //    }else if(rating===1){
  //     return 'Forgot -review tomorrow'
  //    }else{
  //     throw new Error("Invalid rating")
  //    }
  //    // Hint: call getDaysUntilReview to get the days
  //    // Build the string using template literals
  //  }
   
   console.log(formatRating(4))   // "Easy — review in 14 days"
   console.log(formatRating(1))   // "Forgot — review tomorrow"
   
   
   // Function 3: isValidRating(rating)
   // Returns true if rating is 1, 2, 3, or 4
   // Returns false for anything else
   // Does NOT throw — just returns true or false
   
  //  const isValidRating = (rating) => {
  //    // YOUR CODE HERE
  //    if(rating===4||rating===3||rating===2||rating===1){
  //     return true
  //  }else{
  //   return false
  //  }
  // }
   
   console.log(isValidRating(1))         // true
   console.log(isValidRating(4))         // true
   console.log(isValidRating(0))         // false
   console.log(isValidRating(5))         // false
   console.log(isValidRating("good"))    // false
   console.log(isValidRating(null))      // false
   
   
   // Function 4: createTopic(title, subject, day)
   // subject defaults to "General"
   // day defaults to 1
   // Returns an object with:
   //   title, subject, day, reviewed: false, rating: null
   
   const createTopic = (title, subject = "General", day = 1) => {
     // YOUR CODE HERE
     return ({title, subject, day, reviewed:false, rating:null});
   }
   
   console.log(createTopic("Flexbox"))
   // { title: "Flexbox", subject: "General", day: 1, reviewed: false, rating: null }
   
   console.log(createTopic("Flexbox", "CSS", 9))
   // { title: "Flexbox", subject: "CSS", day: 9, reviewed: false, rating: null }
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — arrow function forms
   
      TASK: rewrite each function in the shortest
      correct arrow function form.
      Then verify it produces the same result.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: arrow shorthand ──")
   
   // Rewrite in shortest form:
   function square(n) {
     return n * n
   }
   // const square = ...
   const square = n => n * n;
   console.log(square(5))   // 25
   
   
   function double(n) {
     return n * 2
   }
   // const double = ...
   const double = n => n * 2;
   console.log(double(5))   // 10
   
   
   function makeLabel(title, day) {
     return title + " — Day " + day
   }
   // const makeLabel = ...
   const makeLabel = (title,day) => title + ' - Day' + day;
   console.log(makeLabel("Flexbox", 9))   // "Flexbox — Day 9"
   
   
   function makeTopicObj(title) {
     return { title: title, done: false }
   }
   // const makeTopicObj = ...
      const makeTopicObj = title => ({title:title, done:false});
   // This one needs ( ) around the object — why?
   console.log(makeTopicObj("Flexbox"))
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — rest parameters
   
      TASK: write these functions using rest params.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: rest parameters ──")
   
   // Function: sumAll(...numbers)
   // Receives any number of arguments
   // Returns their sum
   // Use a for...of loop — no array methods yet
   
   const sumAll = (...numbers) => {
     // YOUR CODE HERE
     let sum = 0;
     for(let num of numbers){
      sum+=num;
     }
     return sum;
     }
   
   console.log(sumAll(1, 2, 3))         // 6
   console.log(sumAll(10, 20, 30, 40))  // 100
   console.log(sumAll(5))               // 5
   console.log(sumAll())                // 0
   
   
   // Function: firstAndRest(first, ...rest)
   // Returns an object: { first, rest, total }
   // total = 1 + rest.length
   
   const firstAndRest = (first, ...rest) => {
     // YOUR CODE HERE
     let total = 1 + rest.length;
     return ({first, rest , total})
   }
   
   console.log(firstAndRest("a", "b", "c", "d"))
   // { first: "a", rest: ["b", "c", "d"], total: 4 }
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — pure vs impure
   
      IDENTIFY which are pure. For impure ones —
      explain why and write a pure version.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: pure vs impure ──")
   
   // A — pure or impure? Why?
   const getDays = (r) => r === 4 ? 14 : 7
   // Answer: This function is pure because it always return the same out put for the same input and it has no side effects.
   
   // B — pure or impure? Why?
   let reviewCount = 0
  //  const recordReview = () => { reviewCount++ }
  const recordReview = (count)=> count + 1
   // Answer: the given one was inpure because it has a side effect which is modifying the value of the variable reviewCount outside the function ,
   // but the pure function will return the new value as it defined within the function.
  //  Pure version:   const recordReview = (count)=> count + 1
   
   // C — pure or impure? Why?
   const formatTitle = (title) => title.trim().toUpperCase()
   // Answer: this function is pure because it always return the same output for the same input and it has no side effects,
   // even though it uses string methods but it does not modify the original string 
   
   // D — pure or impure? Why?
   const getToday = () => new Date()
   // Answer: this function is input because it will not return the same output as input because it will return the current data and time 
   // which is always changing so it is not pure.
   
   // E — pure or impure? Why?
  //  const addToList = (list, item) => {
  //    list.push(item)
  //    return list
  //  }
  //  // Answer:
   // Hint: what does push() do to the original array?
   // Pure version — how would you fix it without push?
  
   const originalList = ["a", "b", "c"];
   const duplicateLIst = (originalList, item)=> [...originalList, item]
   console.log(duplicateLIst(originalList, "d"))
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 6 — REF functions
   
      TASK: write these 3 functions from memory.
      All pure. All handle edge cases.
      Use only syntax taught so far.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 6: REF functions ──")
   
   // 1. getDaysUntilReview(rating) — already written above, reuse it

    const getDaysUntilReview = (rating) =>{
      if(rating===4){
        return 14
      }else if(rating===3){
        return 7
      }else if(rating===2){
        return 3
      }else if(rating===1){
        return 1
      }else{
        throw new error("Invalid rating")
      }
    }
   
   // 2. getNextReviewDate(rating)
   //    Uses getDaysUntilReview
   //    Returns a Date object set to X days from now
   
   const getNextReviewDate = (rating) => {
     // YOUR CODE HERE
     const days = getDaysUntilReview(rating);
      const date = new Date();
      date.setDate(date.getDate() + days);

      return date;
   }
   
   const d3 = getNextReviewDate(3)
   const d4 = getNextReviewDate(4)
   console.log(d3)   // a Date 7 days from now
   console.log(d4)   // a Date 14 days from now
   
   
   // 3. formatDate(date)
   //    Receives a Date object
   //    Returns a string like "15 Jan 2026"
   
   const formatDate = (date) => {
     // YOUR CODE HERE
     //  return date.toLocaleDateString("en-GB", {
     //   day: "numeric", month: "short", year: "numeric"
     // })
   }
   
   console.log(formatDate(new Date()))   // today's date formatted
   console.log(formatDate(d3))           // 7 days from now formatted
   console.log(formatDate(d4))           // 14 days from now formatted
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW
   
      Answer in comments after completing all exercises:
   
      1. What is hoisting? Which function types are hoisted?
      2. What does a function return with no return statement?
      3. What is the difference between a parameter and argument?
      4. When does a default parameter trigger?
         Does null trigger it? Does 0 trigger it?
      5. Why does returning an object from an arrow
         function need ( ) wrapping the { }?
      6. What makes a function pure?
         Is getNextReviewDate pure? Why or why not?
      ══════════════════════════════════════════════ */
   
   // ANSWERS:
   // 1. hoisting is a behavior in JavaScript when u call out a function on the top of the scope and it will work even if the function is defined after the call, only applicable for function declaration.
   // 2. if there is no return statement inside the block of the function then it will return undefined by default.
   // 3. parameter is the naming definition or the variable inside the function declaration, while the argument is the value that u passing to the function.
   // 4. the default parameter will trigger only if u don't pass any value to the function or if u pass undefined to the function, but if u pass null or 0 it will not trigger the default parameter because they are valid values.
   // 5. when u want to return an object from arrow function u have to use () to wrap because other wise the {} will be treated as a block of the function and not as an object.
   // 6. the function will be pure if the same input always return the same output and it has no side effects,
   // getNextReviewDate is not pure because it will return different output for the same input because it depends on the current date and time.