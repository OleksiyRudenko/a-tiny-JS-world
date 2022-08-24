class Creature {
   constructor (name, sex){
      this.name = name;
      if (sex !== 'Male' && sex !== 'Female'){
         this.sex = 'WARNING! Invalid value of a sex property';
      } else {
         this.sex = sex;
      }
   }

   getInfo(){
      let consolidatedInfo =[];
      Object.getOwnPropertyNames(this).forEach((elArr)=>{
         consolidatedInfo.push(this[elArr]);
      })
      return consolidatedInfo.join('; ');
   }
}

class Human extends Creature{
   constructor(name, sex, saying){
      super(name, sex);
      this.species = 'Human';
      this.legs = 2;
      this.hands = 2;
      this.saying = saying;
   }
}

class Dog extends Creature{
   constructor (name, sex){
      super(name, sex);
      this.species = 'Dog';
      this.legs = 4;
      this.hands = 0;
      this.saying = 'Woof';
   }
}

class Cat extends Creature {
   constructor (name, sex){
      super(name, sex);
      this.species = 'Cat';
      this.legs = 4;
      this.hands = 0;
      this.saying = 'Meow';
   }
}

let janLevinson = new Human ('Jan Levinson', 'Female', "You are not the first one!")
let michaelScott = new Human ('Michael Scott', 'Male', "That's what she said!");
let theirDog = new Dog ('Sobachka', 'Female');
let theirCat = new Cat ('Kytsya', 'Female');

print(janLevinson.getInfo());
print(michaelScott.getInfo());
print(theirDog.getInfo());
print(theirCat.getInfo());
