/**
 * Type Manipulation
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-type-manipulation/
 */


{
    interface IdLabel {
      id: number; /** some fields. */
    }
      
    interface NameLabel {
      name: string; /** other fields. */
    }

    type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
      throw 'unimplemented';
    }

    // TODO: check the concepts.
    // let a = createLabel('typescript'); // a is NameLabel
    // let b = createLabel(2.8); // b is IdLabel
    // let c = createLabel(Math.random() ? 'Hello' : 42); // c is NameLabel | IdLabel
    // let d = createLabel(['foo']); // Type 'string[]' is not assignable to type 'string' 
}