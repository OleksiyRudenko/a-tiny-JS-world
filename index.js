const dog = {
  species: "dog",
  name: "Dick",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "woof-woof!",
};

const cat = {
  species: "cat",
  name: "Kitty",
  gender: "female",
  legs: 4,
  hands: 0,
  saying: "mur",
};


const woman = {
  species: "woman",
  name: "Dazdraperma",
  gender: "female",
  legs: 3,
  hands: 1,
  saying: "It used to be better",
};

const man = {
  species: "man",
  name: "Mike",
  gender: "male",
  legs: 2,
  hands: 2,
  saying: "Hello World!",
};

const catWoman = {
  species: "catwoman",
  name: "Nazar",
  gender: "femalmale",
  legs: 2,
  hands: 2,
};

Object.setPrototypeOf(catWoman, cat);

const inhabitants = [dog, cat, woman, man, catWoman];
const inhabitantsValues = [
  "species",
  "name",
  "gender",
  "legs",
  "hands",
  "saying",
];

const connectInhabitantsAndValues = inhabitants.map((item) =>
  inhabitantsValues.map((value) => item[value])
);

const showInhabitantsInHtml = connectInhabitantsAndValues.join(";\n \n") + ";";

print(showInhabitantsInHtml);
