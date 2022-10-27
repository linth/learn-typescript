/**
 * Basic generic
 *  - 請注意滿重要的寫法
 *  - Generics（泛型）很重要的一點，就是讓我們寫的方法可以適用在不同的型別，而非只能使用在單一型別。
 * 
 * Reference
 *  - https://pjchender.dev/typescript/ts-generics/
 *  - https://www.typescriptlang.org/docs/handbook/2/generics.html
 */


{
    // use type.
    type Dict<T> = {
        value: T;
    };

    // use interface.
    interface WrappedValue<T> {
        value: T;
    }

    // arrow function.
    const arrow_fun = <T>(x: T): T => x;

    // function.
    function fun<T>(x: T): T {
        return x;
    }
}

// 帶有限制的泛型 Type Parameter with Constraints
{
    interface WrappedValue<T extends string> {
        value: T;
    }

    // T 滿足 string type.
    const val: WrappedValue<'Aaron' | 'PJ'> = {
        value: 'Aaron',
    };

    // T 不滿足 string 會有錯誤
    // const val2: WrappedValue<number> = {
    //     value: 30,
    // };

    // 因為沒有給 T 預設值，所以不能留空
    // Generic type 'WrappedValue<T>' requires 1 type argument(s).
    // const val3: WrappedValue = {
    //     value: 30,
    // };
}


// examples.
{
    // TODO: add real-world examples.
}