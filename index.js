/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/bugagashinka/a-tiny-JS-world
   Web app: https://bugagashinka.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
var dog, cat, woman, man;

dog = {
  species: 'dog',
  name: 'Frodo',
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: 'woof-woof!',
};
cat = {
  species: 'cat',
  name: 'Mr. Smith',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meeeeeeow',
};
woman = {
  species: 'human',
  name: 'Jany',
  gender: 'female',
  legs: 0,
  hands: 2,
  saying: 'I have a headache',
};
man = {
  species: 'human',
  name: 'Piter',
  gender: 'male',
  legs: 0,
  hands: 2,
  saying: 'Honey come on',
};

const inhabitants = [dog, cat, woman, man];

woman.friends = [cat, man];
man.friends = [woman, dog];
dog.friends = [man];
cat.friends = [woman];

// ======== OUTPUT ========
inhabitants.forEach(inhabitant => {
  const info = Object.keys(inhabitant).map(prop => {
    if (prop === 'friends') {
      return inhabitant[prop].map(friend => friend.name).join(',');
    }
    return inhabitant[prop];
  });

  print(info.join(';'), 'div');
});

const catWoman = {
  species: 'human',
  name: 'Kitty woman',
  gender: 'female',
  legs: 0,
  hands: 2,
  get saying() {
    return cat.saying;
  },
};
