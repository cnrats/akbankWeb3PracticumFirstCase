//Import prompt-sync library.
const prompt = require("prompt-sync")({ sigint: true });

//Get input from user and declare sum variable.
let number = prompt("Enter a number: ");

let oddishOrEvenish = (number) => {
    //Declare sum variable.
    let sum = 0;

    //Divide by 10 up to the last point at which the number can be divided and add the remainder to the variable sum.
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    //Declare returnValue.
    let returnValue;

    //According to the remainder of the division of the number by 2, return value even or odd on the function.
    (!(sum % 2)) ? returnValue = "Even" : returnValue = "Odd";

    return returnValue;
}

//Print return value.
console.log(oddishOrEvenish(number));