// Question no 3 

// Question 
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Sample Input 1 

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
  let str = [], max =0,curr=0, index 
for(let i=0;i<s.length;i++){
  if(!str.includes(s[i])){
      str.push(s[i])
      curr = str.length
  }else{
index= str.indexOf(s[i])
str.splice(0,index+1)
str.push(s[i])
  }
  if(curr>max){
      max = curr , curr =0 
  }
}
return max
};

console.log(lengthOfLongestSubstring("bbbbb"));