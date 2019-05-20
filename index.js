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

const getFriends = inhobitant => {
  if (inhobitant.hasOwnProperty('friends')) {
    return `I have friends: ${inhobitant.friends
      .map(friend => friend)
      .join(', ')}`;
  } else {
    return `I have no friends`;
  }
};

const getBio = inhobitant => {
  return `I'am a ${inhobitant.species}, my name is <strong>${
    inhobitant.name
  }</strong>.\nI have ${inhobitant.legs} legs and ${
    inhobitant.hands
  } hands.${getFriends(inhobitant)}. \nEvery day I say:  ${inhobitant.say()}`;
};

// ========== OUTPUT ===========

[wooman, man, dog, cat].forEach(inhobitant => {
  print(getBio(inhobitant));
});
