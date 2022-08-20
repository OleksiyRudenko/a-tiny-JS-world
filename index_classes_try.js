"use strict";

class SocialTies { 
  constructor(role) { //role - social ties - i.e. friends, enemies, neighbors, classmates, etc.
    this._persons = []; //list of persons in this role
    this[`add${role}`] = function (...newPersons) { //add person('s) this way: this.friends.addFriends("Mike", "Bill")
      this._persons.push(...newPersons);
    };
    this[`del${role}`] = function (...delPersons) { //delete person('s) from socail tie this way: this.friends.delFriends("Mike", "Bill")
      this.persons = this._persons.filter(
        (el) => ![...delPersons].includes(el)
      );
    };
    this[`get${role}`] = function () { //get list of person('s) of socail tie: this.friends.getFriends()
      return this._persons;
    };
  }
}

class Appearance {
  constructor () {
      this.height = "";
      this.eyesColor = "";
      this.hairColor = "";
  }
}

class Age { //age of inhabitant
  constructor(birthday) { //birthday in forman "MM DD YYYY"
    this._birthday = new Date(birthday);
    this.getBirthday = function () { //get birthday
      return this._birthday.toDateString();
    };
    this.getAge = function (date = new Date()) { //get age of person on the specific date (if no date: on today) date must be object Date()
      return (date.getMonth() - this._birthday.getMonth() > 0)
        ? date.getFullYear() - this._birthday.getFullYear()
        : date.getFullYear() - this._birthday.getFullYear() - 1;
    };
  }
}

class Inhabitant {
  static saying () { //function for saying phrases from _vocabulary
    return function (event) {
        return this.vocabulary.hasOwnProperty(event)
        ? this.vocabulary[event]
        : "Nothing to say";
      };
    }
  constructor(name, gender, birthday = new Date()) {
    this.name = name;
    this.gender = gender;
    this.age = new Age(birthday);
    this.friends = new SocialTies("Friends");
    this.enemies = new SocialTies("Enemies");
    this.appearance = new Appearance();
  }
}

class Man extends Inhabitant {
  constructor (name, birthday) {
    super(name, "man", birthday);
    this.species = 'Human';
    this.hands = 2;
    this.legs = 2;
    this.vocabulary = {
      "hi": "Hi cute!"
    };
    this.say = Inhabitant.saying();
  }
}

class Woman extends Inhabitant {
  constructor (name, birthday) {
    super(name, "woman", birthday);
    this.species = 'Human';
    this.hands = 2;
    this.legs = 2;
    this.appearance.breastSize = "";
    this.vocabulary = {
      "hi": "Hi hottie!"
    };
    this.say = Inhabitant.saying();
  }
}

class Dog extends Inhabitant {
  constructor (name, gender, birthday) {
    super(name, gender, birthday);
    this.species = 'Pet';
    this.breed = "";
    this.coatColor = "";
    this.paws = 4;
    this.vocabulary = {
      "hi": "Woof woof!"
    };
    this.say = Inhabitant.saying();
  }
}

class Cat extends Inhabitant {
  constructor (name, gender, birthday) {
    super(name, gender, birthday);
    this.species = 'Pet';
    this.breed = "";
    this.coatColor = "";
    this.paws = 4;
    this.vocabulary = {
      "hi": "Nyav nyav!"
    };
    this.say = Inhabitant.saying();
  }
}

class WomanCat extends Woman {
  constructor (name, birthday) {
    super(name, birthday);
    this.species = 'Mutant';
    this.hands = 2;
    this.legs = 2;
    this.appearance.breastSize = "";
    this.vocabulary = {
      "hi": "Hi! I'm Womancat!"
    };
    this.catSay = Inhabitant.saying().bind(new Cat());
    this.womanSay = Inhabitant.saying().bind(new Woman());
    this.say = Inhabitant.saying();
  }
}

const initInhabitant = {
  man: function (name, birthday, eyesColor, hairColor, height) {
    const man = new Man(name, birthday);
    man.appearance.eyesColor = eyesColor;
    man.appearance.hairColor = hairColor;
    man.appearance.height = height;
    return man;
  },
  woman: function (name, birthday, eyesColor, hairColor, height, breastSize) {
    const woman = new Woman(name, birthday);
    woman.appearance.eyesColor = eyesColor;
    woman.appearance.hairColor = hairColor;
    woman.appearance.height = height;
    woman.appearance.breastSize = breastSize;
    return woman;
  },
  dog: function (name, gender, birthday, breed, coatColor) {
    const dog = new Dog(name, gender, birthday);
    dog.breed = breed;
    dog.coatColor = coatColor;
    return dog;
  },
  cat: function (name, gender, birthday, breed, coatColor) {
    const cat = new Cat(name, gender, birthday);
    cat.breed = breed;
    cat.coatColor = coatColor;
    return cat;
  },
  womanCat: function (name, birthday, eyesColor, hairColor, height, breastSize) {
    const womanCat = new WomanCat(name, birthday);
    womanCat.appearance.eyesColor = eyesColor;
    womanCat.appearance.hairColor = hairColor;
    womanCat.appearance.height = height;
    womanCat.appearance.breastSize = breastSize;
    return womanCat;
  }
};

function initializeInhabinants () {
  return {
    woman: initInhabitant.woman ("Jinny", "03 13 2003", "celestial", "blonde", "172 cm", "B"),
    man: initInhabitant.man ("Billy", "05 24 2001", "blue", "brown", "175 cm"),
    cat: initInhabitant.cat ("Starling", "female", "05 05 2020", "British", "grey"),
    dog: initInhabitant.dog ("Oscar", "male", "06 01 2018", "Dalmatian", "black and whie spotted"),
    womanCat: initInhabitant.womanCat ("Mary", "06 13 2000", "blue", "brown", "174 cm", "C")
    };
  }

const inhabitants = initializeInhabinants ();
setFriends(); //set some friend for inhabitants
setEnemies(); //set some enemies for inhabitants
const names = getSocialTiesNames (inhabitants.man, "friends");


function setFriends () { //supporting function
  inhabitants.woman.friends.addFriends(inhabitants.man, inhabitants.cat, inhabitants.dog);
  inhabitants.man.friends.addFriends(inhabitants.dog, inhabitants.woman);
  inhabitants.cat.friends.addFriends(inhabitants.woman, inhabitants.womanCat);
  inhabitants.dog.friends.addFriends(inhabitants.man, inhabitants.woman);
  inhabitants.womanCat.friends.addFriends(inhabitants.cat, inhabitants.man);
}

function setEnemies () { //supporting function
  inhabitants.woman.enemies.addEnemies (inhabitants.womanCat);
  inhabitants.cat.enemies.addEnemies (inhabitants.dog);
  inhabitants.dog.enemies.addEnemies (inhabitants.cat, inhabitants.womanCat);
  inhabitants.womanCat.enemies.addEnemies (inhabitants.dog);
}

function getSocialTiesNames (inhabitant, contactType) {
  const fName = `get${contactType.charAt(0).toUpperCase()}${contactType.slice(1)}`;
  const persons = inhabitant[contactType][fName]();
  return (persons.length == 0) ? "no one" : persons.map((person) => person.name).join(" and ");
}

function manIntroduce (man) {
  return [
    `${man.say("hi")} I'm ${man.name} and I'm ${man.constructor.name}. I was born on ${man.age.getBirthday()}. I'm ${man.age.getAge()} `,
    `and my height ${man.appearance.height}. I have ${man.appearance.eyesColor} eyes and ${man.appearance.hairColor} hair. `,
    `I'm friends with ${getSocialTiesNames(man, "friends")}. `,
    `Here a list of my enemies: ${getSocialTiesNames(man, "enemies")}.`
  ].join("");
}

function womanIntroduce (woman) {
  return [
    `${woman.say("hi")} I'm ${woman.name} and I'm ${woman.constructor.name}. I was born on ${woman.age.getBirthday()}. I'm ${woman.age.getAge()} `,
    `and my height ${woman.appearance.height}. `,
    `I have ${woman.appearance.eyesColor} eyes, ${woman.appearance.hairColor} hair and breasts size ${woman.appearance.breastSize}. `,
    `I'm friends with ${getSocialTiesNames(woman, "friends")}. `,
    `Here a list of my enemies: ${getSocialTiesNames(woman, "enemies")}.`
  ].join("");
}

function petIntroduce (pet) {
  return [
    `${pet.say("hi")} I'm ${pet.constructor.name} ${pet.gender} ${pet.name}.`,
    ` I was born on ${pet.age.getBirthday()}. I'm ${pet.age.getAge()} `,
    `and my breed is ${pet.breed}. I have ${pet.coatColor} coat. `,
    `I'm friends with ${getSocialTiesNames(pet, "friends")}. `,
    `Here a list of my enemies: ${getSocialTiesNames(pet, "enemies")}.`
  ].join("");
}

function womancatIntroduce (womancat) {
  return [
    `${womancat.catSay("hi")} I'm ${womancat.name}. I was born on ${womancat.age.getBirthday()}. I'm ${womancat.age.getAge()} `,
    `and my height ${womancat.appearance.height}. `,
    `I have ${womancat.appearance.eyesColor} eyes, ${womancat.appearance.hairColor} hair and breasts size ${womancat.appearance.breastSize}. `,
    `I'm friends with ${getSocialTiesNames(womancat, "friends")}. `,
    `Here a list of my enemies: ${getSocialTiesNames(womancat, "enemies")}. `,
    `By the way, I can say "Hello" like woman: "${womancat.womanSay("hi")}". And my own greeting is "${womancat.say("hi")}"`
  ].join("");
}


for (const person in inhabitants) {
  console.log(inhabitants[person]);
}

console.log(manIntroduce(inhabitants.man));
console.log(womanIntroduce(inhabitants.woman));
console.log(petIntroduce(inhabitants.cat));
console.log(petIntroduce(inhabitants.dog));
console.log(womancatIntroduce(inhabitants.womanCat));

printAllInhabitantsInfo(inhabitants);

function printAllInhabitantsInfo(inhabitants) {
  for (const resident in inhabitants) {
    print(getPrintableInhabitantInfo(inhabitants[resident], inhabitants[resident].name));
  }
}


//supports properties-objects of any nesting through recursion
function getPrintableInhabitantInfo(inhabitant, residentName) {
  const watchFields = ["species", "name", "gender", "legs", "hands", "pows"],
        getArraysFields = ["say", "friends", "enemies"]; //properties excluded from the output
  let printableInfo = [];

  printableInfo
    .push(...((watchFields.map((field) => {
      if (inhabitant.hasOwnProperty(field)) {
        return makePrintableSpan(inhabitant[field], field);
      }
    }))
    .filter((info) => info != ""))
    );
  printableInfo  
    .push(...getArraysFields.map((field) => {
      if (field == "say") {
        return makePrintableSpan(inhabitant.say("hi"), field);
      } else {
        return makePrintableSpan(getSocialTiesNames(inhabitant, field), field);
      }
    }));
  return printableInfo.join(", ");
  }
/* 
  for (let field in inhabitant) {
    if (watchFields.includes(field)) {
      printableInfo.push(makePrintableSpan(inhabitant[field], field))
    } else if (getArraysFields.includes(field)) {
      printableInfo.push(makePrintableSpan(getSocialTiesNames(inhabitant, field)));
    }
  }
  return printableInfo.join(", ");
}

 */
//assign handlers for each field type
function fieldTypeHandler(field) {
  let typeOfField;
  Array.isArray(field) ? (typeOfField = "array") : (typeOfField = typeof field);
  switch (typeOfField) {
/*     case "function":
      return makePrintableFunctionReturn;
    case "array":
      return makePrintableListOfSpan; */
    case "string":
    case "number":
    case "boolean":
    case "symbol":
    case "undefined":
      return makePrintableSpan;
/*     case "object":
      return getPrintableInhabitantInfo; */
    default:
      break;
  }
}
//typeof feild == 'number', 'string', 'boolean', 'symbol', 'undefined'
function makePrintableSpan(text, cssClass) {
  return `<span class="${cssClass}">${text}</span>`;
}
//typeof feild == 'array'
function makePrintableListOfSpan(arrayOfValues, cssClass) {
  if (Array.isArray(arrayOfValues)) {
    if (arrayOfValues.length != 0) {
      return arrayOfValues
        .map((resident) => `<span class="${cssClass}">${resident.name}</span>`)
        .join(", ");
    } else {
      return makePrintableSpan("0", cssClass);
    }
  } else {
    return makePrintableSpan("Object", cssClass);
  }
}
//typeof feild == 'function'
function makePrintableFunctionReturn(personFunction, cssClass, person) {
  return `<span class="${cssClass}">${personFunction.call(person)}</span>`;
}
/* 
const inhabitants = initializeInhabinants();
printAllInhabitantsInfo(inhabitants);
//inhabitants must be an object with a properties-objects for each person

function printAllInhabitantsInfo(inhabitants) {
  for (const resident in inhabitants) {
    print(getPrintableInhabitantInfo(inhabitants[resident], resident));
  }
}

 */
