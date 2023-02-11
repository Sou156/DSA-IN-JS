// Question 1448

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Input 1

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Solution 


var goodNodes = function(root) {
  let output = 0, max = -Infinity
let nums = []

function dfs(node) {
  nums.push(node.val)
  max = Math.max(...nums)
  if (node.val >= max) output++
  if (node.left) {
      dfs(node.left)
  }

  if (node.right) {
      dfs(node.right)
  }

  nums.pop()
  return;
}

dfs(root)
return output
};