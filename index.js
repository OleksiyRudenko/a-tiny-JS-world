/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


// ======== OUTPUT ========
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


'use strict';

const dog = {
  species: 'dog',
  name: 'Toby',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof-woof!'
};

const cat = {
  species: 'cat',
  name: 'Molly',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meow'
};

const woman = {
  species: 'human',
  name: 'Jenny',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Hello Chris!'
};

const man = {
  species: 'human',
  name: 'John',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'Hello Jenny!'
};

let creatures = [dog, cat, woman, man];

creatures.forEach(el => {
  print(`Hi! I am ${el.species}; My name is <strong>${el.name}</strong>; My gender is <em>${el.gender}</em>;I have ${el.legs} legs;I have ${el.hands} hands;I want to say ${el.saying};`);
});
