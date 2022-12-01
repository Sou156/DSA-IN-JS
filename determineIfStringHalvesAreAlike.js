// Question no 1704 
// Question 

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Sample Input 

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Solution 


var halvesAreAlike = function(s) {
  let   count1=0
   let  count2=0
 let firsthalf= s.slice(0,s.length/2)
 let secondhalf= s.slice(s.length/2,s.length)
 function checkVowels(s){
     s= s.toLowerCase()
     s=s.split("")
 if(s.includes("a")|| s.includes("e")|| s.includes("i")|| s.includes("o")|| s.includes("u")){
     return true
 }
 return false
 }
 
 for(let i=0;i<firsthalf.length;i++){
     if(checkVowels(firsthalf[i])){
         count1++
     }
 
 }
 
 for(let i=0;i<secondhalf.length;i++){
     if(checkVowels(secondhalf[i])){
         count2++
     }
 
 }
 
 if(count1==count2){
     return true
 }
 
 return false
 }

 console.log(halvesAreAlike("textbook"));