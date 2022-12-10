
// Question no 2428

// You are given an m x n integer matrix grid.Return the maximum sum of the elements of an hourglass.

// Sample Input 1 

// Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
// Output: 30
// Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.

// Solution

var maxSum = function(grid) {
  let max = -1
  let total = []
  let top = []
  let mid = []
  let bottom = []
let i=0, j=0
  while (true){
top= grid[j].slice(i,i+3)
mid= grid[j+1].slice(i+1,i+2)
bottom = grid[j+2].slice(i,i+3)

total = [...top,...mid,...bottom].reduce((a,b)=>{
  return a+b
},0)
if(total>max){
      max=total}
  i++


if(i+2>=grid[0].length){
  i=0
  j++
}if(j+2>=grid.length){
  break
}

  }   

  return max 
};

console.log(maxSum([[1,2,3],[4,5,6],[7,8,9]]));