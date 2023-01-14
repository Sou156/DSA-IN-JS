// Question no 9 

// Question 

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1 

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Solution 

var isPalindrome = function(x) {
  return x.toString() === x.toString().split("").reverse().join("")
};


console.log(isPalindrome(-121));