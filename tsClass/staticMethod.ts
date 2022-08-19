/**
 * static method & properties.
 *  - static function
 *  - static properties
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/
 */

class Staff {
    static headcount: number = 0;

    private _firstName: string;
    private _lastName: string;
    private _jobTitle: string;

    constructor(private firstName: string, private lastName: string, private jobTitle: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._jobTitle = jobTitle;

        Staff.headcount++;
    }

    public static getHeadcount(): number {
        return Staff.headcount;
    }
}

let john = new Staff('John', 'Doe', 'Front-end Developer');
let jane = new Staff('Jane', 'Doe', 'Back-end Developer');

console.log(Staff.headcount); // 2
console.log(Staff.getHeadcount()); // 2

