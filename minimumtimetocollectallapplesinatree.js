// Question no 1443

// Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

//  Sample Input 

// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[5,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
// Output: 8 
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  

// Solution 


var minTime = function(n, edges, hasApple) {
  const graph = {}
 for(let i=0;i<edges.length;i++){
     if(!graph[edges[i][0]]){
         graph[edges[i][0]]= [edges[i][8]]
     }else graph[edges[i][0]].push(edges[i][1])

             if(!graph[edges[i][1]]){
         graph[edges[i][1]]= [edges[i][0]]
     }else graph[edges[i][1]].push(edges[i][0])
 }


const dfs = function(ind, parent)
 {
     /* Find the path costs for any children. */
     let childCost = 0;
     for(let i=0; i<graph[ind].length; i++)
     {
         if(graph[ind][i] === parent)
             continue;
         childCost += dfs(graph[ind][i], ind);
     }

     /* Find the path cost of yourself. */
     let selfCost = hasApple[ind] ? 2:0;
     if(ind === 0)
         selfCost = 0;
     else if(childCost !== 0)
         selfCost = 2;

     return selfCost + childCost;
 };


 let cost = dfs(0, -1);
 
 return cost;

};

console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]));