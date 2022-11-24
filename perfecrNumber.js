//Question Number -507 

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Sample Input 1
// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.


var checkPerfectNumber = function(num) {
  total=0
  for(let i=1;i<num;i++){
      if(num%i==0){
total+=i
      }
  }
  if(total==num){
return true
  }
  return false
};

console.log(checkPerfectNumber(7))