/**
 * 使用 interface 來判斷型別
 * 
 * Reference:
 *  - https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 *  - https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types
 */

// 基本使用方式 - 多個 interfaces 對應不同 types
{
    interface NumberBox {
        contents: number;
    }
    
    interface StringBox {
        contents: string;
    }
    
    interface BooleanBox {
        contents: boolean;
    }

    // 根據不同的類型 box，提供不同輸入方式。
    function setContents(box: StringBox, newContents: string): void;
    function setContents(box: NumberBox, newContents: number): void;
    function setContents(box: BooleanBox, newContents: boolean): void;

    /**
     * ! results:
     * 1. 大量 function 重複寫，非常難以維護。
     */

    // 解法1: 使用 any 方式處理
    function setContents(box: { contents: any }, newContents: any) {
        box.contents = newContents;
    }

    // 解法2: 使用 generic 
    interface Box<Type> {
        contents: Type;
    }

    let box: Box<string>;
    let box2: Box<number>;
    let box3: Box<boolean>;
}


// 基本使用方式 - 繼承方式
{
    interface Box<T> {
        contents: T;
    }

    interface BoxExtend2<T, U> extends Box<T> {
        // 可以不包含之前的 interface 資訊，但最後變數要全部都要有。
        message: U;
    }

    let be: BoxExtend2<string, string>;
    let be2: BoxExtend2<string, number>;
    let be3: BoxExtend2<number, number>;

    be = {
        contents: 'this is a contents.',
        message: 'this is a message.'
    };
    console.log(be); // { contents: 'this is a contents.', message: 'this is a message.' }

    be2 = {
        contents: 'this is a contents.',
        message: 134143
    };
    console.log(be2); // { contents: 'this is a contents.', message: 134143 }

    be3 = {
        contents: 51351,
        message: 134143
    };
    console.log(be3); // { contents: 51351, message: 134143 }   
}

// TODO: do more examples.

// 使用 interface 判斷資料類型
{
    interface Box<Type> {
        contents: Type;
    }

    interface Human<T, U> {
        name: T;
        id: U;
        weight: U;
        height: U;
    }

    let a: Box<number> = {
        contents: 222,
    }
    console.log('a', a); // a { contents: 222 }

    let h: Human<string, number> = {
        name: 'geore',
        id: 1,
        weight: 180,
        height: 66
    }
    console.log('h', h); // h { name: 'geore', id: 1, weight: 180, height: 66 }
}