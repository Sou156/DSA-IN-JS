// Question no 114

// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 
// Example 1
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

// Solution 

let flatten = function(root) {
  let arr = []

if (!root) return

const dfs = (node) => {
    arr.push(node.val)

    if (node.left) {
        dfs(node.left)
    }
    if (node.right) {
        dfs(node.right)
    }

    return
}

if (arr.length === 1) return

dfs(root)
let currNode = root

for (let i = 0; i < arr.length; i++) {

    currNode.val = arr[i]
    currNode.left = null

    if (currNode.right == null) {
        if (i !== arr.length-1) currNode.right = new TreeNode(0, null, null)
        else currNode.right = null
    }
    
    currNode = currNode.right

}
};
