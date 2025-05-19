

// / <reference path="thing.ts" />
// / <reference path="topics.ts" />

namespace AppProjectThingTopics {
  
  const topics: Itopics = new Topics({'hot': [100, 90, 80], 'cold': [0, 20, 11]}, {}, {});
  const t = new Thing('1', 'thing1', '1', '1', topics);
  console.log(t.name);
  console.log(t.appId);

}
