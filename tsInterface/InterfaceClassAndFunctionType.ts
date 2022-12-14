/**
 * interface class & function type.
 *  - TypeScript interfaces define contracts in your code and provide explicit names for type checking.
 *  - Interfaces may have optional properties or readonly properties.
 *  - Interfaces can be used as function types.
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

    // old style writing.
    // toJson(): string {
    //     return `the name of dog is ${this._name}`;
    // }

    // another way to write.
    toJson(): string {
        return JSON.stringify(this);
    }
}


let dog = new Dog('Long');
console.log(dog); // Dog { _name: 'Long' }

// old style.
// console.log(dog.toJson()); // the name of dog is Long

// another way.
console.log(dog.toJson()); // {"_name":"Long"}
console.log(typeof(dog.toJson())); // string



