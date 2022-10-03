/** 
 * declare concepts:
 *  - 聲明文件 `xxx.d.ts`
 * 
 *  - declare var
 *  - declare function
 *  - declare class
 *  - declare enum
 *  - declare namespace (推薦使用 ES6 module)
 *  - declare global 擴展全域變數
 *  - declare module 擴展全域模組
 * 
 * 
 * Reference:
 *  - https://ts.xcatliu.com/basics/declaration-files.html
 *  - https://ts.xcatliu.com/basics/declaration-files.html#declare-function
 *  - https://ts.xcatliu.com/basics/declaration-files.html#declare-class
*/


// 聲明全域變數
declare var globalCustomVar: any;

// 聲明全域函式
declare function gloablCustomFunction(): any;

// 聲明全域類別
declare class AnimalDeclare {
    name: string;     
    constructor(name: string);

    // 只能定義類型，不能定義具體實現的功能。
    sayHi(): string;
}

// 聲明全域列舉
declare enum DirectionsCustom {
    Up,
    Down,
    Left,
    Right
}

// 聲明全域 namespace (被淘汰，但在聲明文件中，還是比較常被使用)
declare namespace jQuery {
    function ajax(url: string, setting?: any): void;
}

