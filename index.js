/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
  species: "dog",
  legs: 4,
  hands: 0,
  name: "Molly",
  gender: "female",
  saying: "WOOF-WOOF!",
};

const cat = {
  species: "cat",
  legs: 4,
  hands: 0,
  name: "Whiskey",
  gender: "male",
  saying: "Meow!",
};

const woman = {
  species: "human",
  legs: 2,
  hands: 2,
  name: "Kate",
  gender: "female",
  saying: "Have a good day!",
};

const man = {
  species: "human",
  legs: 2,
  hands: 2,
  name: "Dimitrij",
  gender: "male",
  saying: "Nice to meet you!",
};
// ======== OUTPUT ========
const allInhabitants = [dog, cat, woman, man];
const keys = Object.keys(allInhabitants[0]);

allInhabitants.map((inhabitan) => {
  print(keys.map((key) => inhabitan[key]).join("; "));
});
