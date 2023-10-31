// import {} from "../src/interfaces"
import { hasFormatter } from "./interfaces/formats"

// Classes
export class Invoice implements hasFormatter {    
   
    constructor( 
        readonly client: string,
        private details: string,
        public amount: number ) {
    }

    format (): string {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

