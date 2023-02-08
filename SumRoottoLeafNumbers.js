// Question no 129 

// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

//  Input 

// Input: root = [1,2,4]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.


// Solution 

var sumNumbers = function(root) {
  let nums = [], num = ""

function dfs(node) {
  num += node.val
  if (node.left) {
      dfs(node.left)
  }

  if (node.right) {
      dfs(node.right)
  }

  if (!node.left && !node.right) nums.push(+num)
  num = num.slice(0, num.length-1)
  return;
}

dfs(root)
return nums.reduce((a,b) => {return a+b}, 0)
};
