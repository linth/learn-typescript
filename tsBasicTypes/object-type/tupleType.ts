/**
 * Tuple Type
 *  - A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions
 * 
 * Reference:
 *  - https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 */

// 基本使用
{
    type pair = [string, number];

    function doSomething(pair: [string, number]) {
        const a = pair[0];
        console.log(a); // hello
    
        const b = pair[1];
        console.log(b); // 42
    }

    doSomething(['hello', 42]);
}


// 