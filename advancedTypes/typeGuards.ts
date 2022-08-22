/**
 * Type Guards
 *  - typeof operator
 *  - instanceof operator
 *  - in operator
 * 
 *  - Type guards narrow down the type of a variable within a conditional block.
 *  - Use the typeof and instanceof operators to implement type guards in the conditional blocks
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/
 */

// typeof example.
type alphaNumeric = string | number;

function add(a: alphaNumeric, b: alphaNumeric) {

    if (typeof a === 'number' && typeof b === 'number') {
        return a+b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either number or string.');
}


console.log(add(1, 2)); // 3
console.log(add('A', 'b')); // Ab


// instanceof example.
class CustomerAtOring {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartnerOring = CustomerAtOring | Supplier;

function signContract(partner: BusinessPartnerOring): string {
    let message: string;   

    if ('isCreditAllowed' in partner) {
        console.log('yes, isCreditAllowed in partner.');
    } else {
        console.log('no, isCreditAllowed not in partner.');
    }

    if (partner instanceof CustomerAtOring) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with customer for oring' : 'Credit issue';
        console.log('message (customer)', message);
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract with supplier' : 'Need to evaluate further';
        console.log('message (supplier)', message);
        
    }
    return message; // TODO: has a error. Need to check.
}


// User-defined Type Guards
// 
function isCustomerAtOring(partner: any): partner is CustomerAtOring {
    return partner instanceof CustomerAtOring;
}
