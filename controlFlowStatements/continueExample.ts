/**
 * continue
 * 
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-continue/
 */

for (let index=0; index<5; index++) {

    if (index % 2) {
        continue;
    }
    console.log(index);    
}

/** Results:
0
2
4
 */


let index = -1;

while (index < 9) {
    index++;

    if (index % 2) {
        continue;
    }
    console.log(index);
    
}


/** Results:
0
2
4
6
8
 */