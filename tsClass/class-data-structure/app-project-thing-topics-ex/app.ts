/**
 * application
 * 
 */

namespace AppProjectThingTopics {

  export interface IApp {
    id: string;
    name: string;
  }

  abstract class App implements IApp {
    constructor(public id: string, public name: string) {}
  }

  class SaaS extends App {
    constructor(id: string, name: string) {
      super(id, name);
    }
  }

  const s = new SaaS('1', 'web service');
  console.log(s.id);
  console.log(s.name);  
}