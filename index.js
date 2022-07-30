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
  saying: "mur-mur",
};

const catWoman = {
  species: "catwoman",
  name: "Nazar",
  gender: "female",
  legs: 4,
  hands: 0,
  saying: cat.saying,
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

const arr = [dog, cat, woman, man, catWoman];
const arrValues = ['species', 'name', 'gender', 'legs', 'hands', 'saying'];

const newArr = arr.map((item) => arrValues.map((value) => item[value]));

const result = newArr.join('\n \n');

print(result);
