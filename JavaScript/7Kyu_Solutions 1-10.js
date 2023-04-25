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
### 6 ###

*/

/*___________________________________________________________________________
### 7 ###

*/

/*___________________________________________________________________________
### 8 ###

*/

/*___________________________________________________________________________
### 9 ###

*/

/*___________________________________________________________________________
### 10 ###
