function Sweet(sweetName, weight, madeIn) {
  this.sweetName = sweetName;
  this.weight = weight;
  this.madeIn = madeIn;
}

function GlazedCandys(sweetName, weight, madeIn, glazeType) {
  Sweet.call(this, sweetName, weight, madeIn);

  this.glazeType = glazeType;
}

GlazedCandys.prototype = new Sweet();

function Marmelade(sweetName, weight, madeIn, syrupTaste) {
  Sweet.call(this, sweetName, weight, madeIn);

  this.syrupTaste = syrupTaste;
}

Marmelade.prototype = new Sweet();

function Chocolate(sweetName, weight, madeIn, chocolateType, hasFilling) {
  Sweet.call(this, sweetName, weight, madeIn);

  this.chocolateType = chocolateType;
  this.hasFilling = hasFilling;
}

Chocolate.prototype = new Sweet();

const krokant = new GlazedCandys('Крокант', 10, 'Russia', 'dark glaze');
const chioRio = new GlazedCandys('Чио Рио', 20, 'Russia', 'dark glaze');
const glaze = new GlazedCandys('Глэйс', 15, 'Russia', 'dark glaze');
const cobardeElChocolate = new GlazedCandys('COBARDE el Chocolate', 15, 'Russia', 'white glaze');

const fruitStory = new Marmelade('Fruit Story', 20, 'Russia', 'lemon and pineapple');
const hariboStarMix = new Marmelade('Haribo Star Mix', 20, 'USA', 'multifruit');
const jelly = new Marmelade('Jelly', 20, 'Russia', 'multifruit');

const milka = new Chocolate('milka', 100, 'Russia', 'milkChocolate', false);
const ritterSportExtraNut = new Chocolate('Ritter Sport Extra Nut', 100, 'Germany', 'milkChocolate', false);

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
