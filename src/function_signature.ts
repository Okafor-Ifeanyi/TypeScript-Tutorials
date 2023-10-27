// example 1
let greeted: (a: string, b: string) => void;

greeted = (name: string, greeting: string) => {
    console.log(`${name} is ${greeting}`)
}

// example 2 - Takes in a function to return a num 
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add"){
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

// example 3 
type person = {name: string, age: number}

let logDetail : ({} : person) => void;

logDetail = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}