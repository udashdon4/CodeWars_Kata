/*
Sim Dash @Udashdon4
My solution code for challenges (Kata)
Language: JavaScript
CodeWars Level: 8Kyu
Count: 11-20


Format:
1. Challenge (Kata)
2. Solution
*/

/*___________________________________________________________________________
### 11 ###
Given a string of digits, you should replace any digit below 5 with '0' and 
any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
*/
function fakeBin(x){
    return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
}


/*___________________________________________________________________________
### 12 ###
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
    let bmindex = weight/(height * height)
    if (bmindex <= 18.5) {
      return "Underweight"
    }
    else if (bmindex <= 25.0) {
      return "Normal"
    }
    else if (bmindex <= 30.0) {
      return "Overweight"
    }
    else {
      return "Obese"
}
}


/*___________________________________________________________________________
### 13 ###
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
function highAndLow(numbers){
  let arr1 = numbers.split(' ').sort((a,b) => a - b)
  return `${arr1[arr1.length-1]} ${arr1[0]}`
}

/*___________________________________________________________________________
### 14 ###
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}
   
/*___________________________________________________________________________
### 15 ###
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/
function century(year) {
  return Math.ceil(year/100)
}
 
/*___________________________________________________________________________
### 16 ###
Americans are odd people: in their buildings, the first floor is actually the 
ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the 
floor in the european system.With the 1st floor being replaced by the ground 
floor and the 13th floor being removed, the numbers move down to take their place. 
In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
*/
function getRealFloor(n) {
  return n <= 0 ? n : n <= 12 ? n-1 : n - 2
}

/*__________________
_________________________________________________________
### 17 ###

*/

/*___________________________________________________________________________
### 18 ###
*/

/*___________________________________________________________________________
### 19 ###
*/

/*___________________________________________________________________________
### 20 ###
*/