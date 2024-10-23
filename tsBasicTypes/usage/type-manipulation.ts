/**
 * Type Manipulation (type操作)
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-type-manipulation/
 */

import { round } from "lodash";


{
  interface IdLabel {
    id: number; /** some fields. */
  }
    
  interface NameLabel {
    name: string; /** other fields. */
  }

  // 這是一個條件類型。如果 T 是 number 類型，則返回 IdLabel，否則返回 NameLabel。
  type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

  // 這個函數使用泛型 T，它被限制為 number 或 string 類型。返回類型使用了條件類型 NameOrId<T>。
  function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {    
    // throw 'unimplemented';
    if (typeof idOrName === 'number') {
      return { id: idOrName } as NameOrId<T>;
    } else {
      return { name: idOrName } as NameOrId<T>;
    }
  }

  // TODO: check the concepts.
  let a = createLabel('typescript'); // a is NameLabel
  let b = createLabel(2.8); // b is IdLabel

  /**
   * 如果 Math.random() 返回一個非零值（在 JavaScript 中被視為 true），它會返回 'Hello'。
   * 如果 Math.random() 返回 0（在 JavaScript 中被視為 false），它會返回 42。
   */
  let c = createLabel(Math.random() ? 'Hello' : 42); // c is NameLabel | IdLabel
  
  /**
   * 範例中, 無定義 array類型, 所以會有錯誤!! (下個範例額外增加補充)
   */
  // let d = createLabel(['foo']); // Type 'string[]' is not assignable to type 'string' 

  console.log(a); // { name: 'typescript' }
  console.log(b); // { id: 2.8 }
  console.log(c); // { name: 'Hello' }
}


{
  // 修改新增 type string[] 有支援 array.

  // define 2 interfaces: number, string.
  interface IdLabel { 
    id: number; 
  }

  interface NameLabel { 
    name: string; 
  }

  // define a new type: NameOrId, 如果 T 是 number 類型，則返回 IdLabel，否則返回 NameLabel。
  type NameOrId<T extends number | string | string[]> = T extends number ? IdLabel : NameLabel;

  function createLabel<T extends number | string | string[]>(idOrName: T): NameOrId<T> {
    if (typeof idOrName === "number") {
      return { id: idOrName } as NameOrId<T>;
    } else if (Array.isArray(idOrName)) {
      return { name: idOrName.join(', ') } as NameOrId<T>;
    } else {
      return { name: idOrName } as NameOrId<T>;
    }
  }

  let d = createLabel(['foo', 'qoo', 'roo']); // 現在這行可以工作了，d 的類型是 NameLabel
  console.log(d); // { name: 'foo, qoo, roo' }
}