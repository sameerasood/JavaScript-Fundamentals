/*Declare a function lowercaseMessage that returns the lowercase version of the given string.*/

const lowercaseMessage = (string) =>{
    return string.toLowerCase();
}

const transform = (str, lowercaseMessage) =>{
    return lowercaseMessage(str);
}


console.log(lowercaseMessage('WHY ARE YOU SHOUTING?'));