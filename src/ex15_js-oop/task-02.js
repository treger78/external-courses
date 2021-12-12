class ElectricalDevice {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched) {
    this.deviceName = deviceName;
    this.manufacturer = manufacturer;
    this.powerConsumption = powerConsumption;
    this.isSwitched = isSwitched;
  }

  turnOn() {
    this.isSwitched = true;
  }

  turnOff() {
    this.isSwitched = false;
  }

  getPowerConsumption() {
    if (this.isSwitched) return this.powerConsumption;
    return 0;
  }
}

class PersonalComputer extends ElectricalDevice {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, processorModel,
    numberOfCores) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.processorModel = processorModel;
    this.numberOfCores = numberOfCores;
  }
}

class Laptop extends PersonalComputer {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, hasTouchpad, hasNumpad,
    screenSize) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.hasTouchpad = hasTouchpad;
    this.hasNumpad = hasNumpad;
    this.screenSize = screenSize;
  }
}

class Desktop extends PersonalComputer {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, hasNetworkReciever) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.hasNetworkReciever = hasNetworkReciever;
  }
}

class Microwave extends ElectricalDevice {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, volume, isSmart) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.volume = volume;
    this.isSmart = isSmart;
  }
}

class Room {
  constructor(roomName, devicesInRoom) {
    this.roomName = roomName;
    this.devicesInRoom = devicesInRoom;
  }

  addDevice(deviceName) {
    this.devicesInRoom.push(deviceName);
  }
}

class Flat {
  constructor(flatName, ...rooms) {
    this.flatName = flatName;
    this.rooms = rooms;
  }

  searchDeviceByName(deviceName) {
    for (let i = 0; i < this.rooms.length; i += 1) {
      for (let j = 0; j < this.rooms[i].devicesInRoom.length; j += 1) {
        if (this.rooms[i].devicesInRoom[j].deviceName === deviceName) {
          return this.rooms[i].devicesInRoom[j];
        }
      }
    }

    return 'Not found!';
  }
}

const hp400G5 = new Laptop('hp400G5', 'HP', 50, true, true, true, 15.6);
const asusS300MA = new Desktop('asusS300MA', 'Asus', 150, false, true);
const candyCPMW2070S = new Microwave('candyCPMW2070S', 'Candy', 500, false, 20, false);

const devices = [hp400G5, asusS300MA, candyCPMW2070S];

function calculatePowerConsumption(_devices) {
  let powerConsumption = 0;

  for (let i = 0; i < _devices.length; i += 1) {
    powerConsumption += _devices[i].getPowerConsumption();
  }

  return powerConsumption;
}

devices[devices.length - 1].turnOn();

calculatePowerConsumption(devices);

const livingRoom = new Room('livingRoom', []);
const bedRoom = new Room('bedRoom', []);
const kitchen = new Room('kitchen', []);

bedRoom.addDevice(hp400G5);
livingRoom.addDevice(asusS300MA);
kitchen.addDevice(candyCPMW2070S);

const flat = new Flat('flat', livingRoom, bedRoom, kitchen);

flat.searchDeviceByName('asusS300MA');
