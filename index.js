/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
  name: 'Patron',
  gender: 'male',
  species: 'dog',
  legs: 4,
  hands: 0,
  saying: 'woof',
};

const cat = {
  name: 'Murzyk',
  gender: 'male',
  species: 'cat',
  legs: 4,
  hands: 0,
  saying: 'meow',
};

const woman = {
  name: 'Anna',
  gender: 'female',
  species: 'human',
  legs: 2,
  hands: 2,
  saying: 'hello',
};

const man = {
  name: 'Joey',
  gender: 'male',
  species: 'human',
  legs: 2,
  hands: 2,
  saying: 'How you doin?',
};

const catWoman = Object.create(cat);
catWoman.name = 'Cat-woman';
catWoman.species = 'human';
catWoman.legs = 2;
catWoman.hands = 2;

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

print(
  `${dog.species}; ${dog.name}; ${dog.gender}; ${dog.legs}; ${dog.hands}; ${dog.saying}`
);
print(
  `${cat.species}; ${cat.name}; ${cat.gender}; ${cat.legs}; ${cat.hands}; ${cat.saying}`
);
print(
  `${man.species}; ${man.name}; ${man.gender}; ${man.legs}; ${man.hands}; ${man.saying}`
);
print(
  `${woman.species}; ${woman.name}; ${woman.gender}; ${woman.legs}; ${woman.hands}; ${woman.saying}`
);
print(
  `${catWoman.species}; ${catWoman.name}; ${catWoman.gender}; ${catWoman.legs}; ${catWoman.hands}; ${catWoman.saying}`
);

print(
  `${man.species}; ${man.name}; ${man.gender}; ${man.legs}; ${man.hands}; ${man.saying}; ${woman.name}, ${cat.name}, ${dog.name}`
);
