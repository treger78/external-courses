function Sweet(sweetName, weight, madeIn, company, composition, energyValue,
  producedDate, expirationDate) {
  this.sweetName = sweetName;
  this.weight = weight;
  this.madeIn = madeIn;
  this.company = company;
  this.energyValue = energyValue;
  this.composition = composition;
  this.producedDate = producedDate;
  this.expirationDate = expirationDate;
}

function GlazedCandys(glazeType) {
  this.glazeType = glazeType;
}

GlazedCandys.prototype = new Sweet();

function Marmelade(syrupTaste) {
  this.syrupTaste = syrupTaste;
}

Marmelade.prototype = new Sweet();

function Chocolate(chocolateType, hasFilling, shape) {
  this.chocolateType = chocolateType;
  this.hasFilling = hasFilling;
  this.shape = shape;
}

Chocolate.prototype = new Sweet();

const date = new Date();

const krokant = new GlazedCandys('dark glaze');

krokant.sweetName = 'Крокант';
krokant.weight = 10;
krokant.madeIn = 'Russia';
krokant.company = 'KDV';
krokant.composition = ['glazed milk roasted nuts', 'nuts'];
krokant.energyValue = {
  proteins: 6,
  fats: 38,
  carbohydrates: 51,
  calories: 570,
};
krokant.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
krokant.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const chioRio = new GlazedCandys('dark glaze');

chioRio.sweetName = 'Чио Рио';
chioRio.weight = 20;
chioRio.madeIn = 'Russia';
chioRio.company = 'KDV';
chioRio.composition = ['glaze', 'praline', 'biscuit balls', 'caramel'];
chioRio.energyValue = {
  proteins: 3.5,
  fats: 30,
  carbohydrates: 58,
  calories: 520,
};
chioRio.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
chioRio.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const glaze = new GlazedCandys('dark glaze');

glaze.sweetName = 'Глэйс';
glaze.weight = 15;
glaze.madeIn = 'Russia';
glaze.company = 'KDV';
glaze.composition = ['glaze', 'cocoa powder', 'condensed milk'];
glaze.energyValue = {
  proteins: 2,
  fats: 12,
  carbohydrates: 73,
  calories: 410,
};
glaze.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
glaze.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const cobardeElChocolate = new GlazedCandys('white glaze');

cobardeElChocolate.sweetName = 'COBARDE el Chocolate';
cobardeElChocolate.weight = 15;
cobardeElChocolate.madeIn = 'Russia';
cobardeElChocolate.company = 'В.А.Ш. ШОКОЛАТЬЕ+';
cobardeElChocolate.composition = ['glaze', 'cereals', 'milk', 'sugar'];
cobardeElChocolate.energyValue = {
  proteins: 3.9,
  fats: 14.6,
  carbohydrates: 69.7,
  calories: 409,
};
cobardeElChocolate.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
cobardeElChocolate.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const fruitStory = new Marmelade('lemon and pineapple');

fruitStory.sweetName = 'Fruit Story';
fruitStory.weight = 20;
fruitStory.madeIn = 'Russia';
fruitStory.company = 'KDV';
fruitStory.composition = ['lemon jam', 'pineapple jam'];
fruitStory.energyValue = {
  proteins: 0.1,
  fats: 9.5,
  carbohydrates: 85,
  calories: 430,
};
fruitStory.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
fruitStory.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const hariboStarMix = new Marmelade('multifruit');

hariboStarMix.sweetName = 'Haribo Star Mix';
hariboStarMix.weight = 20;
hariboStarMix.madeIn = 'USA';
hariboStarMix.company = 'Haribo';
hariboStarMix.composition = ['fruits jam'];
hariboStarMix.energyValue = {
  proteins: 6.9,
  fats: 0.5,
  carbohydrates: 77,
  calories: 343,
};
hariboStarMix.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
hariboStarMix.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const jelly = new Marmelade('multifruit');

jelly.sweetName = 'Jelly';
jelly.weight = 20;
jelly.madeIn = 'Russia';
jelly.company = 'Roshen';
jelly.composition = ['fruits jam'];
jelly.energyValue = {
  proteins: 0,
  fats: 0,
  carbohydrates: 80.8,
  calories: 332,
};
jelly.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
jelly.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const milka = new Chocolate('milkChocolate', false, 'rectangle');

milka.sweetName = 'milka';
milka.weight = 100;
milka.madeIn = 'Russia';
milka.company = 'Milka';
milka.composition = ['milk chocolate', 'nuts'];
milka.energyValue = {
  proteins: 5.9,
  fats: 30,
  carbohydrates: 59,
  calories: 574,
};
milka.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
milka.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

const ritterSportExtraNut = new Chocolate('milkChocolate', false, 'square');

ritterSportExtraNut.sweetName = 'Ritter Sport Extra Nut';
ritterSportExtraNut.weight = 100;
ritterSportExtraNut.madeIn = 'Germany';
ritterSportExtraNut.company = 'Ritter Sport';
ritterSportExtraNut.composition = ['milk chocolate', 'nuts'];
milka.energyValue = {
  proteins: 9.7,
  fats: 37,
  carbohydrates: 45,
  calories: 560,
};
ritterSportExtraNut.producedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
ritterSportExtraNut.expirationDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear() + 1}`;

function NewYearPresent(presentName) {
  this.presentName = presentName;
  this.sweets = [];

  this.getTotalWeight = function getTotalWeight() {
    let totalWeight = 0;

    for (let i = 0; i < this.sweets.length; i += 1) {
      totalWeight += this.sweets[i].weight;
    }

    return totalWeight;
  };

  this.addSweet = function addSweet(sweetName, pieces) {
    for (let i = 0; i < pieces; i += 1) {
      this.sweets.push(sweetName);
    }
  };

  this.getGiftComposition = function getGiftComposition() {
    return this.sweets;
  };

  this.sortSweetsByName = function sortSweetsByName() {
    this.sweets.sort((a, b) => {
      if (a.sweetName > b.sweetName) return 1;

      if (a.sweetName < b.sweetName) return -1;

      return 0;
    });
  };

  this.searchSweetByName = function searchSweetByName(name) {
    for (let i = 0; i < this.sweets.length; i += 1) {
      if (this.sweets[i].sweetName === name) return this.sweets[i];
    }

    return 'Not found!';
  };
}

const veryChocolatePresent = new NewYearPresent('veryChocolatePresent');

veryChocolatePresent.addSweet(krokant, 5);
veryChocolatePresent.addSweet(chioRio, 5);
veryChocolatePresent.addSweet(glaze, 10);
veryChocolatePresent.addSweet(cobardeElChocolate, 5);
veryChocolatePresent.addSweet(milka, 1);

const veryMarmeladePresent = new NewYearPresent('veryMarmeladePresent');

veryMarmeladePresent.addSweet(fruitStory, 10);
veryMarmeladePresent.addSweet(hariboStarMix, 20);
veryMarmeladePresent.addSweet(jelly, 10);
veryMarmeladePresent.addSweet(ritterSportExtraNut, 2);
