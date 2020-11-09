/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
  Complete the below for code reviewers' convenience:

  Code repository: _put repo URL here_
  Web app: _put project's github pages URL here_
  */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const Inhabitant = (species, name, gender, hands, legs, friends, phrase) => {
  const self = {
    species,
    name,
    gender,
    hands,
    legs,
    friends,
    phrase,
  };
  return self;
};

const catSaying = () => ({
  saying: () =>  "Meow!",
});
const humanSaying = (self) => ({
  saying: () => self.phrase,
});
const dogSaying = () => ({
  saying: () =>  "Bark-bark!",
});

const Cat = (name, gender, friends, phrase) => {
  const self = {};
  return Object.assign(self, Inhabitant('cat', name, gender, 0, 4, friends, phrase), catSaying());
}

const Dog = (name, gender, friends, phrase) => {
  const self = {};
  return Object.assign(self, Inhabitant('dog', name, gender, 0, 4, friends, phrase), dogSaying());
}

const Human = (name, gender, friends, phrase) => {
  const self = {};
  return Object.assign(self, Inhabitant('Human', name, gender, 2, 2, friends, phrase), humanSaying(self));
}

const catWoman = Object.assign(Human('June', 'female', ['Maki', 'Anna']), catSaying());

const dog = Dog('Maki', 'male', ['Alfred', 'Prokhor'], 'Bark-bark!');
const cat = Cat('Prokhor', 'male', ['June', 'Maki'], 'Meow!');

const man = Human('Alfred', 'male', ['Maki', 'Anna'], 'Master Bruce, I...');

const woman = Human(
  'Anna',
  'female',
  ['June', 'Alfred'],
  'Need more money!'
);

// ======== OUTPUT ========
/* Use print(message) for output.
  Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

  Message can contain HTML markup. You may also tweak index.html and/or styles.css.
  However, please, REFRAIN from improving visuals at least until your code is reviewed
  so code reviewers might focus on a single file that is index.js.
*/

const inhabitants = [cat, dog, man, woman, catWoman];

const formatOutput = (habitant) => {
  return `Hello! I am <strong>${
    habitant.species
  }</strong>, my name is <strong>${
    habitant.name
  }</strong>, my gender is <strong>${
    habitant.gender
  }</strong>, I have <strong>${habitant.hands}</strong> arms and <strong>${
    habitant.legs
  }</strong> legs and you know what: <strong>${habitant.saying()}</strong>. My friends: <strong>${
    habitant.friends
  }</strong>`;
};

inhabitants.forEach((habitant) => print(formatOutput(habitant)));

/* Print examples:
  print('ABC');
  print('<strong>ABC</strong>');
  print('<strong>ABC</strong>', 'div');

  print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
*/
