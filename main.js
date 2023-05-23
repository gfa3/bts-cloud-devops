const myFunction = (text) => {
    console.log("You called this function with input: " + text)
};

function sumTwoNumbers(a,b) {
    return a+b
}

//myFunction("Hello World")
const result = sumTwoNumbers(1,2)
console.log(result);

//Exercise

const arrayNumbers = [1,3,-1,5,-3,10]
let sum = 0
let min = Math.min(...arrayNumbers)
let max = Math.max(...arrayNumbers)

for (let index = 0; index < arrayNumbers.length; index++){

    sum += arrayNumbers[index]
}

console.log("Sum of all numbers is: " + sum)
console.log("The minimum value is: " + min)
console.log("The maximum value is: " + max)

//Example with Foreach (function to go through the values in arrays - similar to for): print letters
const array1 = ['a','b','c']

array1.forEach((Element) => console.log(Element))

//Example with Foreach (function to go through the values in arrays - similar to for): sum values
function sumArray(arr){
    let sum = 0

    arr.forEach(element => {
        sum += element
    })
    return sum
}

const arr = [1,2,3]
const resultSum = sumArray(arr)
console.log(resultSum)