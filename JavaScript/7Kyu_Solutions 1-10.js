/*
Sim Dash @Udashdon4
My solution code for challenges (Kata)
Language: JavaScript
CodeWars Level: 7Kyu
Count: 1-10

Format:
1. Challenge (Kata)
2. Solution
*/

/*___________________________________________________________________________
### 1 ###
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.
For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/
function solution(nums){
    return nums == null || nums == [] ? [] : nums.sort((a,b) => a -b)
}

/*___________________________________________________________________________
### 2 ###
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
Your function receives one side of the DNA (string, except for Haskell); you need to 
return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna){
    const m = {
      'T' : 'A',
      'A' : 'T',
      'C' : 'G',
      'G' : 'C'
    }
    return dna.replace(/[TACG]/g, i => m[i])
  }

  
/*___________________________________________________________________________
### 3 ###
Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.
Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/
function SeriesSum(n)
{
 let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (3 * (i - 1) + 1);
  }
  return sum.toFixed(2)
}

/*___________________________________________________________________________
### 4 ###
you need to create a function that when provided with a triplet, returns the 
index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
For example:
gimme([2, 3, 1]) => 0
*/
    var gimme = function (inputArray) {
        if ((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2])
          || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]))
          return 0;
          
        if ((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2])
          || (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]))
          return 1;
          
        if ((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1])
          || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]))
          return 2;
      };

/*___________________________________________________________________________
### 5 ###
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN (pin) {
  if (/^[0-9]*$/.test(pin)) {
    if (pin.length === 4 || pin.length === 6 ) {
      return true
    }
  }
  return false
}

/*___________________________________________________________________________
### 6 ###
Sometimes there are problems: lack of colors, technical malfunction and a "bad" 
control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the 
error rate of the printer as a string representing a rational whose numerator is 
the number of errors and the denominator the length of the control string. Don't reduce 
this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.
Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"
s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
function printerError(s) {
  return `${s.replace(/[^n-zN-Z]/g, '').length}/${s.length}`
}

/*___________________________________________________________________________
### 7 ###
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
*/
function squareDigits(num){
  return parseInt(num.toString().split('').map(item => item ** 2).join(''))
}
/*___________________________________________________________________________
### 8 ###
Create a function that returns the sum of the two lowest positive numbers given
an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/
function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a,b) => a-b)
  return sorted[0] + sorted[1]
}

/*___________________________________________________________________________
### 9 ###
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
var number=function(array){
  let result = []
  for(let i = 1; i <= array.length; i++){
    result.push(`${i}: ${array[i-1] }`)
  }
  return result
}

/*___________________________________________________________________________
### 10 ###
 Given a string str, reverse it and omit all non-alphabetic characters.
Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".
Input/Output
    [input] string str
*/
function reverseLetter(str) {
  return str.split('').filter(i => i >='a' && i <= 'z').reverse().join('')
}

