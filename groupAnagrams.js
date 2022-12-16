// Question no 49 

// Question 

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Solutions 


var groupAnagrams = function(strs) {
  let sortedWord, map = new Map(),curArr = []
  
  for(let i=0;i<strs.length;i++){
  sortedWord = strs[i].split("").sort().join("")
  if(map.get(sortedWord)){
      curArr = map.get(sortedWord)
      curArr.push(strs[i])
  map.set(sortedWord, curArr)
  }else{
      map.set(sortedWord , [strs[i]])
  }
  
  }
  return [...map.values()]
  }

  console.log(groupAnagrams(["a"]));