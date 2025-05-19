
namespace AppProjectThingTopics {

  interface IProject {
    id: string;
    name: string;
    appId: string;
  }

  abstract class Project implements IProject {
    constructor(
      public id: string, 
      public name: string, 
      public appId: string
    ) {}
  }

  class Project1 extends Project {
    constructor(id: string, name: string, appId: string) {
      console.log('call project1 constructor');      
      super(id, name, appId);
    }
  }

  class Project2 extends Project {
    constructor(id: string, name: string, appId: string) {
      console.log('call project2 constructor'); 
      super(id, name, appId);
    }
  }

  const p1 = new Project1('1', 'project 1', '1');
  const p2 = new Project2('2', 'project 2', '1');

  console.log(p1.id, p1.name, p1.appId);
  console.log(p2.id, p2.name, p2.appId);
}

