/**
 * three access modifiers:
 *  - private 
 *  - public
 *  - protected
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
 */

class Aminal {
    private ssn;
    public firstName;
    protected lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getSsn() {
        return this.ssn;
    }

    getFullInfo(): string {
        return `${this.ssn}, ${this.firstName}, ${this.lastName}`;
    }
}


let a = new Aminal('153-07-3130', 'John', 'Doe');
console.log(a); // compile error