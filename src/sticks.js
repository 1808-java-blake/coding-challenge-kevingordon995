/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr) {
  let min;
  let sticks = [];
  let remainder = [];
  if (arr === null) {
    return [];
  }
  
  sticks.push(arr.length);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      min = arr[i + 1];
    }
  }
 
    for (i = 0; i < arr.length; i++) {
      remainder = [];
      arr[i] -= min;
      if (arr[i] !== 0) {
        remainder.push(arr[i]);
      }
    }
    sticks.push(remainder.length);

  return sticks;
}

module.exports = solution;
