// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number){
  let multiples = [];
  let solution = 0;
  if (number === null) {
    return -1;
  }
  for (i = 0; i < number; i++) {
    if(i % 3 === 0|| i % 5 === 0) {
      multiples.push(i);
    }
  }
  for (i = 0; i < multiples.length ; i++) {
    solution += multiples[i];
  }
  return solution;
}

module.exports = solution;
