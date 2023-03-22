/**
 * interface class
 *  - optional properties
 *  - readonly properties
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/
 */

// 使用 object 當作引數帶入 function..

{
    function getFullName(person: {
        firstName: string;
        lastName: string
    }) {
        return `${person.firstName} ${person.lastName}`;
    }
    
    let p = {
        firstName: 'John',
        lastName: 'Chen'
    }
    
    console.log(getFullName(p));
    
    
    interface Person {
        readonly firstName: string;
        middleName?: string; // optional properties.
        lastName: string;
        age: number;
    }
    
    function getPersonAllInfo(per: Person) {
        if (per.middleName) {
            return `${per.firstName}, ${per.middleName}, ${per.lastName}`;
        }
        return `${per.firstName}, ${per.lastName}`;
    }
    
    let p2: Person = {
        firstName: 'Peter',
        middleName: 'QQ',
        lastName: 'Chen',
        age: 33,
    }
    console.log(getPersonAllInfo(p2));
    // TODO: 目前測試似乎可以修改值，這樣會有漏洞。
    // p2.firstName = 88;
    console.log(p2);
}




