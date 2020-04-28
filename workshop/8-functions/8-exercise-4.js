// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

// Test case
const myArray = [
  'bacon',
  'purple',
  'door',
  'window',
  'exist',
  'code',
  'program',
  'funky',
];



function itemIsPresent(array, item) {
  if (myArray.includes(item)){
    return true;
  } else {
return false;
  }

}


console.log(itemIsPresent(myArray, 'funky')); // true
console.log(itemIsPresent(myArray, 'elephant')); // true

// console.log(myArray, 'elephant'); // false
