const number = [1,2,3,4]
const numShift = [2,4,6,8,10]

// console.log(number.push(5)) // 5 , push method of array
console.log(`pop: ${number.pop()}`) // 4 , pop method of array
console.log(number)
console.log(`before numShift: ${numShift}`)
console.log(`shift: ${numShift.shift()}`) // 2 , shift method of array
console.log(`after numShift: ${numShift}`)
// by using shift method in array it will pop the first element in the 0 index

console.log(`after Unshift: ${numShift.unshift(0)}`) // 6 , unshift method of array
// by using the unshift method in array it will add the element in the 0 index

const animal = ['dog', 'cat', 'rabbit', 'hamster']
const numConcat = number.concat(animal)
console.log(numConcat)
// by using the concat method in array we can merge two or more arrays.

console.log(`looking for index of cat: ${numConcat.indexOf('cat')}`) // 5 , indexOf method of array
// the indexOf method is used to find the index of the element in the array.

console.log(`checking if numConcat includes elephant: ${numConcat.includes('elephant')}`) // false , includes method of array
console.log(`checking if numConcat includes rabbit: ${numConcat.includes('rabbit')}`) // true , includes method of array

// reversing the elements in array using reverse method

console.log(` before using reverse: ${numConcat}`)
console.log(`after using reverse: ${numConcat.reverse()}`) // reverse method of array

// sorting the elements in array using sort method

console.log(` before using sort: ${numConcat}`)
console.log(`after using sort: ${numConcat.sort()}`) // sort method of array
// it will arrange the elements in array in ascending order and if the elements are string then it will arrange in alphabetical order.
// numbers have more priority than string in sorting method of array.
//  if the array have both number and string then it will arrange the numbers first and then the strings.
// in the strings if there is capital letter then it will arrange first and then the small letters.

// slicing the elements in array using slice method

const wordSlice = ['apple', 'banana', 'orange','mango','guava']

console.log(`before using slice: ${wordSlice}`)
console.log(`after using slice: ${wordSlice.slice(1,4)}`) // slice method of array
// u can pass 2 parameter in slice method , the first parameter is the starting of the mentioned index where extraction
// of values starts and in the 2nd parameter index where extraction of values ends but the value of the end index is not included in the output.

// using splice method in array

const numSplice = [1,2,3,4,5,6,7,8,9]
console.log(`before using splice: ${numSplice}`)
console.log(`after splice: ${numSplice.splice(2,4)}`) // splice method of array
// the second parameter ins splice method is the number of elements u want to remove from the mentioned index in the array
// note: using the splice method it will modify the original array.


// multidimensional array

const nameArray = [['akash',19],['sachin',20]]
console.log(`name: ${nameArray[0][0]}`) // akash
console.log(`age: ${nameArray[0][1]}`) // 19
console.log(`name: ${nameArray[1][0]}`) // sachin
console.log(`age: ${nameArray[1][1]}`) // 20

const ticTacToe = [['X','O','X'],['O','X','O'],['O','X','O']]
console.log(ticTacToe)
console.log(ticTacToe[0])

// 

// let num = 10

// num+= 5 
// console.log(num)

// forEach practice

const fruits = ['mango', 'apple', 'orange'];

fruits.map((fruit)=>{
    console.log(fruit)
},0)

// const numbers = [1,2,3,4,5]

// const hello = numbers.filter((num,sum)=>num + sum,0)


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const month = months.filter((month)=>month.toLocaleLowerCase().includes('m'))

const numbers = [1,2,3,4,5]

const hello = numbers.reduce((num,sum)=>num + sum,0)

console.log(hello)


const array = [1,2,3,4,5]

const newFind = array.every((num)=> num % 2 === 0)
console.log(newFind)


function hey(...rest){
let sum = 0;
for(let i=0; i<rest.length; i++){
    sum += rest[i]
}
return sum
}



function defPar(a,b=5){
    return a + b
}


const [a,b,...c] = [1,2,3,4,5] // destructuring


const myInfo ={
    name: 'akash',
    age: 19,
   address:{
    city: 'mumbai',
    pin: 400001
   }
}

const {address:{city},address:{pin}} = myInfo // destructuring

const {3:index} = array; // destructuring using index no

function printAddress({ address: { city, pin } }) {
    console.log(`City: ${city}, Pin: ${pin}`);
}
printAddress(myInfo) // destructuring through object in function