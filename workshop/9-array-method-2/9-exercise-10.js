// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here


 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


function calculateAverage(grades) {

    let total = 0;
    grades.forEach(function(element) {
        total = total + element;
    });

    let average = Math.round(total/grades.length);

    if (average < 60) {
        return 'F'
    } else if (average < 70) {
        return 'D'
    } else if (average < 80) {
        return 'C'
    } else if (average < 90) {
        return 'B'
    } else if (average < 100) {
        return 'A'
    } else if (average >= 100) {
        return 'A+'
    }




}
console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));


console.log(calculateAverage([76, 60, 83, 100, 78]));

