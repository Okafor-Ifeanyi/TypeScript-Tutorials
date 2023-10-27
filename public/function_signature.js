"use strict";
// example 1
let greeted;
greeted = (name, greeting) => {
    console.log(`${name} is ${greeting}`);
};
// example 2 - Takes in a function to return a num 
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
