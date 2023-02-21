/* Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, the function should return an array with the first element being the string
'Hi Anna! 50% off our best candies for you today!',
the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on. */

 const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (namesAndDiscounts) => {
return namesAndDiscounts.map((person) => {
    return (`Hi ${person.name}! ${person.discount}% off our best candies for you today!`);
})
}

console.log(generateMessages(namesAndDiscounts)); 