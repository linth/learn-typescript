

namespace AppProjectThingTopics {

  export interface Ithing {
    id: string;
    name: string;
    projectId: string;
    appId: string;
    topics: Itopics;
  }

  abstract class AbsThing implements Ithing {
    constructor(public id: string, public name: string, public projectId: string, public appId: string, public topics: Itopics) {}
  }

  export class Thing extends AbsThing {
    constructor(id: string, name: string, projectId: string, appId: string, topics: Itopics) {
      super(id, name, projectId, appId, topics);
    }
  }
  

  // const topics: Itopics = new AppProjectThingTopics.Topics({'hot': [100, 90, 80], 'cold': [0, 20, 11]}, {}, {});
  // const t = new Thing('1', 'thing1', '1', '1', topics);
  // console.log(t.name);
  // console.log(t.appId);
  
}


// / <reference path="thing.ts" />
// / <reference path="topics.ts" />

// namespace AppProjectThingTopics {

//   const topics: Itopics = new Topics({'hot': [100, 90, 80], 'cold': [0, 20, 11]}, {}, {});
//   const t = new Thing('1', 'thing1', '1', '1', topics);
//   console.log(t.name);
//   console.log(t.appId);
// }
