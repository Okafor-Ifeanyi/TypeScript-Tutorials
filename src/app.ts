// Classes
class Invoice {    
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format (): number {
        // return `${this.client} owes ${this.amount} for ${this.details}`
        return 3
    }
}

const invOne = new Invoice("mario", "Mothly Salary", 250)
const invTwo = new Invoice("luigi", "Mothly Salary", 400)

// Creating a array of type invoice which was created above
let invoices : Invoice[] = []

// this array only accepts invoice
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

invOne.client = "yoshi"
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

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    )
})