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

*/

/*___________________________________________________________________________
### 15 ###

*/


