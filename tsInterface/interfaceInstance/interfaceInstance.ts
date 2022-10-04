/**
 * interface & instance
 * 
 * Reference:
 *  - https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
 */

/**
 * You can achieve what you want without the instanceof keyword as you can write custom type guards now:
 */

interface A {
    member: string;
}

// NeedToKnow: what's `object is A` ?
function instanceOfA(object: any): object is A {
    return 'member' in object;
}


var aaa: any = {member: 'foobar'};

if (instanceOfA(aaa)) {
    console.log(aaa.member);
}

