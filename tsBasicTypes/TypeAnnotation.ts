/**
 * Type Annotation (斷言)
 *  - learn how to use type annotation to define the static type for variables, function parameters, and return values.
 *  - Type assertion is like type casting in other languages, but in TypeScript it is only a compile time feature.
 * 
 * 
 * Reference:
 *  - https://www.logicbig.com/tutorials/misc/typescript/type-assertions.html
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
 */

{
    // Angle-bracket syntax
    let x: any = "hi there";
    let s = (<string>x).substring(0, 3);
    console.log(s); // hi

    let s2 = (x as string).substring(0, 4);
    console.log(s2); // hi t

    // NeedToKnow: 似乎無法使用斷言方式來將 x2 強行轉成 number
    let x2: unknown = '11'
    let s3 = (x2 as number);
    console.log(s3, typeof s3); // 11 string    
}


{
    let counter: number;
    counter = 1;
    // counter = 'hello world.'; // complie error.

    let firstName: string;
    let age: number;
    let active: boolean = true;

    // array
    let arrayName: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

    // objects
    let person: {
        name: string;
        age: number;
    };

    person = {
        name: 'John',
        age: 25
    };

    // function arguments & return types
    let greeting: (name: string) => string;

    greeting = function(name: string) {
        return `Hi ${name}`;
    };

}

