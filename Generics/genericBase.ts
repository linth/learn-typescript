/**
 * Generic Base
 *  - using `any`
 *  - using `<T>`
 *  - using `<U, T>`
 * 
 *  - Use TypeScript generics to develop reusable, generalized, and type-safe functions, interfaces, and classes.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
 */

function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));


let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));


// using `any`
function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers2 = [1, 5, 7, 4, 2, 9];
let colors2 = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers2));
console.log(getRandomAnyElement(colors2));


// using `generic`
function getRandomGenericElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers3 = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomGenericElement<number>(numbers3); 
let randomEle2 = getRandomGenericElement<string>(colors2);

console.log('get element from numbers3: ', randomEle);
console.log('get element from color2: ', randomEle2);

// let returnElem3: string;
// returnElem3 = getRandomNumberElement(numbers);  // compiler error


// generic functions with multiple types.
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result, typeof(result));
