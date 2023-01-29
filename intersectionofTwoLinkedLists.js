// Question no 160 

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// Solution 

// let map = new Map()
// let currNodeA = headA
// let prev = 0

// while (currNodeA) {
//     map.set(currNodeA, {next: currNodeA.next, prev: prev})
//     prev = currNodeA
//     currNodeA = currNodeA.next
// }
// let currNodeB = headB

// prev = 0

// while (currNodeB) {
//     if (map.has(currNodeB)) {
//         if (map.get(currNodeB).next == currNodeB.next) {
//             return currNodeB
//         }
//     }
//     prev = currNodeB
//     currNodeB = currNodeB.next
// }

// return null
// };
