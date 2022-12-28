/**
 * decorator
 *  - Class Decorator
 *  - Method Decorator
 *  - Property Decorator
 *  - Parameter Decorator
 * 
 * Reference:
 *  - https://oldmo860617.medium.com/%E5%8D%81%E5%88%86%E9%90%98%E5%B8%B6%E4%BD%A0%E4%BA%86%E8%A7%A3-typescript-decorator-48c2ae9e246d
 */

function outer() {
  console.log('outer: expression');
  // return outer_res;
  return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log("Outer: result");
    };
}


function inner() {
  console.log('inner: expression');
  // return inner_res;
  return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log("Inner: result");
    };
}


const outer_res = function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('outer: result');    
}

const inner_res = function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('innter: result');
}

