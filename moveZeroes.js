// Question no 283

// Question
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//  Sample Input 1

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Solutions

var moveZeroes = function (nums) {
  nums.sort((a, b) => {
    if (a === 0) return 1;
    if (b === 0) {
      return -1;
    } else {
      return 0;
    }
  });
};

console.log(moveZeroes([[0,1,0,3,12]]));
