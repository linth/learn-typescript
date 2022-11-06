/**
 * Basic generic
 *  - 請注意滿重要的寫法
 *  - Generics（泛型）很重要的一點，就是讓我們寫的方法可以適用在不同的型別，而非只能使用在單一型別。
 * 
 * 
 * 1. common generic writing (5種)
 * 2. 帶有限制的泛型 Type Parameter with Constraints
 * 3. 帶有預設值的泛型 Generic parameter defaults
 * 
 * 
 * Reference
 *  - https://pjchender.dev/typescript/ts-generics/
 *  - https://www.typescriptlang.org/docs/handbook/2/generics.html
 */


// common generic writing (5種)
{
    // use type.
    type Dict<T> = {
        value: T;
    };

    // use interface.
    interface WrappedValue<T> {
        value: T;
    }

    // use class.
    class ConcreteClass<T> {
        concreteValue: T | undefined;
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


// 帶有預設值的泛型 Generic parameter defaults
{
    // 沒有給 T 的話，T 預設的型別會是 string
    interface WrappedValue<T = string> {
        value: T;
    }

    // 但如果只是定義預設值的話，使用者可以任意更改該型別，例如：
    const val: WrappedValue<number> = {
        value: 30,
    };
}

// TODO: do more examples.
// https://pjchender.dev/typescript/ts-generics/#%E5%B8%B6%E6%9C%89%E9%A0%90%E8%A8%AD%E5%80%BC%E7%9A%84%E6%B3%9B%E5%9E%8B-generic-parameter-defaults