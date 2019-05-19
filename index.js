/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

Code repository: https://github.com/aymkin/a-tiny-JS-world
Web app: https://aymkin.github.io/a-tiny-JS-world/
   */
// ======== OBJECTS DEFINITIONS ========

const dog = {
  species: 'dog',
  name: 'Charly',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof-woof',
  friends: ['man', 'cat']
};

const cat = {
  species: 'cat',
  name: 'Benjamin',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meow-meow',
  friends: ['wooman', 'dog']
};

const wooman = {
  species: 'human',
  name: 'Galyna',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Dear, do you love me?',
  friends: ['man', 'cat']
};

const man = {
  species: 'human',
  name: 'Aymkin',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'Honey, I love borscht.',
  friends: ['wooman', 'dog']
};

const getBio = (inhobitant) => {
  print(
    `I'am a ${inhobitant.species}, my name is <strong>${inhobitant.name}</strong>.
    I have ${inhobitant.legs} legs and ${inhobitant.hands} hands.
    Every day I say: "${inhobitant.saying}".`
  );
};

const makeSound = (inhobitant) => {
  print(
    `Every day I say: "${inhobitant.saying}".`
  );
};

const getFriends = (inhobitant) => {
  print(
    `I have friends: ${inhobitant.friends.map(friend => friend).join(', ')}.`
  );
};

// ========== OUTPUT ===========

[wooman, man, dog, cat].forEach(inhobitant => {
  getBio(inhobitant);
  makeSound(inhobitant);
  getFriends(inhobitant);
  print('<--->');
});
