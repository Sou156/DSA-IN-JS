// Question no 1539

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.

// Example 1

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.


const findKthPositive = function(arr, k) {
  let missingNums = []
  let j = 1, i = 0

  while (true) {

      if (i >= arr.length) missingNums.push(j)
      else if (arr[i] !== j) {
          while (true) {
              if (arr[i] === j) break
              missingNums.push(j)
              j++
          }
      }

      if (missingNums.length >= k) break
      j++
      i++
  }

      return missingNums[k-1]
};
