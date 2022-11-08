/**
 * 使用 type, interface 判斷資料類型
 * 
 * Reference:
 *  - https://kawayilinlin.github.io/typescript-lodash/document/1.number.html#numberlike-%E5%BD%A2%E5%A6%82%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B
 */

// 使用 type 判斷資料類型
{
    type Box<Type> = {
        contents: Type;
    };

    type orNull<Type> = Type | null;

    type oneOrMany<Type> = Type | Type[];

    type oneOrManyOrNull<Type> = orNull<oneOrMany<Type>>;
    
    type oneOrManyOrNullString = oneOrManyOrNull<string>;
}




// TODO: do more examples.