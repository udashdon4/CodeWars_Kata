/*
Sim Dash @Udashdon4
My solution code for challenges (Kata)
Language: JavaScript
CodeWars Level: 8Kyu
Count: 1-10

Format:
1. Challenge (Kata)
2. Solution
*/

/*___________________________________________________________________________
### 1 ###
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
    let sum = 0
    arr.forEach (n => {n > 0 ? sum +=n : 0 })
    return sum                   
}

/*___________________________________________________________________________
### 2 ###
You're writing code to control your town's traffic lights. You need a function
to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the 
current state of the light and returns a string representing the state the light 
should change to.For example, when the input is green, output should be yellow.
*/
function updateLight(current) {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : "green"
}

/*___________________________________________________________________________
### 3 ###
Create a function that accepts a string and a single character, and returns an
integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
*/
function strCount(str, letter){  
    return str.split('').filter(n => n.includes(letter)).length 
}

/*___________________________________________________________________________
### 4 ###
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of 
water per hour of cycling.You get given the time in hours and you need to return
the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/
function litres(time) {
    return Math.floor(time*0.5)
}

/*___________________________________________________________________________
### 5 ###
Write a function that takes an array of numbers and returns the sum of the 
numbers. The numbers can be negative or non-integer. If the array does not 
contain any numbers then you should return 0.Examples:

Input: [1, 5.2, 4, 0, -1]
Output: 9.2
Input: []
Output: 0
Input: [-2.398]
Output: -2.398
Assumptions:
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/
function sum (numbers) {
    "use strict";
     let sum = 0
     if (numbers.length >= 1) {
       numbers.forEach (n => {
         sum += n
       })
       return sum 
     }
     else {
       return 0
     }
};

/*___________________________________________________________________________
### 6 ###
The cockroach is one of the fastest insects. Write a function which takes its 
speed in km per hour and returns it in cm per second, rounded down to the integer 
For example:
1.08 --> 30
*/
function cockroachSpeed(s) {
    let meph = 1000/1
    let cmphr = meph * 100/1
    let cmpmin = cmphr * (1/60)
    let cmpsec = cmpmin * (1/60)
    return parseInt(s * cmpsec)
}

/*___________________________________________________________________________
### 7 ###
Sum all the numbers of a given array ( cq. list ), except the highest and the
lowest element ( by value, not by index! ).The highest or lowest element 
respectively is a single element at each edge, even if there are more than one
with the same value.Mind the input validation.
Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/
function sumArray(array) {
    if (array == null || array.length < 2 || array == []) {
      return 0
    }
    else {
      return array.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a + b, 0)
    }
}

/*___________________________________________________________________________
### 7 ###
Your start-up's BA has told marketing that your website has a large audience 
in Scandinavia and surrounding countries. Marketing thinks it would be great to 
welcome visitors to the site in their own language. Luckily you already use an 
API that detects the user's location, so this is an easy win.
The Task
Think of a way to store the languages as a database (eg an object). The languages
are listed below so you can copy and paste!Write a 'welcome' function that takes
a parameter 'language' (always a string), and returns a greeting - if you have 
it in your database. It should default to English if the language is not in the 
database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
etc....
*/
function greet(language) {
	const message ={
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  return message[language] || message.english;
}
/*___________________________________________________________________________
### 8 ###
Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
    humanYears >= 1
    humanYears are whole numbers only
Cat Years
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
Dog Years
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 0
  let dogYears = 0
  if (humanYears === 1) {
    catYears = 15
    dogYears = 15
  }
  else if (humanYears === 2){
    catYears = 24
    dogYears = 24
           }
  else {
    catYears = (humanYears - 2)*4 + 24
    dogYears = (humanYears - 2)*5 + 24
  }
  return [humanYears, catYears, dogYears]
}

/*___________________________________________________________________________
### 9 ###
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).
Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++){
    z.push(x*i)
  }
  return z
}

/*___________________________________________________________________________
### 10 ###
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of 
the array.E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4
are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
*/
function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length-1; i++){
    if (arr[i+1] - arr[i] !== 1){
      return arr [i+1]
    }
  }
  return null
}
