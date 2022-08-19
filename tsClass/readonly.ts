/**
 * readonly 
 *  - Use the readonly access modifier to mark a class property as immutable.
 *  - A readonly property must be initialized as a part of the declaration or in the constructor of the same class.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/
 */

class Student {
    // TODO: need to check.
    public birthday: Date; // happen 'SyntaxError: Unexpected identifier'

    constructor(birthday: Date) {
        this.birthday = birthday;
    }
}


let s = new Student(new Date(2020, 1, 1));
console.log(s.birthday);
