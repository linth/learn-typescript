namespace AppProjectThingTopics {
  
  export interface Itopics {
    alertList: Record<string, number[]>;
    sohList: Record<string, number[]>;
    socList: Record<string, number[]>;
  }

  abstract class AbsTopics implements Itopics {
    constructor(public alertList: Record<string, number[]>, public sohList: Record<string, number[]>, public socList: Record<string, number[]>) {}
  }

  export class Topics extends AbsTopics {
    constructor(alertList: Record<string, number[]>, sohList: Record<string, number[]>, socList: Record<string, number[]>) {
      super(alertList, sohList, socList);
    }
  }

  const topics: Itopics = new Topics({'hot': [100, 90, 80], 'cold': [0, 20, 11]}, {}, {});
  console.log(topics.alertList);
}