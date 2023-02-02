// Question no 2 

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input 

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Solution 

var addTwoNumbers = function(l1, l2) {
  let nodeA = l1
  let nodeB = l2
  let carryOver = 0
  let arr = []
  let newList = new ListNode(null, null), curr = newList, prev = null

  while (nodeA || nodeB || carryOver) {

      let a = (nodeA.val || 0)
      let b = (nodeB.val || 0)

      let sum = a + b + carryOver

      if (sum >= 10) {
          carryOver = 1
          sum -= 10
      } else carryOver = 0

      arr.push(sum)
      curr.val = sum
      // if (!nodeA && !nodeB && !carryOver) break

      curr.next = new ListNode()
      prev = curr
      curr = curr.next
      nodeA = (nodeA.next || 0)
      nodeB = (nodeB.next || 0)

  }
  prev.next = null
  return newList
};