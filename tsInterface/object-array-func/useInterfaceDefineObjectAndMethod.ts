/**
 * use interface to define object or method.
 *  - Hybrid：一個物件同時可以當作物件也可以當作函式
 * 
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-interface/
 */

// basic concept
{
    interface Shape {
        color: string;
    }
    
    
    interface Square extends Shape {
        (width: number): string;
        width: number;
        
        area(): void;
    }

    // TODO: do more examples. (Hybrid)
    // https://pjchender.dev/typescript/ts-interface/
}

