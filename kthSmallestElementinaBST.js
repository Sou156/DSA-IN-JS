// Question 230

// Question

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Input

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Solution

var kthSmallest = function (root, k) {
  let arr = [];

  function dfs(node) {
    if (node.left) dfs(node.left);
    arr.push(node.val);
    if (node.right) dfs(node.right);
    return;
  }

  dfs(root);
  return arr[k - 1];
};

console.log(kthSmallest([3, 1, 4, null, 2], 1));
