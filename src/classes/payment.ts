// import {} from "../src/interfaces"
import { hasFormatter } from "../interfaces/formats"

// Classes
export class Payment implements hasFormatter {    
   
    constructor( 
        readonly recipient: string,
        private details: string,
        public amount: number ) {
    }

    format (): string {
        return `${this.recipient} owes ${this.amount} for ${this.details}`
    }
}

