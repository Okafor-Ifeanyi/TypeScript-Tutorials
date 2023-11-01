import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "Dev per hour", 344);
docTwo = new Payment("Iyk", "design work", 5000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice("mario", "Mothly Salary", 250);
const invTwo = new Invoice("luigi", "Mothly Salary", 400);
// Creating a array of type invoice which was created above
let invoices = [];
// this array only accepts invoice
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.amount, inv.client, inv.format());
});
// invOne.client = "yoshi"
// invOne.details = "mothly Salary"
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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, parseInt(amount.value));
    }
    else {
        doc = new Payment(tofrom.value, details.value, parseInt(amount.value));
    }
    console.log(doc);
});
