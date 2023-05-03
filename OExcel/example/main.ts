import { JsonParser } from "./excelClassDesign/JsonParser";



// use class to implement the user case.
const result = new JsonParser('./OExcel/example/example.json')
  .getJsonFullData();
console.log(result);