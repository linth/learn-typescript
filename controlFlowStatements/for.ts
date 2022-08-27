/**
 * for-loop
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-for/
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}


// TypeScript for example: optional block
for (let i=0; ; i++) {
    console.log('i', i);

    if (i>9) break;
}


let i = 0;
for (;;) {
    console.log(i);
    i++;
    if (i>9) break;
}



