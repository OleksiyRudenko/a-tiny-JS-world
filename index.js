class Inhabitant {
   constructor(species, name, gender, legs, hands, saying, friends) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.legs = legs;
      this.hands = hands;
      this.saying = saying;
      this.friends = friends;
   }
}

class Human extends Inhabitant {
   constructor(name, gender, saying, friends) {
      super('human', name, gender, 2, 2, saying, friends);
   }
}

class Man extends Human {
   constructor(name, saying, friends) {
      super(name, 'male', saying, friends);
   }
}

class Woman extends Human {
   constructor(name, saying, friends) {
      super(name, 'female', saying, friends);
   }
}

class Animal extends Inhabitant {
   constructor(species, name, gender, saying, friends) {
      super(species, name, gender, 4, 0, saying, friends);
   }
}

class Dog extends Animal {
   constructor( name, gender, saying, friends) {
      super('dog', name, gender, saying, friends);
   }
}

class Cat extends Animal {
   constructor( name, gender, saying, friends) {
      super('cat', name, gender, saying, friends);
   }
}

class CatWoman extends Inhabitant {
   constructor(name, friends) {
      super('human', name, 'female', 2, 2, 'mur-mur', friends);
   }
}

const man = new Man('Petro', 'Zdorov!', ['woman', 'dog']),
      woman = new Woman('Katia', 'Pryvit)', ['man']),
      dog = new Dog('Nika', 'female', 'gav-gav', ['man']),
      cat = new Cat('Musia', 'female', 'mur-mur', ['woman', 'catWoman']),
      catWoman = new CatWoman('Murka', ['cat']);


[man, woman, dog, cat, catWoman]
   .forEach(inhabitant => {
      print([inhabitant.species, inhabitant.name, inhabitant.gender, inhabitant.legs, inhabitant.hands, inhabitant.saying, inhabitant.friends].join('; '));
})
