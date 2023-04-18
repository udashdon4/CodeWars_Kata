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