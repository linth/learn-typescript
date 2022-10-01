/**
 * Pure Type
 *  - intersection
 *  - unions
 * 
 * 
 * Reference:
 *  - https://blog.logrocket.com/types-vs-interfaces-in-typescript/
 */

// intersection
type Name = {
    name: 'string'
};


type Age = {
    age: number;
}

type PersonHuman = Name & Age; 


// unions - using type.
type Man = {
    name: 'string'
}

type Woman = {
    name: 'string'
}

type PersonSexType = Man | Woman;


// unions - using interface and type.
// NeedToKnow: 兩者之間的差異是什麼?
interface ManInterface {
    name: 'string'
};

interface WomanInterface {
    name: 'string'
};

type PersonSexInterface = ManInterface | WomanInterface;

