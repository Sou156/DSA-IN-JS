// Leetcode Question Number 2177 


// Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

// Sample Input 


// Input: num = 33
// Output: [10,11,12]
// Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
// 10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

// My solution
var sumOfThree = function(num) {
  let y=num/3
  if(y%1==0){
      return [y-1,y,y+1]
  }else{
      return []
  }
  };
  console.log(sumOfThree(9));