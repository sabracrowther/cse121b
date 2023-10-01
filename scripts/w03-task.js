/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers (add1, add2) {
    const getInput1 = Number(document.querySelector('#add1').value);
    
    const getInput2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(getInput1, getInput2);
}

document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(sub1, sub2) {
    return sub1 - sub2;
}

const subtractNumbers = function() {
    const num1 = Number(document.querySelector('#subtract1').value);
    const num2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = (factor1, factor2) => {
    const mult1 = Number(document.querySelector('#factor1').value);
    const mult2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(mult1, mult2);
}

document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = (dividend, divisor) => {
    const divide1 = Number(document.querySelector('#dividend').value);
    const divide2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divide1, divide2);
}

document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').innerHTML = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numArray.filter(num => num % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numArray.filter(num2 => num2 % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numArray.map(num => num * 2);

/* Output Sum of Multiplied by 2 Array */
const doubleNum = numArray.map(num => num * 2);
document.querySelector('#sumOfMultiplied').innerHTML = doubleNum.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
