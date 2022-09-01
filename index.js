/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
class Person {
  constructor(species, legs, hands, name, gender, saying) {
    this.species = species;
    this.legs = legs;
    this.hands = hands;
    this.name = name;
    this.gender = gender;
    this.saying = saying;
  }
}
class Animal {
  constructor(species, legs, hands, name, gender, saying) {
    this.species = species;
    this.legs = legs;
    this.hands = hands;
    this.name = name;
    this.gender = gender;
    this.saying = saying;
  }
}

const man = new Person("human", 2, 2, "Dimitrij", "male", "Nice to meet you!");
const woman = new Person("human", 2, 2, "Kate", "male", "Have a good day!");
const dog = new Animal("dog", 4, 0, "Molly", "female", "WOOF-WOOF!");
const cat = new Animal("cat", 4, 0, "Whiskey", "female", "Meow!");

// ======== OUTPUT ========
const allInhabitants = [man, woman, dog, cat];
const keys = ["species", "legs", "hands", "name", "gender", "saying"];

allInhabitants.map((inhabitan) => {
  print(keys.map((key) => inhabitan[key]).join("; "));
});
