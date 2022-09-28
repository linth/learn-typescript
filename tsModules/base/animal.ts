/**
 * Animal
 *  - type Cat
 *  - interface Dog
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10280543
 */


export type Cat = {
    breed: string;
    yearOfBirth: number;
}

export interface Dog {
    breads: string[];
    yearOfBirth: number;
}

