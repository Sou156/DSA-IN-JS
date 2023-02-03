// Question 1379

// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

 
// Input 

// Input: tree = [7,4,3,null,null,6,19], target = 3
// Output: 3
// Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

// Solution 


var getTargetCopy = function(original, cloned, target) {
  let stack = [cloned]

  while(stack.length > 0) {
      let currNode = stack.shift()
      if (currNode.val == target.val) return currNode
      if (currNode.left) stack.push(currNode.left)
      if (currNode.right) stack.push(currNode.right)
  }
};