/**
 * Generic Classes.
 *  - split
 *  - generic class `<>`
 * 
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/
 */

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
        
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.isFull() === true) {
            throw new Error('the stack is overflow.');
        }
        this.elements.push(element);
    }

    pop(): T[] {
        if (this.isEmpty() === true) {
            throw new Error('the stack is empty.');
        }
        this.elements.pop();
        return this.elements;
    }
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}


let s = new Stack<number>(5);

while (!s.isFull()) {
    let n = randBetween(1, 10);
    console.log(`push ${n} into the stack.`);
    s.push(n);
}

/** Result example:
push 3 into the stack.
push 3 into the stack.
push 4 into the stack.
push 7 into the stack.
push 5 into the stack.
 */


// 
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');
console.log(words); // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog]

let wordStack = new Stack<string>(words.length);
// push words into the stack.
words.forEach( w => {
    wordStack.push(w);
});

while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}

/** Result:
[ 'The', 'quick', 'brown', 'fox', 'jumps', 'over' ]
[ 'The', 'quick', 'brown', 'fox', 'jumps' ]
[ 'The', 'quick', 'brown', 'fox' ]
[ 'The', 'quick', 'brown' ]
[ 'The', 'quick' ]
[ 'The' ]
[]
 */