/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/Roka20012/kottans_frontend/tree/master/practical_task/a-tiny-JS-world
   Web app: https://roka20012.github.io/a-tiny-JS-world/
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
