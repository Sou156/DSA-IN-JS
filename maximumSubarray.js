// Question no 53

// Given an integer array nums, find the 
// subarray
// which has the largest sum and return its sum.


// Example 1

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Solution 


var maxSubArray = function(nums) {
  let sum = 0
   let max= nums[0]
  
  for(let i=0;i<nums.length;i++){
      sum= sum+nums[i]
      max = Math.max(sum,max)
      if(sum<0){
          sum=0
      }
  
  }
  return max
  };

  console.log(maxSubArray([5,4,-1,7,8]));