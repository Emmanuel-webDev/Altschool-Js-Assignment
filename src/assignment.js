// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


function sumOfNumbers(arrayOfNumbers) {
const numbers = [1,2,3,4,5,6,7,8,9,10]
   const sum = numbers.reduce((acc, val)=>{
  return acc + val;
});
console.log(sum);
}

sumOfNumbers();



function countEvenNumbers(arrayOfNumbers) {
   const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const val  = arrOfNumbers.filter((number)=>{
            return number % 2 === 0
        })
        console.log(val.length)
}
countEvenNumbers();

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

