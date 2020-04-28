// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUniqueButReturnOneInstance(array) {

    let uniques = [];

    array.forEach(function(element) {
        if (uniques.includes(element) == false) {
            uniques.push(element);
        }
    });
    return uniques;
}


function filterNonUnique(array) {

    let uniques = array.filter(

        function (element) {
            if (array.indexOf(element) === array.lastIndexOf(element)) {
                return true;
            }
        }
    );

    return uniques;
}

console.log(filterNonUniqueButReturnOneInstance([1,2,3,3,4,5,6,7,7,8]));
console.log(filterNonUnique([1,2,3,3,4,5,6,7,7,8]));
