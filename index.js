class Creature {
   constructor (name, sex, friendsArr = [{name: 'Forever alone'}]){
      this.name = name;
      if (sex !== 'Male' && sex !== 'Female'){
         this.sex = 'WARNING! Invalid value of a sex property';
      } else {
         this.sex = sex;
      }
      this.friends = [];
      friendsArr.forEach((inhabitant)=>{
         this.friends.push(inhabitant.name);
      })
      this.friends = this.friends.join(', ')
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
   constructor(name, sex, friendsArr, saying){
      super(name, sex, friendsArr);
      this.species = 'Human';
      this.saying = saying;
      this.legs = 2;
      this.hands = 2;
   }
}

class Dog extends Creature{
   constructor (name, sex, friendsArr){
      super(name, sex, friendsArr);
      this.species = 'Dog';
      this.saying = 'Woof';
      this.legs = 4;
      this.hands = 0;
   }
}

class Cat extends Creature {
   constructor (name, sex, friendsArr){
      super(name, sex, friendsArr);
      this.species = 'Cat';
      this.saying = 'Meow';
      this.legs = 4;
      this.hands = 0;
   }
}

let janLevinson = new Human ('Jan Levinson', 'Female', undefined, "You are not the first one!")
let michaelScott = new Human ('Michael Scott', 'Male', [janLevinson], "That's what she said!");
let theirDog = new Dog ('Sobachka', 'Female', [janLevinson]);
let theirCat = new Cat ('Kytsya', 'Female', [janLevinson, theirDog]);

print(janLevinson.getInfo());
print(michaelScott.getInfo());
print(theirDog.getInfo());
print(theirCat.getInfo());
