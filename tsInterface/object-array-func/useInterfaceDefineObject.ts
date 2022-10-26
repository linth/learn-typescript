/**
 * use interface to define the object.
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-interface/
 */

// basic concept.
{
    // use a Person interface to define an object.
    interface Person {
        name: string;
        age: number;
    }

    // use a interface to define an array.
    interface StringArray {
        [index: number]: string;
    }

    interface Dictionary {
        [propName: string]: any;
    }
}


