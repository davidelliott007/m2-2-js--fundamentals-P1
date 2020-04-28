/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function greetLong(lst) {
  let newArrayLength = lst.filter(function(item)
  {
    if (item.length > 4) {
      return true
    }
  })

  // console.log(newArrayLength);
  let newArrayLengthHello = newArrayLength.map(function(item)
  {
      return "Hello " + item;
  })
  return newArrayLengthHello;
}
  // -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim']));
