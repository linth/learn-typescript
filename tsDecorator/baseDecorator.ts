/**
 * decorator
 * 
 * Reference:
 *  - https://oldmo860617.medium.com/%E5%8D%81%E5%88%86%E9%90%98%E5%B8%B6%E4%BD%A0%E4%BA%86%E8%A7%A3-typescript-decorator-48c2ae9e246d
 */
function decorator1(target: any) {
    console.log('this is decorator1');
    console.log(target);    
}

function decorator2(target: any) {
    console.log('this is decorator2');    
}


@decorator1
@decorator2
class Blog {    
    constructor() {

    }
}


const blog = new Blog();
console.log(blog);
