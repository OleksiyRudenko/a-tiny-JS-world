"use strict";

const inhabitants = initializeInhabinants();
printAllInhabitantsInfo(inhabitants);
//inhabitants must be an object with a properties-objects for each person
function printAllInhabitantsInfo(inhabitants) {
  for (const resident in inhabitants) {
    print(getPrintableInhabitantInfo(inhabitants[resident], resident));
  }
}

function initializeInhabinants() {
  const inhabitants = {
    man: {
      species: "human",
      name: "John",
      gender: "male",
      legs: 2,
      hands: 2,
      eyes: {
        color: "green",
        size: "big",
      },
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
//supports properties-objects of any nesting through recursion
function getPrintableInhabitantInfo(inhabitant, residentName) {
  const ignoredFields = ["phrase"]; //properties excluded from the output
  let printableInfo = [];
  for (let field in inhabitant) {
    if (!ignoredFields.includes(field)) {
      printableInfo.push(
        fieldTypeHandler(inhabitant[field])(
          inhabitant[field],
          residentName + " " + field,
          inhabitant
        )
      );
    }
  }
  return printableInfo.join(", ");
}
//assign handlers for each field type
function fieldTypeHandler(field) {
  let typeOfField;
  Array.isArray(field) ? (typeOfField = "array") : (typeOfField = typeof field);
  switch (typeOfField) {
    case "function":
      return makePrintableFunctionReturn;
    case "array":
      return makePrintableListOfSpan;
    case "string":
    case "number":
    case "boolean":
    case "symbol":
    case "undefined":
      return makePrintableSpan;
    case "object":
      return getPrintableInhabitantInfo;
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
