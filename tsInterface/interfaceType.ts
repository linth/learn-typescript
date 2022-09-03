/**
 * interface type.
 * 
 * 
 * 
 * Reference:
 *  - https://willh.gitbook.io/typescript-tutorial/basics/type-of-object-interfaces
 */

interface People {
    name: string;
    age?: number; // 有時我們希望不要完全匹配一個形狀，那麼可以用可選屬性 (?)
}

let g: People = {
    name: 'George'
}

let g2: People = {
    name: 'George',
    age: 22,
}



console.log(g); // { name: 'George' }
console.log(g2); // { name: 'George', age: 22 }



// * interface 不允許新增未定義的屬性
let g3: People = {
    name: 'George',
    age: 27,
    // gender: 'male' // 會報錯
}


// * interface 一個介面允許有任意的屬性
interface People2 {
    name: string;
    age?: number;
    [propName: string]: any;
    kk: any;
    // propName2: any;
}

let g4: People2 = {
    name: 'George',
    age: 30,
    gender: 'male',
    kk: 'hello world',
}

console.log(g4); // { name: 'George', age: 30, gender: 'male', kk: 'hello world' }


// * interface 物件中的一些欄位只能在建立的時候被賦值，那麼可以用 readonly 定義唯讀屬性
interface People3 {
    readonly id: number;
    name: string;
    age?: number;
}

let g5: People3 = {
    id: 111111,
    name: 'Tom',
} 

console.log(g5); // { id: 111111, name: 'Tom' }
