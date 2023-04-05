/**
 * Rest Parameters
 *  - use the rest parameters to handle an infinite number of arguments of a function.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/
 *  - https://www.tutorialsteacher.com/typescript/rest-parameters
 */


{
    function getTotal(...number: number[]): number {
        let total = 0;
        number.forEach( (item) => total += item);
        return total;
    }
    
    console.log(getTotal()); // 0
    console.log(getTotal(10, 20)); // 30
    console.log(getTotal(10, 20, 30)); // 60



    function getAListName(...name: string[]) {
        return name;
    }

    console.log(getAListName('george', 'may', 'peter')); // [ 'george', 'may', 'peter' ]
}







