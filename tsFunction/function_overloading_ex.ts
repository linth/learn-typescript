/**
 * Function overloading in Typescript.
 *  - 也可以在class上使用
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


{
  /**
   * using class example to demo function overloading.
   */
  class Counter {
    private current: number = 0;

    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
      if (target === undefined) {
        return this.current++;
      }
      return Array.from({ length: target }, (_, i) => i+1); // 若有參數，返回 1 ~ target 的數列
    }
  }

  let c = new Counter();
  console.log(c.count());
  console.log(c.count(5));
  console.log(c.count());
  console.log(c.count(3));
}
