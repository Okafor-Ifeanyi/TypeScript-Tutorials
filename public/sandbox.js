"use strict";
let greet;
greet = () => {
    console.log("Hello World");
};
// using a func with an optional parameter c
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
// func tkaes three var with an optional parameter that has a default
const subtract = (a, b, c = 10) => {
    console.log(a - b);
    console.log(c);
};
add(3, 4);
subtract(3, 5, "this is me");
// func: the return here is auto infered to be number
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
