/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
let dog, cat, woman, man;
const inhabitants = [dog, cat, woman, man];

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
  legs: 4,
  hands: 0,
  saying: 'I have a headache',
};
man = {
  species: 'human',
  name: 'Piter',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'Honey come on',
};

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

dog = {
  species: 'dog',
  name: 'Frodo',
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: 'woof-woof!',
};
print(dog.species, 'div');
