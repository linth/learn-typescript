/**
 * Interface vs. Type
 * 
 * Reference:
 *  - https://blog.logrocket.com/types-vs-interfaces-in-typescript/
 *  - https://ithelp.ithome.com.tw/articles/10224646?sc=rss.iron
 */

// TODO: add more examples for interface and type.
// base
{
    // interface
    interface Point {
        x: number;
        y: number;
    }

    // type
    type PointType = {
        x: number;
        y: number;
    }

    // use interface denotes the function. (使用 interface 表示函式)
    interface SetPoint {
        (x: number, y: number): void;
    }

    // use type denotes the function. (使用 type 表示函式)
    type SetPointType = (x: number, y: number) => void;
}


// type vs. interface
{
    interface PersonInfo {
        name: string;
        age: number;
    }

    type PersonInfoType = {
        name: string;
        age: number;
        [x: string]: any
    }

    const Una: PersonInfo = {
        name: "Una",
        age: 23,
        // age: "33",  // 對應型別錯誤
        // gender: girl // 多出屬性
    }

    const Peter: PersonInfoType = {
        name: "peter",
        age: 11,
        x: 'hello world',
    }
}

