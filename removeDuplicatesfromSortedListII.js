// Question no 82

// Question 

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Input

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Solution 

var deleteDuplicates = function(head) {
  let map = new Map(), duplicates = new Map()
  let arr = []

  if (!head) return null

  let curr = head
  while(curr) {
      if (!map.has(curr.val)) {
          map.set(curr.val, 0)
          arr.push(curr.val)
      } else {
          duplicates.set(curr.val)
      }
      curr = curr.next
  }
  if (duplicates.size == 0) return head
  if (arr.length==1) return null

  curr = head
  let prev = null
  for (let num of arr) {
      if (duplicates.has(num)) continue
      else {
          curr.val = num
          prev = curr
          curr = curr.next
      }
  }

if (!prev) return null
  prev.next = null
  return head
};

console.log(deleteDuplicates([1,2,3,3,4,7,5]));