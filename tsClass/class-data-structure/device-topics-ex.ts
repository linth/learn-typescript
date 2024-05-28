/**
 * class data attribute.
 *  - 在class內, 放一些不同的資料結構
 * 
 */

{
  
  interface Topics {
    alertList: Record<string, number[]>;
    sohList: Record<string, number[]>; // state of health.
    socList: Record<string, number[]>; // state of charge list.
  }

  class Device {
    id: string;
    name: string;
    status: boolean;
    reportingInterval: number;
    communicationTimeout: number;
    disconnectionTimeout: number;
    topics: Topics;
    metadata: Map<string, any>;
    sensorData: Array<number>;
  

    constructor(
      id: string,
      name: string,
      status: boolean, // 狀態: 開啟 or 關閉, 應該要調整？
      reportingInterval: number,
      communicationTimeout: number,
      disconnectionTimeout: number,
      topics: Topics
    ) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.reportingInterval = reportingInterval;
      this.communicationTimeout = communicationTimeout;
      this.disconnectionTimeout = disconnectionTimeout;
      this.topics = topics;
      this.metadata = new Map<string, any>();
      this.sensorData = [];
    }

    addAlert(key: string, value: number): void {
      if (!this.topics.alertList[key]) {
        this.topics.alertList[key] = []; // 檢查是否有存在key值, 初始化避免因為key值不存在而產生錯誤
      }
      this.topics.alertList[key].push(value);
    }

    addSoh(key: string, value: number): void {
      if (!this.topics.sohList[key]) {
        this.topics.sohList[key] = [];
      }
      this.topics.sohList[key].push(value);
    }

    addSoc(key: string, value: number): void {
      if (!this.topics.socList[key]) {
        this.topics.socList[key] = [];
      }
      this.topics.socList[key].push(value);
    }

    updateMetadata(key: string, value: any): void {
      this.metadata.set(key, value);
    }

    addSensorData(value: number): void {
      this.sensorData.push(value);
    }

    showAllAlert(): void {
      for (const key in this.topics.alertList) {
        if (this.topics.alertList.hasOwnProperty(key)) {
          console.log(`${key}: ${this.topics.alertList[key].join(', ')}`);
        }
      }
    }
  }

  const topics: Topics = {
    alertList: {},
    socList: {},
    sohList: {}
  };

  const device = new Device(
    'device1', 
    'Temperature Sensor', 
    true, 
    5000, 
    10000, 
    15000, 
    topics
  );

  // Adding data
  device.addAlert('overheat', 80);
  device.addSoh('battery', 95);
  device.addSoc('charge', 85);
  device.updateMetadata('location', 'Warehouse 1');
  device.addSensorData(72);
  device.addSensorData(75);
  device.addAlert('overheat', 100);
  device.addAlert('too cold', -20);
  device.addAlert('too cold', 0);

  // Check the status
  console.log(`Device status: ${device.status ? 'Active' : 'Inactive'}`);
  console.log(device);

  // show all alerts.
  console.log(device.showAllAlert());
  console.log(device.metadata.get("location"));
  
}

