// Question no 215 

// Question

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

// Sample Input 1

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Solution 

var findKthLargest = function(nums, k) {
  return nums.sort((a,b)=>{
return b-a
 })[k-1]



};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));