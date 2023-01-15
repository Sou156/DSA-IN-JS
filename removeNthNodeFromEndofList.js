// Question no 19 

// Question 

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Solution

var removeNthFromEnd = function(head, n) {
  let arr = []
  let curr =head 
  while(curr){
      arr.push(curr.val)
      curr=curr.next

  }

  let info 
  curr= head 
  for(let i=0;i<arr.length;i++){
      if(i!==arr.length-n) curr=curr.next
      else{
          info=curr
      }
  }

if(arr.length==1){
  head=null
  return head
}
curr=head
let prev = null 
while(curr){
  if(curr!=info){
      prev=curr
      curr=curr.next
  }else if(info==curr){
      let pointer = curr.next
      if(!prev){
          head = pointer 
          break
      }prev.next = pointer
      break
  }
}

return head
};

console.log(removeNthFromEnd([1], 1));