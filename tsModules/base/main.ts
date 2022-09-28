/**
 * execute tsModule example.
 */
import helloWorld from "./exportDefaultEx";
import { absolute, h, phi, PI } from "./exportEx";

helloWorld(); // hello world!

console.log(PI); // 3.14
const absPhi: number = absolute(phi)
console.log(absPhi); // 1,61

console.log(h); // 180

