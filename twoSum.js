// Leetcode Sum No-1

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//  Sample Test case

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// My Solution :

var twoSum = function (nums, target) {
  let map = new Map()
  for(let i=0;i<nums.length;i++){
    let  complement= target- nums[i]
    if(map.has(nums[i])){
        return [map.get(nums[i]),i]
    }else{
        map.set(complement,i)
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
