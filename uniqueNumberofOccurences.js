// Leetcode Question Number 1207 

// Question 

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

//  Sample Test Case 


// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


// My Solution


var uniqueOccurrences = function(arr) {
  let obj = {}
  for(let i=0;i<arr.length;i++){
      obj[arr[i]] =    (obj[arr[i]] +1 ||0+1)
  }
  let value = Object.values(obj)
let set = new Set(value)
if(set.size<Object.keys(obj).length){
  return false
}
return true
};

console.log(uniqueOccurrences([1,2]));

