import { print } from "./js/lib.js";

("use strict");

/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/oleksii-anoshkin/a-tiny-JS-world
   Web app: https://oleksii-anoshkin.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Constants
const INHABITANTS = [];

// Humans
const HUMAN_DATA = {
  hands: 2,
  legs: 2,
  species: "human",
};

const MALE_DATA = {
  gender: "male",
  name: ["Bob", "Jonatan", "Bill"],
  friends: ["Marta", "Bob", "None"],
  phrases: ["Hello world!", "Hi everyone!", "Aloha!"],
  icon: '<span class="material-symbols-outlined">man</span>',
};

const FEMALE_DATA = {
  gender: "female",
  name: ["Samanta", "Barbara", "Marta"],
  friends: ["Bill", "Archie", "Leona"],
  phrases: ["Ops!", "Yap!", "Okey!"],
  icon: '<span class="material-symbols-outlined">woman</span>',
};

const CATWOMAN_DATA = {
  name: "Julia",
  friends: "Leona",
};

// Animals
const ANIMAL_DATA = {
  limbs: 4,
  tail: 1,
  species: "animal",
  icon: '<span class="material-symbols-outlined">pets</span>',
};

const DOGS_DATA = {
  kind: "dog",
  name: ["Archie", "Casper"],
  friends: ["Barbara", "Colin"],
  phrase: "Woof!",
};

const CATS_DATA = {
  kind: "cat",
  name: ["Colin", "Leona"],
  friends: ["Casper", "Marta"],
  phrase: "Meow!",
};

// HTML
const CARD_CLASS = "inhabitant__card";
const CARD_TAG = "div";
const KEY_TAG = "span";
const KEY_CLASS = "inhabitant__text";
const TEXT_CLASS = "normal";
const TEXT_TAG = "span";
const IMG_PROP_NAME = "icon";

// Classes
// General
class Inhabitant {
  constructor(name, friends) {
    (this.name = name), (this.friends = friends);
  }

  render() {
    const propsArr = [];

    for (const prop in this) {
      prop === IMG_PROP_NAME
        ? propsArr.unshift(this[prop])
        : propsArr.push(
            `<${KEY_TAG} class="${KEY_CLASS}">${prop}: <${TEXT_TAG} class="${TEXT_CLASS}">${this[prop]}</${TEXT_TAG}></${KEY_TAG}>`
          );
    }

    return propsArr.join(" ");
  }
}

// Humans
class Human extends Inhabitant {
  constructor(name, friends, phrase) {
    super(name, friends);
    this.saying = phrase;
    this.hands = HUMAN_DATA.hands;
    this.legs = HUMAN_DATA.legs;
    this.species = HUMAN_DATA.species;
  }
}

class Male extends Human {
  constructor(name, friends, phrase) {
    super(name, friends, phrase);
    this.gender = MALE_DATA.gender;
    this.icon = MALE_DATA.icon;
  }
}

class Female extends Human {
  constructor(name, friends, phrase) {
    super(name, friends, phrase);
    this.gender = FEMALE_DATA.gender;
    this.icon = FEMALE_DATA.icon;
  }
}

class Catwoman extends Female {
  constructor(name, friends, phrase) {
    super(name, friends, phrase);
    this.gender = FEMALE_DATA.gender;
    this.saying = CATS_DATA.phrase;
  }
}

// Animals
class Animal extends Inhabitant {
  constructor(name, friends) {
    super(name, friends);
    this.limbs = ANIMAL_DATA.limbs;
    this.tail = ANIMAL_DATA.tail;
    this.species = ANIMAL_DATA.species;
    this.icon = ANIMAL_DATA.icon;
  }
}

class Dog extends Animal {
  constructor(name, friends) {
    super(name, friends);
    this.kind = DOGS_DATA.kind;
    this.phrase = DOGS_DATA.phrase;
  }
}

class Cat extends Animal {
  constructor(name, friends) {
    super(name, friends);
    this.kind = CATS_DATA.kind;
    this.phrase = CATS_DATA.phrase;
  }
}

// Add inhabitians
function addInhabitians(className, base, dataName, dataFriends, dataPhrases) {
  for (let i = 0; i < dataName.length; i += 1) {
    dataPhrases === undefined
      ? base.push(new className(dataName[i], dataFriends[i]))
      : base.push(new className(dataName[i], dataFriends[i], dataPhrases[i]));
  }
}

// Add male
addInhabitians(
  Male,
  INHABITANTS,
  MALE_DATA.name,
  MALE_DATA.friends,
  MALE_DATA.phrases
);

// Add female
addInhabitians(
  Female,
  INHABITANTS,
  FEMALE_DATA.name,
  FEMALE_DATA.friends,
  FEMALE_DATA.phrases
);

// Add dog
addInhabitians(Dog, INHABITANTS, DOGS_DATA.name, DOGS_DATA.friends);

// Add cat
addInhabitians(Cat, INHABITANTS, CATS_DATA.name, CATS_DATA.friends);

// Add catwoman
INHABITANTS.push(new Catwoman(CATWOMAN_DATA.name, CATWOMAN_DATA.friends));

// ======== OUTPUT ========
INHABITANTS.forEach((obj) => print(`${obj.render()}`, CARD_CLASS, CARD_TAG));

/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
