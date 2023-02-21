/* Declare a function checkLength that takes a phone number (as a string) as argument,
and returns true if this phone number contains 10 characters or less.
Now declare a function filterLongNumbers that takes an array of phone numbers.
This function should return only numbers that contain 10 characters or less.
It should make use of the function checkLength written previously. */

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;
    } else {
    return false;
    }
}

const filterLongNumbers = (numbers) => {
    return numbers.filter(checkLength);
}

console.log(filterLongNumbers(numbers));