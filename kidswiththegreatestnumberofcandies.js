// Question no 1431

// Question

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Sample Input 1

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// Solution

var kidsWithCandies = function (candies, extraCandies) {
  let greatest = Math.max.apply(null, candies);
  let boolArr = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatest) {
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
  }
  return boolArr;
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
