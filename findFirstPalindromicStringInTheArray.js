// Leetcode Question no-2108

// Question 
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

//  Sample Input 1 

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Solution 

var firstPalindrome = function(words) {


  for(let word of words){
      if(word==word.split("").reverse().join("")){
          return word
      }
  }
  return ""
  };

  console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))