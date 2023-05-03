import * as fs from 'fs';

class JsonParser {
  /** parse json file. */

  // the path of json file.
  path_of_file: string = '';
  jsonString: string = '';

  constructor(pof: string) {
    this.path_of_file = pof;
    this.jsonString = fs.readFileSync(this.path_of_file, 'utf-8');
  }

  getJsonFullData() {
    // parse json file and get all information for data.
    try {
      return JSON.parse(this.jsonString);
    } catch (err) {
      console.error(err);      
    }
  }

  getJsonData() {
    // parse json file and get the data from the attribute.
    try {
      return JSON.parse(this.jsonString).data;
    } catch (err) {
      console.error(err);      
    }    
  }

  getJsonAttribe(attribute: string) {
    // parse json file and get the data by using custom attribute.
    try {
      return JSON.parse(this.jsonString).attribute;
    } catch (err) {
      console.error(err);      
    }
  }
}


