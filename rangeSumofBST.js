// Question no 938 

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1 

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.


// Solution


var rangeSumBST = function(root, low, high) {
  let total = 0
     let stack = [root]
 
     while(stack.length > 0) {
         let currNode = stack.pop()
         if (currNode.val >= low && currNode.val <= high) {
             total += currNode.val
         }
 
         if (currNode.left) stack.push(currNode.left)
         if (currNode.right) stack.push(currNode.right)
     }
 
     return total
 
 };