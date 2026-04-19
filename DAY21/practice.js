/*
  DAY 22 — Scope, Hoisting & Closures

  RULE: Write predictions BEFORE running.
  If wrong — explain why in a comment.
  Only syntax from Days 18–22 used here.

  Run: node day22-practice.js
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — scope chain predictions

   PREDICT: does each console.log work or throw?
   If it throws — what error?
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: scope chain ──")

   const globalVar = "I am global"
   
   const outerFn = () => {
     const outerVar = "I am outer"
   
     const innerFn = () => {
       const innerVar = "I am inner"
       console.log(globalVar)  // prediction: the output will be i am global , because it is declared in the global scope
       console.log(outerVar)   // prediction: the output will be i am outer , because it is declared in the outerFunction and innerFunction have access to the variable that is declared in the outerFunction
       console.log(innerVar)   // prediction: the output will be i am inner , because it is declared in the innerFunction 
     }
   
     innerFn()
     console.log(globalVar)    // prediction: the output will be i am global, because it is declared in the global scope
     console.log(outerVar)     // prediction: the output will be i am outer , because it is declared in the outerFunction
     // console.log(innerVar)  // prediction: — uncomment to test , cannot access a variable that is declared in the block scope from the outer scope
   }
   
   outerFn()
   console.log(globalVar)      // prediction: the output will be i am global, because it is declared in the global scope
   // console.log(outerVar)    // prediction: — uncomment to test , the outerVar is declared in the outerFunction which is a block scope , so can u cannot access from the outside of block scope
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — hoisting predictions
   
      PREDICT: what does each line output?
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: hoisting ──")
   
   // Block A — function declaration
   console.log(sayHi())        // prediction: the output will be hi , because it is a function declaration and function declarations are hoisted to the top of their scope , so that you can call the function before u define it in the code.
   function sayHi() {
     return "hi"
   }
   
   // Block B — var hoisting
   console.log(x)              // prediction: the output will be undefined , because even though var declarations are hoisted . b
   var x = 5
   console.log(x)              // prediction: the output will be 5, because x is called after the initialization of x with the value of 5, so it will output 5.
   
   // Block C — const TDZ
   // console.log(y)           // prediction: — uncomment to test
   const y = 10
   console.log(y)              // prediction: the output will throw error , because it is declared with const and const declarations are not hoisted and they are in the tdz , so u cannot access the before initialization of y.
   
   // Block D — what happens here?
   const double = (n) => n * 2
   console.log(double(4))      // prediction: the output will be 8, because the function is defined before it is called and it is an arrow function which is not hoisted but it is defined before the call so it will work.
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — write a closure
   
      TASK: write makeCounter using only what
      you have learned so far.
      No classes. No array methods. No new syntax.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: makeCounter ──")
   
   // Write makeCounter here
   // It should return an object with 3 methods:
   //   increment() — adds 1 to count, returns new count
   //   decrement() — subtracts 1, returns new count
   //   reset()     — sets count to 0, returns 0
   // count should NOT be accessible directly from outside
   
   const makeCounter = () => {
     // YOUR CODE HERE
     let count = 0;
     return {
      increment: () => {
         count++
         return count;
      },
      decrement: ()=>{
      count --
      return count;
      },
      reset: ()=> {
         count = 0
         return count;
      }
     }
   }
   
   const counter = makeCounter()
   console.log(counter.increment())  // 1
   console.log(counter.increment())  // 2
   console.log(counter.increment())  // 3
   console.log(counter.decrement())  // 2
   console.log(counter.reset())      // 0
   console.log(counter.increment())  // 1
   
   // Verify privacy — this should be undefined
   console.log(counter.count)        // undefined — count is private
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — function factory
   
      TASK: write makeMultiplier
      It receives a factor
      It returns a function that multiplies by that factor
      No new syntax — just closures and arrow functions
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: makeMultiplier ──")
   
   const makeMultiplier = (factor) => {
     // YOUR CODE HERE
     let num = factor;
     return function(number){
      return num * number;
     }
   }
   
   const double2 = makeMultiplier(2)
   const triple  = makeMultiplier(3)
   const times10 = makeMultiplier(10)
   
   console.log(double2(5))   // 10
   console.log(triple(5))    // 15
   console.log(times10(5))   // 50
   console.log(double2(8))   // 16
   
   // Each multiplier is independent
   // changing factor for double2 does not affect triple
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — the classic closure bug
   
      PREDICT: what does each version output?
      Then explain WHY they are different.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: closure bug ──")
   
   // Version A — var
   const functionsVar = []
   for (var i = 0; i < 3; i++) {
     functionsVar.push(() => i)
   }
   console.log(functionsVar[0]())  // prediction: the output will be 3, because the variable is declared with var so it is function scoped and the value of i is 3 after the loop and every iteration shares same i variable so all the functions will return 3.
   console.log(functionsVar[1]())  // prediction: the output will be 3 , just same as the above reasoning
   console.log(functionsVar[2]())  // prediction: the output will be 3 , just same as the above reasoning
   
   // Version B — let
   const functionsLet = []
   for (let j = 0; j < 3; j++) {
     functionsLet.push(() => j)
   }
   console.log(functionsLet[0]())  // prediction: the output will be 0, because the variable is declared with let so it is block scoped and each iteration of the loop creates a new j variable 
   console.log(functionsLet[1]())  // prediction: the output will be 1, because of the iteration and the new variable.
   console.log(functionsLet[2]())  // prediction:the output will be 2 , because of the iteration and the new variable.
   
   // Explain the difference:
   // var version: when u declare with var variable it is global and when loop iterates through each values  of i , it will update the same i variable because it all shares the same i variable
   // let version: when u declare with let variable it is block scoped and each iteration of the loop creates a new j variable so each variable contains the value of j for that iteration through loop
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 6 — REF topic tracker
   
      TASK: write makeTopicTracker
      Uses closures to keep each topic's data private
      Returns an object with review() and getStats()
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 6: REF topic tracker ──")
   
   const makeTopicTracker = (topicTitle) => {
     // YOUR CODE HERE
     let reviewCount = 0;
     let lastRating = null;
     return {
      review:(rating)=>{
         if(rating < 1 || rating > 4){
            throw new Error("Rating must be between 1 and 4")
         }
         reviewCount++;
         lastRating = rating;
      },
      getStats: ()=>{
         return {topicTitle,reviewCount, lastRating}
      }
   }
   }
     // Closed over variables:
     //   reviewCount — starts at 0
     //   lastRating  — starts at null
     //
     // Returns object with:
     //   review(rating) — increments reviewCount, saves lastRating
     //                    throws if rating is not 1-4
     //   getStats()     — returns { title, reviewCount, lastRating }
   
   const flexbox = makeTopicTracker("CSS Flexbox")
   const grid    = makeTopicTracker("CSS Grid")
   
   flexbox.review(3)
   flexbox.review(4)
   grid.review(2)
   
   console.log(flexbox.getStats())
   // { title: "CSS Flexbox", reviewCount: 2, lastRating: 4 }
   
   console.log(grid.getStats())
   // { title: "CSS Grid", reviewCount: 1, lastRating: 2 }
   
   // Trackers are completely independent
   // flexbox reviews do not affect grid
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW
   
      1. What is the scope chain?
         In which direction does it go?
         
   
      2. What is the Temporal Dead Zone?
         Which declarations have a TDZ?
      
   
      3. What makes something a closure?
         Does every function create a closure?
         a function that remember and access variable from the outer scope even after the outer function has finished executing is called closure. 
         not every function creates a closure, only the function that access variable from the outer scope creates a closure.
   
      4. Why does var in a for loop cause a bug
         with closures? How does let fix it?
         
   
      5. In makeTopicTracker — what would happen
         if you used a global variable instead
         of a closed-over one? What problem
         would that create?
      ══════════════════════════════════════════════ */
   
   // ANSWERS:
   // 1. the scope chain starts from the inner function and goes to the top of the scope.
   // 2. The temporal dead zone is the situation arises when u try to access a variable before it is initialized and it is only for let and const declaration because they are not hoisted and they are in the tdz until they are initialized.
   // 3. a function that remember and access variable from the outer scope even after the outer function has finished executing is called closure. 
   //    not every function creates a closure, only the function that access variable from the outer scope creates a closure.
   // 4. the declaration of var in a for loop causes a bug with closure because var is a functioned scoped variable and it is shared across all iterations of the loop.
   // 5. when u declare with var variable , then the reviewCount and lastRating will be shared across all the topic trackers and it will cause a problem because it will return only the last reviewCount and lastRating for all the topic tracker instead of keeping them separate for each topic tracker.