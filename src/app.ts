import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { hasFormatter } from './interfaces/formats.js'

let docOne: hasFormatter;
let docTwo: hasFormatter;

docOne = new Invoice("yoshi", "Dev per hour", 344);
docTwo = new Payment("Iyk", "design work", 5000);

let docs: hasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const invOne = new Invoice("mario", "Mothly Salary", 250)
const invTwo = new Invoice("luigi", "Mothly Salary", 400)

// Creating a array of type invoice which was created above
let invoices : Invoice[] = []

// this array only accepts invoice
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.amount, inv.client, inv.format())
})


// invOne.client = "yoshi"
// invOne.details = "mothly Salary"
invTwo.amount = 3000

// console.log(invOne, invTwo)

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement
const details = document.querySelector("#details") as HTMLSelectElement
const amount = document.querySelector("#amount") as HTMLSelectElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: hasFormatter;
    if (type.value === "invoice"){
        doc = new Invoice(tofrom.value, details.value, parseInt(amount.value))
    } else {
        doc = new Payment(tofrom.value, details.value, parseInt(amount.value))
    }

    console.log(doc);
})