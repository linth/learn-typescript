/**
 * Generic function
 *  - usibg `object`
 *  - using `extends`
 *  - using `extends keyof`
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/
 */

function merge2<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person = merge2(
    {name: 'george'}, 
    {age: 25}
);

let person2 = merge2(
    {name: 'george'}, 
    33
);

console.log('person', person); // person { name: 'george', age: 25 }
console.log('person2', person2); // person2 { name: 'george' }


// imporve the generic function at first.
function merge3<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person3 = merge3(
    {name: 'george'}, 
    33 // error
);

console.log('person3', person3); // Argument of type 'number' is not assignable to parameter of type 'object'.



// Using type parameters in generic constraints. 
// 請注意寫法
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({name: 'george'}, 'name');
console.log(str); // george


