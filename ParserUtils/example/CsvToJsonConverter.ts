/**
 * csv to json converter.
 * 
 * TODO: need to be checked and code refactory.
 */
import * as fs from 'fs';
import * as csv from 'csv-parser';

export class CsvToJsonConverter {
  /** convert csv file to json. */

  // the path of csv file.
  path_of_file: string = './example.csv';
  jsonOutput: any[] = [];

  constructor(pof: string) {
    this.path_of_file = pof;
    return this;
  }

  async convertCsvToJson(): Promise<any[]> {
    // convert csv file to json.
    return new Promise((resolve, reject) => {
      fs.createReadStream(this.path_of_file)
        .pipe(csv())
        .on('data', (data) => {
          this.jsonOutput.push(data);
        })
        .on('end', () => {
          resolve(this.jsonOutput);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
