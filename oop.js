class Mammals {
  constructor(species, name, gender, legs, hands, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.legs = legs;
    this.hands = hands;
    this.saying = saying;
  }
  printInfo() {
    print([
      this.species,
      this.name,
      this.gender,
      this.legs,
      this.hands,
      this.saying,
    ]);
  }
}
const man = new Mammals('man', 'Bob', 'male', 2, 2, `Hi-i am a man`);
const woman = new Mammals('woman', 'Lara', 'female', 2, 2, `Hi-i am a woman`);
const dog = new Mammals('dog', 'Bobik', 'male', 4, 0, `Woof-woof`);
const cat = new Mammals('cat', 'Zarina', 'female', 4, 0, `Meow-Meow`);
const werewolf = new Mammals(
  'werewolf',
  'Dorian',
  'male',
  2,
  2,
  `Lingering howl...`
);
const enhabitants = [man, woman, dog, cat, werewolf];

enhabitants.forEach((el) => {
  el.printInfo();
});
