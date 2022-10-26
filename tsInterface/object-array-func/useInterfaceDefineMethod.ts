/**
 * use interface to define a method.
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-interface/
 */

// basic concept
{
    interface Bird {
        fly(): void;
    }

    interface GreetFunc {
        (person: {name: string; age: number}): void;
    }
}

// 當一個函式最終不一定有回傳值時，預設會是回傳 undefined
{
    interface Foo {
        (a: number): number;
    }

    const foo: Foo = (a) => {
        if (a > 5) {
            return 3;
        }
        throw new Error('a is not over 5.');
    }

    console.log('foo', foo(10)); // foo 3
    // console.log(foo(1)); // Error: a is not over 5.
        
}


// 解構賦值 (Destructuring assignment): 是一種 JavaScript 運算式，可以把陣列或物件中的資料解開擷取成為獨立變數
{
    let a, b, rest;

    [a, b] = [10, 20];
    console.log(a); // 10
    console.log(b); // 20
    
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(rest); // [30, 40, 50]
}

{
    let c, d, e;
    [c, d] = [20, 90];
    [c, d, ...e] = [20, 90, 11, 22, 33, 44];
    console.log(e); // [ 11, 22, 33, 44 ]

    [c, d, e] = [20, 90, 11, 22, 33, 44];
    console.log(e); // 11
}