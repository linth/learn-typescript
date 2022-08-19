/**
 * interface class & function type.
 * 
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/
 */

interface Json {
    toJson(): string
}

class Dog implements Json {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    toJson(): string {
        return `the name of dog is ${this._name}`;
    }
}


let dog = new Dog('Long');
console.log(dog); // Dog { _name: 'Long' }
console.log(dog.toJson()); // the name of dog is Long


