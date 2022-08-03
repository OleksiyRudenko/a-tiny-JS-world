class Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.legs = legs;
    this.hands = hands;
    this.saying = saying;
  }

  getProperties() {
    return `${this.species}; ${this.name}; ${this.gender}; ${this.legs}; ${this.hands}; ${this.saying};`;
  }
}

class Dog extends Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    super(species, name, gender, legs, hands, saying);
  }
}

class Cat extends Inhabitant{
  constructor(species, name, gender, legs, hands) {
    super(species, name, gender, legs, hands, 'Mur-mur');
  }
}

class Catwoman extends Cat {
  constructor(species, name, gender, legs, hands, saying) {
    super(species, name, gender, legs, hands, species);
  }
}

class Man extends Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    super(species, name, gender, legs, hands, saying);
  }
}

class Woman extends Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    super(species, name, gender, legs, hands, saying);
  }
}

class CatWoman extends Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    super(species, name, gender, legs, hands, saying);
  }
}

const dog = new Dog("dog", "Dick","male", 4, 0, "woof-woof!");
const cat = new Cat("cat", "Kitty","female", 5, 0);
const catwoman = new Catwoman("catwoman", "Nazar","female", 2, 2);
const woman = new Woman("woman", "Dazdraperma","female", 3, 1, "It used to be better");
const man = new Man("man", "Mike","male", 2, 2, "Hello World!");

const inhabitants = [dog, cat, catwoman, woman, man];

inhabitants.forEach((inhabitant) => print(inhabitant.getProperties()));
