/**
 * Array & Tuple Type
 *  - Tuple 則是有固定長度和元素型別的陣列，且可以改變 tuple 內的數值。
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-basic-types/#array-and-tuple
 *  - https://pjchender.dev/typescript/ts-basic-types/#tuple
 */

{
    // 寫法不同，但意思相同。
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];
}

// readonly & ReadonlyArray
{
    // 寫法不同，但意思相同。都不能修改 array 裡的元素
    let list: readonly number[] = [1, 2, 3];
    let list2: ReadonlyArray<number> = [1, 2, 3];

    console.log('list', list);
    console.log('list2', list2);

    // 無法被修改
    // list[0] = 111;
    // console.log('list', list);
}

// Tuple: 則是有固定長度和元素型別的陣列
{
    let tuple: [number, string, boolean, number] = [3, 'foo', true, 10];
    console.log('before tupe', tuple);
    
    // ! 可以改變 tuple 內的數值
    tuple = [4, 'bar', false, 30];
    console.log('after tupe', tuple);
}


// readonly tuple
{
    // TODO: 確認 `as const` 使用
    const phoneBrand = ['apple', 'samsung', 'xiaomi', 'sony'] as const;
    console.log('phoneBrand', phoneBrand);

    // readonly tuple
    // const phoneBrand2: readonly ["apple", "samsung", "xiaomi", "sony"];
    // console.log('phoneBrand', phoneBrand2);
}

