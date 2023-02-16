// Question no 104 

// Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input 1

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Solution 

// var maxDepth = function(root) {
//   let max = -Infinity
// let depth = 1

// if (!root) return 0

// function dfs(node) {

//   if (node.left) {
//       depth++
//       dfs(node.left)
//   }
//   if (node.right) {
//       depth++
//       dfs(node.right)
//   }

//   if (depth > max) max = depth
//   depth--
//   return;
// }

// dfs(root)
// return max
// };