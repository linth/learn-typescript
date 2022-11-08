/**
 * Array & interface 判斷型別
 *  - Array Type
 *  - ReadonlyArray Type
 * 
 * Reference:
 *  - https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
 *  - https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
 */


/**
 * Generic object types are often some sort of container type that work independently of the type of elements they contain. 
 * It’s ideal for data structures to work this way so that they’re re-usable across different data types.
 * It turns out we’ve been working with a type just like that throughout this handbook: the Array type. 
 * Whenever we write out types like number[] or string[], that’s really just a shorthand for Array<number> and Array<string>
 */
// Array Type
{
    // using interface for array.
    interface Array<Type> {

        /** Gets or sets the length of the array. */
        length: number;
    
        /** Removes the last element from an array and returns it. */
        pop(): Type | undefined;
    
        /** Appends new elements to an array, and returns the new length of the array. */
        push(...items: Type[]): number;

        // ...
    }

    // using type for array.
    type ArrayType<Type> = {

        /** Gets or sets the length of the array. */
        length: number;
    
        /** Removes the last element from an array and returns it. */
        pop(): Type | undefined;
    
        /** Appends new elements to an array, and returns the new length of the array. */
        push(...items: Type[]): number;
    }

    const a: ArrayType<number> = [1, 2, 3, 4, 5];
    console.log(a.length); // 5

    console.log(a.pop()); // 5 
    console.log(a); // [ 1, 2, 3, 4 ]

    console.log(a.push(6, 7, 8)); // 7
    console.log(a); // [ 1, 2, 3, 4, 6, 7, 8 ]
}


// ReadonlyArray
{
    function doStuff(values: ReadonlyArray<string>) {
        // We can read from 'values'...
        const copy = values.slice();
        console.log(`The first value is ${values[0]}`);
    
        //! The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
        // ...but we can't mutate 'values'.
        // values.push("hello!");
    }

    // 
    // const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

    function doArray(values: ReadonlyArray<string>) {
        const c = values.slice();
        console.log(`the first of value is '${c[0]}'`); // the first of value is 'hi'
        
        // values.push('end'); // Property 'push' does not exist on type 'readonly string[]'.
        console.log(values); // [ 'hi', 'hello', 'world' ]        
    }
    doArray(['hi', 'hello', 'world']);
}

// destructure tuples using JavaScript’s array destructuring
{
    function doSomething(stringHash: [string, number]) {
        const [inputString, hash] = stringHash;

        console.log(inputString); // hello world
        console.log(hash); // 2022
        console.log(stringHash); // [ 'hello world', 2022 ]
        console.log(stringHash[0], stringHash[1]); // hello world 2022        
    }
    doSomething(['hello world', 2022]);
}

{
    type a = {
        nameArray: Array<string | number>;
    }

    function getArgument(i: Array<string | number>) {
        console.log(i);
    }

    let i1 = [1, 2, 3];
    let i2 = ['11', 'fpiefpi', 'hh'];
    let i3 = [1, 2, 3, 'good', 'body'];

    getArgument(i1); // [1, 2, 3]
    getArgument(i2); // [ '11', 'fpiefpi', 'hh' ]
    getArgument(i3); // [ 1, 2, 3, 'good', 'body' ]
}
