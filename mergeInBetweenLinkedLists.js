// Question no 1669

// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure indicate the result:

// Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [0,1,2,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.


var mergeInBetween = function(list1, a, b, list2) {
  let secondHalf = list1, i=0

while (secondHalf) {
    if (i === b) {
        secondHalf = secondHalf.next ? secondHalf.next : null
        break
    }

    i++
    secondHalf = secondHalf.next
}

let currNode = list1, j=0

while (currNode) {
    if (!currNode.next) {
        currNode.next = secondHalf
        break
    }
    if (j+1 === a) {
        currNode.next = list2
    }

    j++
    currNode = currNode.next
}

return list1

};