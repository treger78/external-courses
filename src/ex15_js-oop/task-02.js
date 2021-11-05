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
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, OS, processorModel,
    numberOfCores, RAMVolume, GPUModel, GPUVolume, HDDVolume, SSDVolume) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.OS = OS;
    this.processorModel = processorModel;
    this.numberOfCores = numberOfCores;
    this.RAMVolume = RAMVolume;
    this.GPUModel = GPUModel;
    this.GPUVolume = GPUVolume;
    this.HDDVolume = HDDVolume;
    this.SSDVolume = SSDVolume;
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

class Washer extends ElectricalDevice {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, isSmart,
    loadingVolume, loadingType, hasDelayStart, maxSpinSpeed, noiseLevel) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.isSmart = isSmart;
    this.loadingVolume = loadingVolume;
    this.loadingType = loadingType;
    this.hasDelayStart = hasDelayStart;
    this.maxSpinSpeed = maxSpinSpeed;
    this.noiseLevel = noiseLevel;
  }
}

class Fridge extends ElectricalDevice {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, isSmart, fridgeVolume,
    freezerVolume) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.isSmart = isSmart;
    this.fridgeVolume = fridgeVolume;
    this.freezerVolume = freezerVolume;
  }
}

class Printer extends ElectricalDevice {
  constructor(deviceName, manufacturer, powerConsumption, isSwitched, isSmart, printerType,
    canScan, canCopy) {
    super(deviceName, manufacturer, powerConsumption, isSwitched);

    this.isSmart = isSmart;
    this.printerType = printerType;
    this.canScan = canScan;
    this.canCopy = canCopy;
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
const hpPavilionGaming = new Laptop('hpPavilionGaming', 'HP', 60, false, true, true);

const asusS300MA = new Desktop('asusS300MA', 'Asus', 150, false, true);

const candyCPMW2070S = new Microwave('candyCPMW2070S', 'Candy', 500, false, 20, false);

const zanussiFCS825C = new Washer('zanussiFCS825C', 'Zanussi', 1400, false, false, 3, 'frontal', true, 800, 60);
const candySmartCS4 = new Washer('candySmartCS4', 'Candy', 1200, true, true, 5, 'frontal', true, 1000, 65);

const indesitDS4160S = new Fridge('indesitDS4160S', 'Indesit', 188, true, false, 182, 87);

const hpInkTank419 = new Printer('hpInkTank419', 'HP', 10, false, true, 'inkjet CISS printer', true, true);
const hpInkTank319 = new Printer('hpInkTank319', 'HP', 10, false, false, 'inkjet CISS printer', true, true);

const devices = [hp400G5, hpPavilionGaming, asusS300MA, candyCPMW2070S, zanussiFCS825C,
  candySmartCS4, indesitDS4160S, hpInkTank419, hpInkTank319];

function calculatePowerConsumption(_devices) {
  let powerConsumption = 0;

  for (let i = 0; i < _devices.length; i += 1) {
    powerConsumption += _devices[i].getPowerConsumption();
  }

  return powerConsumption;
}

console.log(calculatePowerConsumption(devices));

devices[devices.length - 1].turnOn();

console.log(calculatePowerConsumption(devices));

devices[devices.length - 1].turnOff();

console.log(calculatePowerConsumption(devices));

const livingRoom = new Room('livingRoom', []);
const bedRoom = new Room('bedRoom', []);
const kitchen = new Room('kitchen', []);
const bathRoom = new Room('bathRoom', []);

bedRoom.addDevice(hp400G5);
bedRoom.addDevice(hpPavilionGaming);
bedRoom.addDevice(hpInkTank319);

livingRoom.addDevice(asusS300MA);
livingRoom.addDevice(hpInkTank419);

kitchen.addDevice(candyCPMW2070S);
kitchen.addDevice(candySmartCS4);
kitchen.addDevice(indesitDS4160S);

bathRoom.addDevice(zanussiFCS825C);

const flatNumber1 = new Flat('flatNumber1', livingRoom, bedRoom, kitchen, bathRoom);

console.log(flatNumber1.searchDeviceByName('hpInkTank419'));
