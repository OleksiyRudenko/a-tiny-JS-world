/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const inhabitantsOf = [
  {
    species: 'human',
    name: 'Mike',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Hi world i am a Mike!',
  },
  {
    species: 'human',
    name: 'Sara',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Hi world i am a Sara!',
  },
  {
    species: 'dog',
    name: 'Barbos',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Woof-woof!',
  },
  {
    species: 'cat',
    name: 'Zara',
    gender: 'female',
    legs: 4,
    hands: 0,
    saying: 'May-may!',
  },
  {
    species: 'cat-woman',
    name: 'Biatris',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'May-may!',
  },
];

// ======== OUTPUT ========

let species = 'species';
let name = 'name';
let gender = 'gender';
let legs = ' legs';
let hands = 'hands';
let saying = 'saying';

inhabitantsOf.forEach((element) => {
  print(
    element.species +
      '; ' +
      element.name +
      '; ' +
      element.gender +
      '; ' +
      element.legs +
      '; ' +
      element.hands +
      '; ' +
      element.saying
  );
});
