/**
 * interaction types
 *  - An intersection type combines two or more types to create a new type that has all properties of the existing types.
 *  - The type order is not important when you combine types.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/
 */

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'george chen',
    email: 'george@gmail.com',
    phone: '(xxx) xxx-xxxx',
}

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(xxx)-xxx-573xxxx5'
};


// Type Order:
// When you intersect types, the order of the types doesn’t matter.
// In this example, typeAB and typeBA have the same properties.
interface typeA { }
interface typeB { }

type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
