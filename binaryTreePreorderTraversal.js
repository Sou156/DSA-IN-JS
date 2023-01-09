// Question no 144 

// Question 

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

//  Example Input 

// Input: root = [1,null,2,3]
// Output: [1,2,3]


// Solution 

var preorderTraversal = function(root) {
  if(!root){
      return []
  }
  const list = []
  function dfsPre(node){
      list.push(node.val)
      if(node.left) dfsPre(node.left)

      if(node.right) dfsPre(node.right)

      return list

  }
  return dfsPre(root)
};


console.log(preorderTraversal([1]));