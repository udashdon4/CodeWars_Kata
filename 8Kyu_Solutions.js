/*
Sim Dash @Udashdon4
My solution code for challenges (Kata)
CodeWars Level: 8Kyu

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
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/
function litres(time) {
    return Math.floor(time*0.5)
  }
  