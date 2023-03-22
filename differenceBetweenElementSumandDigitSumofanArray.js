// Question no 2535 

// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Example 1 

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.



var differenceOfSum = function(nums) {
  let elSum = 0, digSum = []

  for(let i=0;i<nums.length;i++){
      elSum+=nums[i]

      let spreadArr = `${nums[i]}`.split("")

      digSum.push(...spreadArr)
  }


  let digit = digSum.reduce((a,b)=>{return a+(+b)},0)

  return Math.abs(elSum-digit)
};