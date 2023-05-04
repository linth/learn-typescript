import * as fs from 'fs';

interface JsonData {
  data: unknown;
  [key: string]: unknown;
}

export class JsonParser {
  /** parse json file. */

  // the path of json file.
  private readonly pathOfFile: string;
  private readonly jsonString: string;
  // path_of_file: string = './OExcel/example/example.json';
  // jsonString: string = '';

  // constructor(pof: string) {
  //   this.path_of_file = pof;
  //   this.jsonString = fs.readFileSync(this.path_of_file, 'utf-8');
  //   return this;
  // }
  constructor(pathOfFile: string) {
    this.pathOfFile = pathOfFile;
    this.jsonString = fs.readFileSync(this.pathOfFile, 'utf-8');
  }

  // getGenericJsonFullData() {
  //   // parse json file and get all information for data.
  //   try {
  //     return JSON.parse(this.jsonString);
  //   } catch (err) {
  //     console.error(err);      
  //   }
  // }
  
  private getGenericJsonFullData(): JsonData | null {
    try {
      return JSON.parse(this.jsonString);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getFullData() {
    return this.getGenericJsonFullData();
  }

  // getJsonData() {
  //   // parse json file and get the data from the attribute.
  //   return this.getGenericJsonFullData().data;
  // }
  
  getData(): unknown {
    const data = this.getGenericJsonFullData()?.data;

    if (!data) {
      throw new Error('Failed to parse JSON data.');
    }
    return data;
  }

  // getJsonAttribe(attribute: string) {
  //   // parse json file and get the data by using custom attribute.
  //   return this.getGenericJsonFullData().attribute;
  // }

  getAttribute(attribute: string): unknown {
    const jsonData = this.getGenericJsonFullData();
    const value = jsonData ? jsonData[attribute] : null;

    if (!value) {
      throw new Error(`Failed to get JSON attribute: ${attribute}`);
    }
    return value;
  }
}


