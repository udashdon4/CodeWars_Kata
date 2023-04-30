/*
Sim Dash @Udashdon4
My solution code for challenges (Kata)
Language: JavaScript
CodeWars Level: 7Kyu
Count: 11-20

Format:
1. Challenge (Kata)
2. Solution
*/

/*___________________________________________________________________________
### 11 ###
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
    "foefet" is an anagram of "toffee"
    "Buckethead" is an anagram of "DeathCubeK"
*/
var isAnagram = function(test, original) {

    let teSorted = test.toLowerCase().split('').sort()
    let orSorted = original.toLowerCase().split('').sort()
    let result = 0
    
    if (teSorted.length === orSorted.length) {
    for(let i = 0; i < teSorted.length; i++){
      result += teSorted[i] === orSorted[i] ? 1 : 0
      }
     }
    return result === orSorted.length
  };

/*___________________________________________________________________________
### 12 ###
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
*/
function roundToNext5(n){
    return Math.ceil((n/5))*5
  }

