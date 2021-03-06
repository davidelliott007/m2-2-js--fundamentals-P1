// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html


// so for this I think that I need to red-do it
// the power is based on the length of the number - 
function identifyArmstrongNumbers(num1, num2) {

    let armstrongNumbers = [];

    for (i=num1; i<num2; i++)
    {
        let iteratorCharArray = i.toString().split('');
    
        //  console.log(iteratorCharArray);
    
        let total = 0;
        
        iteratorCharArray.forEach(
            function(element) {
                let num = Number(element);
                // console.log('num from parseInt is',num);
                num = num ** iteratorCharArray.length;
                // console.log('num num ** 3 is',num);
                total = total + num;
            }
        );
        
        //  console.log('total is',total);
        //  console.log('i is ',i);
    
        if (total === i) {
            // console.log('armstrong! ',i);
    
            armstrongNumbers.push(i);
        }
    }

    return armstrongNumbers;
    

}


console.log(identifyArmstrongNumbers(1, 500));
console.log(identifyArmstrongNumbers(300, 95000));
