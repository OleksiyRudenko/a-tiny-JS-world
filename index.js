import { print } from './js/lib.js';

class Inhabitant{
   constructor(type, gender, name, say){
      this.type = type;
      this.gender = gender;
      this.name = name;
      this.say = say;
      this.properties = ["type", "gender", "name", "say"];
   }
   toString(){
      return this.properties
         .map(item => this[item])
         .join('; ');
   }
}

class Animal extends Inhabitant{
   constructor(type, gender, name, say){
      super(type, gender, name, say);
      this.legs = 4;
      this.properties = [...this.properties, 'legs'];
   }
}

class Dog extends Animal{
   constructor(gender, name){
      super('Dog', gender, name, 'woof-woof');
   }
}

class Cat extends Animal{
   constructor(gender, name){
      super('Cat', gender, name, 'meow');
   }
}

class Human extends Inhabitant{
   constructor(gender, name, say){
      super('Human', gender, name, say);
      this.legs = 2;
      this.hands = 2;
      this.properties = [...this.properties, 'legs', 'hands'];
   }
}

class Male extends Human{
   constructor(gender, name){
      super(gender, name, "I'm a man");
   }
}

class Female extends Human{
   constructor(gender, name){
      super(gender, name, "I'm a woman");
   }
}

const dog = new Dog('male', 'Tuzik');
const cat = new Cat('female', 'Murka');
const woman = new Female('female', 'Anna');
const man = new Male('Male', 'Stephan');

const inhabitants = [dog, cat, woman, man];

inhabitants.forEach(elem => String(print(elem + ';')));