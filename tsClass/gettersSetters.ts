/**
 * getter & setter example.
 *  - get 
 *  - set
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
 */

class Teacher {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    // constructor(age: number, firstName: string, lastName: string) {
    //     this._age = age;
    //     this._firstName = firstName;
    //     this._lastName = lastName;
    // }

    public get age() {
        return this._age;
    }

    public set age(inputAge: number) {
        if (inputAge > 130 || inputAge <= 0) {
            throw new Error(`the age is invalid.`);
        }
        this._age = inputAge;
    }
}


let t = new Teacher();
t.age = 30;
console.log(t.age);
