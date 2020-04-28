// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  let average = (a + b + c + d + e)/5;
  average = Math.round(average)
  return average;
}

console.log(calculateAverage(76, 60, 83, 100, 78));
