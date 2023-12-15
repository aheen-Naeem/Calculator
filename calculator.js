"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Mini calculator project for Addition,Subtraction,Multiplication and division");
var prompt = require('prompt-sync')();
let n1 = parseInt(prompt('Enter your first number? '));
let operator = prompt('Enter your second operator (+,-,*,/) ');
let n2 = parseInt(prompt('Enter your second number? '));
if (operator == '+') {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
else if (operator == '-') {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 - n2}`);
}
else if (operator == '*') {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 * n2}`);
}
else if (operator == '/') {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 / n2}`);
}
else {
    console.log("Please select the correct operator");
}
