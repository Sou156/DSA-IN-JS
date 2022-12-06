// Question no 1221

// Question 

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Input 

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 
// Solution

var balancedStringSplit = function(s) {
  let r= 0
  let l= 0 
  let b= 0 

  for(let i=0;i<s.length;i++){
      if(s[i]=="R"){
          r++
      }if(s[i]=="L"){
          l++
      }if(r==l){
          b++
      }
  }
  return b
};

console.log(balancedStringSplit("RLRRRLLRLL"));