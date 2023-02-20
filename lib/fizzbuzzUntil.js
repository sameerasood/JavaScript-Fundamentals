// This challenge builds on the previous one, where you defined a fizzBuzz function.

// Write a function fizzbuzzUntil that accepts a number.
// This function should use a loop to loop through all numbers from 1 to the given one,
// call the fizzBuzz function for the current number and print the result.

const fizzBuzzUntil = (number) => {
for (let i = 1; i <= number; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
}

module.exports = fizzBuzzUntil;