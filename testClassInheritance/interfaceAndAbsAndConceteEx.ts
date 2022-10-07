/**
 * class inheritance
 *  - interface class
 *  - abstract class
 *  - concrete class
 * 
 * 
 * interface: 定義 functions.
 * abstract class: 定義 variables, constructor, 以及部份的 function 實作.
 * concrete class: variables, constructor, function 實作
 * 
 */


// interface class.
export interface IBase {
    // 定義 functions.
    add(): number;
}


// abstract class. 
export abstract class AbsClass implements IBase {
    // TODO: please find the meaning for the symbol of !.
    // 定義 variables, constructor, 以及部份的 function 實作.
    height!: number;
    weight!: number;

    constructor(h: number, w: number) {
        this.height = h;
        this.weight = w;
    }

    add(): number {
        return this.height + this.weight;
    }
}


// concrete class: first one class.
export class classOne extends AbsClass {

    // variables, constructor, function 實作
    constructor(h: number, w: number) {
        super(h, w);
    }
}


// concrete class: second one class.
export class classTwo extends AbsClass {
    name: string;

    // variables, constructor, function 實作
    constructor(h: number, w: number, n: string) {
        super(h, w);
        this.name = n;
    }
}


// main function.
const main = () => {
    const o = new classOne(190, 80);
    console.log('height', o.height, 'weight', o.weight, 'add',  o.add());

    const s = new classTwo(178, 67, 'George');
    console.log('height', s.height, 'weight', s.weight, 'name', s.name, 'add', s.add());
}


/** result:
 * height 190 weight 80 add 270
 * height 178 weight 67 name George add 245
 */
 main();
