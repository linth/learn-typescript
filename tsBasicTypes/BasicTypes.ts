/**
 * 基礎類型 basic type.
 *  - boolean
 *  - number
 *  - stting
 *  - array
 *  - tuple
 *  - enum
 *  - void
 *  - object
 *  - null & undefined
 *  - any & unknow
 *  - never
 * 
 * 
 * Top Types：指的是可以接受所有值的型別，包含 any 和 unknown。
 * Bottom Types：指的是不能接受任何值的型別，即 never。
 * 
 * 
 * Reference:
 *  - https://www.logicbig.com/tutorials/misc/typescript/basic-types.html
 *  - https://juejin.cn/post/6844904037922373639
 */

// boolean
{
    let active: boolean = false;
    let enabled: boolean = true;
}


// number
{
    let x: number = 5;
    let y: number = 1.5;
    let z: number = Math.PI;
}

// string
{
    let message: string = "hello";
    let x: number = 5;
    let fullMessage: String  = `message number: ${x},  ${message}`; 
    console.log(fullMessage); // message number: 5,  hello 
}


// array: Either [] or <> is used.
{
    let evens: Array<number> = [2, 4, 6];
    let odds: number[] = [1,3,5];

    console.log('evens', evens, '; odds', odds); // evens [ 2, 4, 6 ] ; odds [ 1, 3, 5 ]
}

// tuple: Array of different types
{
    let myData: [string, number] = ["hi", 5];

    myData.forEach((value, index) => {
        console.log(`val: ${value}, index: ${index} type: ${typeof value}`);         
    });

    /**
     * results:
     * 
     * val: hi, index: 0 type: string
     * val: 5, index: 1 type: number
     */
}


// enum: Enumerated constants
{
    enum Food {
        Pasta, Rice
    };
    console.log(Food.Pasta); // 0
    console.log(Food.Rice); // 1

    console.log(Food[1]); // Rice

    let x: Food = Food.Rice;
    console.log(x); // 1
}

{
    // Manual numbering:
    enum Food {Pasta=3, Rice=5};  
    console.log(Food.Pasta); // 3
    console.log(Food.Rice); // 5
}

{
    // This is also possible:
    enum Food {Pasta='one', Rice='two'};
    console.log(Food.Pasta); // one
    console.log(Food.Rice); // two
}


// any: assignable to any type
{
    let x : any = "a string";
    console.log(typeof x) // string

    x = 2;
    console.log(typeof x) // number

    x = true;
    console.log(typeof x) // boolean
}


// void: return type of a function which returns nothing
{
    function showSquare(x: number): void{
        console.log(x*x);
    }
    
    showSquare(6); // 36
}


// Object: type of an object instance
{
    class Shape{
        draw() {
            console.log("drawing shape");
        }
    }

    let shapeInstance: Shape = new Shape();
    shapeInstance.draw(); // drawing shape
}


// null: type of null literal
{
    let x: null = null;
    // other types can be assigned to null
    // NeedToKnow: could y = null ???
    // let y: string = null;
    // console.log(x, y);
    
    /**
     * Results:
     *  error: Type 'null' is not assignable to type 'string'.
     */
}


// undefined: type of undefined literal
{
    let x: undefined = undefined;
    //other types can be assigned to undefined
    // NeedToKnow: could y = undefined ??
    // let y: string = undefined;
    // console.log(x, y);

    /**
     * Results:
     *  error: Cannot find name 'defined'. Did you mean 'undefined'?
     */
}


// never: return type of a function that never returns
// NeedToKnow: what's work for?
{
    function doSomething(message: string): never {
        throw new Error(message);
    }

    console.log(doSomething('hello world.'));    
}
