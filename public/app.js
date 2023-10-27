"use strict";
// Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // return `${this.client} owes ${this.amount} for ${this.details}`
        return 3;
    }
}
const invOne = new Invoice("mario", "Mothly Salary", 250);
const invTwo = new Invoice("luigi", "Mothly Salary", 400);
// Creating a array of type invoice which was created above
let invoices = [];
// this array only accepts invoice
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = "yoshi";
invTwo.amount = 3000;
// console.log(invOne, invTwo)
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
