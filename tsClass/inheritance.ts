/**
 * class inheritance
 *  - extends
 *  - super
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-inheritance/
 */

class Employee extends Human {
    constructor(ssn: string, 
                firstName: string, 
                lastName: string,
                private jobTitle: string) {

        // call the constructor of the Human class.
        super(ssn, firstName, lastName);
    }

    public describe(): string {
        console.log(`the job title is ${this.jobTitle}, name is ${this.firstName} ${this.lastName}`);        
    }
}


let employee = new Employee('P0001', 'John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());