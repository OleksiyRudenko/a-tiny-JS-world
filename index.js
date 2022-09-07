import { print } from './js/lib.js';
  
   class Inhabitant {
      constructor(name, spacies, gender, saying, legs) {
         this.name = name;
         this.spacies = spacies;
         this.gender = gender;
         this.saying = saying;
         this.legs = legs;
         this.property = ['name', 'subspecies', 'gender', 'saying', 'legs'];
      }
      get fullProperties() {
         return this.property.map(key => this[key]).join('; ');
      }
   }

   class Human extends Inhabitant {
      constructor (name, gender, saying) {
         super(name, 'human', gender, saying, '2 legs');
         this.hands = '2 hands';
      }
      get fullProperties() {
         return super.fullProperties + `; ${this.hands}`;
      }
   }
   
 class Dog extends Inhabitant {
      constructor (name, gender, saying) {
         super(name, 'dog', gender, saying, '4 legs');
      }
      get fullProperties() {
         return super.fullProperties;
      }
   }
   
  class Cat extends Inhabitant {
      constructor (name, gender, saying) {
         super(name, 'cat', gender, saying, '4 legs');
      }
      get fullProperties() {
         return super.fullProperties;
      }
   }
   
     class CatWoman extends Cat {
      constructor (name, gender) {
         super(name, gender, cat.saying);
         this.subspecies = 'catWomen';
         this.legs = '2 legs';
         this.hands = '2 hands';
      }
      get fullProperties() {
         return super.fullProperties + `; ${this.hands}`;
      }
   }
   
   const barsik = new Dog('Barsik', 'male', "Garrrr!!"),
         joe = new Human('Joe', 'male', 'It is nice to be in the YNCA!!!'),
         tuzik = new Cat('Tuzik', 'male', "Myaw!"),
         svitlana = new Human('Svitlana', 'female', 'Hola amigo!'),
         jozeph = new Human('Jozeph', 'male', 'Whats up, dude?'),
         stefy = new CatWoman('Stefany', 'female'),
         ivanka = new Human('Ivanka', 'female', 'Bonjour!!');
   
   const inhabitants = [barsik, joe, tuzik, svitlana, jozeph, stefy, ivanka];
   
   inhabitants.forEach((item) => print(item));
