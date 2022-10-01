/**
 * pure interface 
 *  - 可以使使用相同的 interface name.
 * 
 * 好處:
 *  - 可以隔離開自行定義的 property or function。
 * TODO: 何時該使用此方法?
 * 
 * 壞處:
 *  - 命名相同並改動增加後，會連帶影響原本的功能。
 * 
 * 
 * Reference:
 *  - https://blog.logrocket.com/types-vs-interfaces-in-typescript/
 */

interface Song {
    artisName: string;
}

interface Song {
    songName: string;
}


// ! 兩個 Song 都要有資料
const song: Song = {
    artisName: 'freddie',
    songName: 'the chain'
};

let newSong: Song = {
    artisName: 'ss',
    songName: 'bb'
}


// test function in interface? 
// test function with type in abstract class?

interface AA {
    nameA: string;
}

interface BB {
    nameB: string;
}


// NeedToKnow: cannot two interfaces in variable? but it's ok for class.
// 不能使用多重判斷?
// let AB: AA, BB = {
//     nameA: 'aa',
//     nameBC: 'bb'
// };

let aa: AA | BB = {
    nameA: 'aa',
}
console.log(aa); // { nameA: 'aa' }

let bb: AA | BB = {
    nameB: 'bb',
}
console.log(bb); // { nameB: 'bb' }

let cc: AA | BB = {
    nameA: 'aa',
    nameB: 'bb'
}
console.log(cc); // { nameA: 'aa', nameB: 'bb' }


// NeedToKnow: 定義 class 內的變數，需要初始化 constructor ?
class CC implements AA, BB {
    nameB: string;
    nameA: string;

    constructor(a: string, b: string) {
        this.nameA = a;
        this.nameB = b;
    }
}

interface DD extends AA, BB {
    nameB: string;
    nameA: string;
}

// 需初始化
class EE implements DD {
    nameB: string = '';
    nameA: string = '';
}