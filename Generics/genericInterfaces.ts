/**
 * generic interface
 *  - describe methods
 *  - describe index types
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-interfaces/
 */
interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'george',
    value: 1,
};

console.log(month); // { key: 'george', value: 1 }


// Generic interfaces that describe methods
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T> {

    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }

    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();

for (let i=0; i<10; i++) {
    list.add(i);
}

console.log(list); // List { items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }


// Generic interfaces that describe index types
interface Optional<T> {
    [name: string]: T
}

let inputOptions: Optional<boolean> = {
    'disabled': false,
    'visible': true
};

console.log(inputOptions); // { disabled: false, visible: true }

