// Question no 149

// Question

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Sample Input 1

// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Solution

var maxPoints = function(points) {
  let max= -Infinity, curr=2
if(points.length<=2) return points.length


  for(let i=0;i<points.length;i++){
      for(let j=i+1;j<points.length;j++){
          let slopeA = (points[j][1]- points[i][1])/(points[j][0]- points[i][0])
          if( slopeA===-Infinity) slopeA= Infinity

          for(let k=j+1; k<points.length;k++){
let slopeB = (points[k][1]- points[i][1])/(points[k][0]- points[i][0])
if(slopeB==-Infinity) slopeB=Infinity
              if(slopeB===slopeA){
curr++
              }
          }

          if(curr>max){
              max=curr
              curr=2
          }else curr=2
      }
  }
  return max

};

console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));