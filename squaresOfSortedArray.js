// Leetcode Question Number:977 

// Question: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Sample Input 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// My Solution 

var sortedSquares = function(nums) {
  let arr= []
  for(let i=0;i<nums.length;i++){
arr.push(nums[i]**2)
  }
 return arr.sort((a,b)=>{
     return a-b
 })
};

console.log(sortedSquares([-4,-1,0,3,10]))