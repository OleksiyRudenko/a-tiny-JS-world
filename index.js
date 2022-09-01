/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
class Inhabitant {
  constructor(species, name, gender, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.saying = saying;
  }

  displayData() {
    return ["species", "name", "gender", "saying"]
      .map((data) => this[data])
      .join("; ");
  }
}

class Person extends Inhabitant {
  constructor(species, name, gender, saying, hands, legs) {
    super(species, name, gender, saying);
    this.hands = hands;
    this.legs = legs;
  }

  displayData() {
    return `${super.displayData()}; ${this.hands}; ${this.legs};`;
  }
}

class Animal extends Inhabitant {
  constructor(species, name, gender, saying, paws, tail) {
    super(species, name, gender, saying);
    this.paws = paws;
    this.tail = tail;
  }

  displayData() {
    return `${super.displayData()}; ${this.paws}; ${this.tail};`;
  }
}

class Man extends Person {}
class Woman extends Person {}
class Dog extends Animal {}
class Cat extends Animal {}

const man = new Man("Man", "Dimitrij", "male", "Nice to meet you!", 2, 2);
const woman = new Woman("Woman", "Kate", "male", "Have a good day!", 2, 2);
const dog = new Dog("Dog", "Molly", "female", "WOOF-WOOF!", 4, 1);
const cat = new Cat("Cat", "Whiskey", "female", "Meow!", 4, 1);

// ======== OUTPUT ========
const allInhabitants = [man, woman, dog, cat];

allInhabitants.map((inhabitan) => {
  print(inhabitan.displayData());
});
