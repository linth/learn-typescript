import { JsonParser } from "./excelClassDesign/JsonParser";



// use class to implement the user case.
const result = new JsonParser('./OExcel/example/example.json')
  .getFullData();
console.log(result);