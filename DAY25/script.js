/*
  DAY 25 — Strings & Template Literals

  RULE: Predict BEFORE running.
  If wrong — explain why in a comment.
  Only syntax from Days 18-25 used here.

  Run: node day25-practice.js
*/


/* ══════════════════════════════════════════════
   EXERCISE 1 — predict the output
   ══════════════════════════════════════════════ */

   console.log("── EXERCISE 1: predictions ──")

   const title = "  CSS Flexbox  "
   
   // A — immutability
   title.trim()
   console.log(title)               // prediction: trimmed or not?  it will remove the extra white space in a new  string but it will not modify the original string
   
   const clean = title.trim()
   console.log(clean)               // prediction: it will remove the extra space from the original string and assign the new string to the clean variable.
   
   // B — methods
   console.log(clean.toUpperCase()) // prediction: it will convert every single letter to capital case
   console.log(clean.toLowerCase()) // prediction: it will convert every single letter to smaller case
   console.log(clean.includes("Flex"))   // prediction: it will check if the text is present inside the string, if it is then it will return true otherwise false.
   console.log(clean.includes("flex"))   // prediction: ← case sensitive , it will return false , because the exact word and case is not present in the string.
   console.log(clean.startsWith("CSS"))  // prediction: startsWith method is used to check if the word mentioned in the argument is present and starts int the beginning of the string, if it is then it will return otherwise return false
   console.log(clean.endsWith("box"))    // prediction: endsWith method is used to check if the word inside the string matches with the word in the argument , if matches then it returns true, otherwise it turns false.
   
   // C — slice
   const s = "CSS Flexbox"
   console.log(s.slice(4))          // prediction: it will remove the first 4 characters from the 0 index to the 3 index.
   console.log(s.slice(0, 3))       // prediction: by mentioning the beginning and end of the slice we can get the part of the string between those indexes, 
   console.log(s.slice(-3))         // prediction: by mentioning a negative index it will extract the part from the last of the string
   console.log(s.slice(4, 7))       // prediction: it will extract the text from the beginning and  before the end part of the mentioned index
   
   // D — indexOf
   console.log(s.indexOf("Flex"))   // prediction: it will return the index of the first character of the first occurrence of the word mentioned in the argument, if not present then it will return -1.
   console.log(s.indexOf("Grid"))   // prediction:"it will return -1 because it is not present inside the string"
   
   // E — split
   console.log("a,b,c".split(","))           // prediction: it will split the string into an array of substrings
   console.log("CSS-Flexbox-Day".split("-")) // prediction: it will split the words at every hyphens inside the string
   console.log("hi".split(""))              // prediction: it will split the words into characters due to no space in the double quotes in the passed argument
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 2 — template literals
   
      PREDICT the output of each template literal.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 2: template literals ──")
   
   const topic  = "Flexbox"
   const day    = 9
   const rating = 4
   
   console.log(`Topic: ${topic}`)
   // prediction: the output will be flexbox , because the variable is embedded inside the template literal
   
   console.log(`Day ${String(day).padStart(2, "0")}`)
   // prediction: the output will be 09 because the number 9 is converted to string and then using padStart method it will add a 0 at the beginning of the string to make it 2 characters long.
   
   console.log(`Rating: ${rating >= 3 ? "Good" : "Needs work"}`)
   // prediction: the output will be Good because the condition is true
   
   console.log(`${topic.toUpperCase()} — ${14 - 7} days`)
   // prediction: FlEXBOX — 7 days because the topic variable is converted to uppercase and the expression 14 - 7 is evaluated to 7 and embedded in the template literal.
   
   // Multi-line
   const card = `
   Title: ${topic}
   Day:   ${day}
   Rating: ${rating}
   `.trim()
   console.log(card)
   // prediction: `
   //  Title: Flexbox`
    //  Day:   9
    //  Rating: 4
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 3 — write these functions
   
      Think about what each one needs to do.
      Only string methods and what is taught so far.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 3: write the functions ──")
   
   // Function 1: cleanInput(str)
   // Trims whitespace and lowercases
   // "  Flexbox  " → "flexbox"
   
   const cleanInput = (str) => {
     // YOUR CODE — one line using chaining
   }
   
   console.log(cleanInput("  Flexbox  "))   // "flexbox"
   console.log(cleanInput("  CSS GRID "))   // "css grid"
   
   
   // Function 2: capitalize(str)
   // Capitalises first letter, lowercases rest
   // "FLEXBOX" → "Flexbox"
   // "flexbox" → "Flexbox"
   
   const capitalize = (str) => {
     // YOUR CODE
     // Hint: use charAt(0) or slice to get first char
     // then slice(1) for the rest
   }
   
   console.log(capitalize("FLEXBOX"))   // "Flexbox"
   console.log(capitalize("flexbox"))   // "Flexbox"
   console.log(capitalize("cSS"))       // "Css"
   
   
   // Function 3: formatDay(day)
   // Takes a number, returns zero-padded string
   // 9 → "09", 14 → "14", 100 → "100"
   
   const formatDay = (day) => {
     // YOUR CODE
     // Hint: String(day).padStart(2, "0")
   }
   
   console.log(formatDay(9))    // "09"
   console.log(formatDay(14))   // "14"
   console.log(formatDay(100))  // "100"
   
   
   // Function 4: slugify(title)
   // Converts a title to a URL-friendly slug
   // "CSS Flexbox" → "css-flexbox"
   // "  Grid Layout  " → "grid-layout"
   
   const slugify = (title) => {
     // YOUR CODE
     // Steps: trim → lowercase → replaceAll spaces with dashes
   }
   
   console.log(slugify("CSS Flexbox"))      // "css-flexbox"
   console.log(slugify("  Grid Layout  "))  // "grid-layout"
   console.log(slugify("Functions II"))     // "functions-ii"
   
   
   // Function 5: isValidTitle(title)
   // Returns true if title:
   //   - is not empty after trimming
   //   - is at least 3 characters long after trimming
   //   - does not include numbers only (must have at least one letter)
   // Returns false otherwise
   
   const isValidTitle = (title) => {
     // YOUR CODE
     // Think about each condition separately
   }
   
   console.log(isValidTitle("Flexbox"))     // true
   console.log(isValidTitle("  "))          // false — empty
   console.log(isValidTitle("AB"))          // false — too short
   console.log(isValidTitle("CSS"))         // true
   console.log(isValidTitle("123"))         // false — numbers only
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 4 — number ↔ string conversions
   
      PREDICT each output.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 4: conversions ──")
   
   console.log(String(42))          // prediction:
   console.log(String(3.14))        // prediction:
   console.log((3.14159).toFixed(2))// prediction:
   console.log((3).toFixed(2))      // prediction:
   
   console.log(Number("42"))        // prediction:
   console.log(Number("3.14"))      // prediction:
   console.log(Number(""))          // prediction:
   console.log(Number("abc"))       // prediction:
   console.log(parseInt("42px"))    // prediction:
   console.log(+"99")               // prediction:
   
   // Which are valid numbers?
   console.log(Number.isNaN(Number("abc")))  // prediction:
   console.log(Number.isNaN(Number("42")))   // prediction:
   console.log(Number.isNaN(Number("")))     // prediction: ← careful
   
   
   /* ══════════════════════════════════════════════
      EXERCISE 5 — REF string operations
   
      Build the string utilities REF needs.
      ══════════════════════════════════════════════ */
   
   console.log("\n── EXERCISE 5: REF strings ──")
   
   const topics = [
     { title: "css flexbox",   subject: "CSS", day: 9,  rating: 4 },
     { title: "CSS GRID",      subject: "CSS", day: 10, rating: 1 },
     { title: "  variables  ", subject: "JS",  day: 18, rating: 3 },
     { title: "Closures",      subject: "JS",  day: 22, rating: null },
   ]
   
   // 1. Clean all topic titles — trim and proper case
   // "css flexbox" → "Css Flexbox"
   // Use capitalize from Exercise 3 + split + join
   const cleanTitles = topics.map(t => {
     // YOUR CODE
     // Hint: t.title.trim().split(" ").map(capitalize).join(" ")
   })
   console.log("Clean titles:", cleanTitles)
   // ["Css Flexbox", "Css Grid", "Variables", "Closures"]
   
   // 2. Search topics by query (case insensitive)
   const searchTopics = (topicList, query) => {
     // YOUR CODE
     // Use cleanInput from Exercise 3
     // Filter where title includes the cleaned query
   }
   
   console.log("Search 'css':", searchTopics(topics, "css").length)   // 2
   console.log("Search 'VAR':", searchTopics(topics, "VAR").length)   // 1
   console.log("Search 'xyz':", searchTopics(topics, "xyz").length)   // 0
   
   // 3. Format each topic as a summary string
   // "Css Flexbox (CSS) — Day 09 — Rating: 4"
   // "Closures (JS) — Day 22 — Not rated"
   const summaries = topics.map(({ title, subject, day, rating }) => {
     // YOUR CODE
     const cleanTitle = title.trim().split(" ")
       .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
       .join(" ")
     // Build the rest of the string
   })
   summaries.forEach(s => console.log(s))
   
   
   /* ══════════════════════════════════════════════
      SELF REVIEW
   
      1. Why must you assign the result of string methods?
      2. What does slice(-3) do?
      3. What is the difference between replace and replaceAll?
      4. What does split("") do?
      5. When does Number() return NaN?
         Is Number("") NaN?
      6. In REF — why should you always trim and
         lowercase user input before comparing?
      ══════════════════════════════════════════════ */
   
   // ANSWERS:
   // 1.
   // 2.
   // 3.
   // 4.
   // 5.
   // 6.