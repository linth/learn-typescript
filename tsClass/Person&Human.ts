/**
 * class demo.
 *  - function writing.
 *  - class writing.
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-class/
 */


/**
 * Person class 
 * 
 * @param ssn 
 * @param firstName 
 * @param lastName 
 */
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}


Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());


/**
 * Human class
 * 
 */
class Human {
    //TODO: why cannot use ssn: sring; please figure out the issue: SyntaxError: Unexpected identifier.
    ssn: string; 
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `ssn: ${this.ssn}, first name: ${this.firstName}, last name: ${this.lastName}`;
    }
}

let h = new Human('P0001', 'george', 'chen');
console.log(h.getFullName());

