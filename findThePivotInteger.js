// Question no 2485

// Question

// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

// Input 1
// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

// Solution 

var pivotInteger = function(n) {
  let total = (n*(1+n))/2
let sum = 0, loop = total


  for (let i=1; i<=loop; i++) {
sum += i
if (sum==total) {
  return i
} else total -= i

  }

  return -1
};

console.log(pivotInteger(1));