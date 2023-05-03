/**
 * get json file to read data.
 * 
 * Reference:
 *  - https://marketsplash.com/tutorials/typescript/how-to-read-json-file-in-typescript/
 */
import * as fs from 'fs';

const path_of_excel_file = 'path_of_excel_file';

try {
  const jsonString = fs.readFileSync(path_of_excel_file, 'utf-8');
  const jsonData = JSON.parse(jsonString);

  // data, message
  console.log(jsonData.data);  

  // TODO: get all keys or all values from data.
  // Do something with the parsed data
} catch (err) {
  console.error(err);
}