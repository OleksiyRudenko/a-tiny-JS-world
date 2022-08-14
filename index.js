"use strict";

const inhabitants = initializeInhabinants();

for (const resident in inhabitants) {
  print(getPrintableInhabitantInfo(inhabitants[resident]));
}

function initializeInhabinants() {
  const inhabitants = {
    man: {
      species: "human",
      name: "John",
      gender: "male",
      legs: 2,
      hands: 2,
      phrase: "Hi all! I'm a man!",
      sayHi() {
        return this.phrase;
      },
      friends: [],
      enemies: [],
    },
    woman: {
      species: "human",
      name: "Mary",
      gender: "female",
      legs: 2,
      hands: 2,
      phrase: "Hi all! I'm a woman!",
      sayHi() {
        return this.phrase;
      },
      friends: [],
      enemies: [],
    },
    dog: {
      species: "dog",
      name: "Maylo",
      gender: "male",
      legs: 4,
      phrase: "Woof, woof!",
      sayHi() {
        return this.phrase;
      },
      friends: [],
      enemies: [],
    },
    cat: {
      species: "cat",
      name: "Willow",
      gender: "female",
      legs: 4,
      phrase: "Nyav, nyav!",
      sayHi() {
        return this.phrase;
      },
      friends: [],
      enemies: [],
    },
    womanCat: {
      species: "womanCat",
      name: "Willowjane",
      gender: "female",
      legs: 2,
      hands: 2,
      friends: [],
      enemies: [],
    },
  };
  inhabitants.womanCat.sayHi = inhabitants.cat.sayHi.bind(inhabitants.cat);

  inhabitants.man.friends.push(inhabitants.woman);
  inhabitants.woman.friends.push(inhabitants.man);
  inhabitants.cat.friends.push(
    inhabitants.man,
    inhabitants.woman,
    inhabitants.womanCat
  );
  inhabitants.dog.friends.push(inhabitants.man, inhabitants.woman);
  inhabitants.womanCat.friends.push(
    inhabitants.man,
    inhabitants.woman,
    inhabitants.cat
  );

  inhabitants.woman.enemies.push(inhabitants.womanCat);
  inhabitants.cat.enemies.push(inhabitants.dog);
  inhabitants.dog.enemies.push(inhabitants.cat, inhabitants.womanCat);
  inhabitants.womanCat.enemies.push(inhabitants.dog);

  return inhabitants;
}

function getPrintableInhabitantInfo(inhabitant) {
  const infoOneFields = ["species", "name", "gender", "legs", "hands"],
    infoArrayFields = ["friends", "enemies"],
    infoFunctionFields = ["sayHi"];

  return [
    ...infoOneFields.map((field) => {
      if (inhabitant.hasOwnProperty(field)) {
        return makePrintableSpan(inhabitant[field], field);
      } else {
        return makePrintableSpan("0", field);
      }
    }),
    ...infoArrayFields.map((field) => {
      if (inhabitant.hasOwnProperty(field)) {
        return makePrintableListOfSpan(inhabitant[field], field);
      } else {
        return makePrintableSpan("0", field);
      }
    }),
    ...infoFunctionFields.map((field) => {
      if (inhabitant.hasOwnProperty(field)) {
        return makePrintableSpan(inhabitant[field](), field);
      } else {
        return makePrintableSpan("0", "field");
      }
    }),
  ].join(", ");
}

function makePrintableListOfSpan(relationTargets, cssClass) {
  if (relationTargets.length != 0) {
    return relationTargets.map(
      (resident) => `<span class=${cssClass}>${resident.name}</span>`
    );
  } else {
    return makePrintableSpan("0", cssClass);
  }
}

function makePrintableSpan(text, cssClass) {
  return `<span class=${cssClass}>${text}</span>`;
}
