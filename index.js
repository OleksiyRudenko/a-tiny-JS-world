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
  say: () => 'woof-woof',
  friends: ['man', 'cat']
};

const cat = {
  species: 'cat',
  name: 'Benjamin',
  gender: 'male',
  legs: 4,
  hands: 0,
  say: () => 'meow-meow',
  friends: ['wooman', 'dog']
};

const wooman = {
  species: 'human',
  name: 'Galyna',
  gender: 'female',
  legs: 2,
  hands: 2,
  say: () => 'Dear, do you love me?',
  friends: ['man', 'cat']
};

const man = {
  species: 'human',
  name: 'Aymkin',
  gender: 'male',
  legs: 2,
  hands: 2,
  say: () => 'Honey, I love borscht.'
};

const getBio = inhobitant => {
  print(
    `I'am a ${inhobitant.species}, my name is <strong>${
      inhobitant.name
    }</strong>.
    I have ${inhobitant.legs} legs and ${inhobitant.hands} hands.`
  );
  getFriends(inhobitant);
};

const getFriends = inhobitant => {
  if (inhobitant.hasOwnProperty('friends')) {
    print(
      `I have friends: ${inhobitant.friends.map(friend => friend).join(', ')}.`
    );
  } else {
    print(`I have no friends`);
  }
};

// ========== OUTPUT ===========

[wooman, man, dog, cat].forEach(inhobitant => {
  getBio(inhobitant);
  print(`Every day I say: ${inhobitant.say()}`);
  print('<--->');
});
