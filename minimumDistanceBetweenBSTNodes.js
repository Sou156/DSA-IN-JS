// Question no 738 

// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 
// Input 

// Input: root = [4,2,6,1,3]
// Output: 1


let minDiffInBST = function(root) {
  let minimum = Infinity
let stack = [root], arr = []

while (stack.length > 0) {
  let currNode = stack.pop()

  for (let i=0; i < arr.length; i++) {
      if (currNode !== arr[i]) {
          let num = Math.abs(currNode.val - arr[i].val)
          if (num < minimum) minimum = num
      }
  }

  arr.push(currNode)
  if (currNode.left) stack.push(currNode.left)
  if (currNode.right) stack.push(currNode.right)
}

return minimum
};