/**
 * Function overloading in Typescript.
 * 
 * 
 */

{
    // 宣告 add
    function add(a: string, b: string): string;
    function add(a: number, b: number): number;
    // 實作 add
    function add(a: any, b: any): any {
        return a + b;
    }

    console.log(add(1, 2)); // Output: 3
    console.log(add("Hello ", "world")); // Output: Hello world
}

