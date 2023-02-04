//Question no 328 

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Input 

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]


// Solution

var oddEvenList = function(head) {
  let evenList = [], oddList = [], odd=true
  let currNode = head 
  while(currNode){
if(odd){
  oddList.push(currNode.val)
  odd=false

}else {
  evenList.push(currNode.val)
  odd=true
}

currNode= currNode.next
  }

  oddList.reverse()
  evenList.reverse()


  currNode=head
while(currNode){
if(oddList.length>0){
  currNode.val= oddList.pop()
}else{
  currNode.val= evenList.pop()
}
currNode=currNode.next
}
return head
};