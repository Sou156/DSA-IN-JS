// Question no 16 

// Question 

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Sample Input 1 

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Solution 

var threeSumClosest = function(nums, target) {
  nums.sort((a,b)=>{
      return a-b
  })
  closest = Infinity
  arr = []
  for(let i=0;i<nums.length-2;i++){
  left= i+1
  right= nums.length-1
  while(left<right){
      sum = nums[i]+nums[left]+nums[right]
  // console.log(sum)
  if(Math.abs(sum-target)< Math.abs(closest-target)){
      closest=sum
      arr= [nums[i],nums[left],nums[right]]
  
  }
  if(sum<target){
      left++
  }else{
      right--
  }
  }
  }
  return closest
  };

  console.log(threeSumClosest([-1,2,1,-4],1));
