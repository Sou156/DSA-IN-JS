// Question no 290 

// Question 

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

//  Example 1 
//  Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Solution 

var wordPattern = function(pattern, s) {
  let sentence = s.split(" ")
  let objA = {} ,objB={}
if(sentence.length!==pattern.length) return false
  for(let i=0;i<sentence.length;i++){
      if(objA[sentence[i]]){
          if(objA[sentence[i]]!=pattern[i]) return false
      }else{
          objA[sentence[i]]= pattern[i]
          objB[pattern[i]]= sentence[i]

      }
  }
  if(Object.entries(objA).length!==Object.entries(objB).length ){
      return false
  }
  return true
};
console.log(wordPattern( "abba","dog cat cat fish"));