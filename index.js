/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const man = {
   species: 'human',
   name: 'Charles',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'What up',
   friends: ['Luna']
};

const woman = {
   species: 'human',
   name: 'Raven',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hey!',
   friends: ['Anna']
};

const cat = {
   species: 'cat',
   name: 'Vincent',
   gender: 'male',
   legs: 2,
   hands: 0,
   saying: 'Meow',
   friends: ['Anna']
};

const dog = {
   species: 'dog',
   name: 'Luna',
   gender: 'female',
   legs: 2,
   hands: 0,
   saying: 'Woof-woof!',
   friends: ['Charles']
};

const catWoman = {
   species: 'catWoman',
   name: 'Anna',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: cat.saying,
   friends: ['Raven', 'Vincent']
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
let inhabitants = [man, woman, cat, dog, catWoman];

inhabitants.forEach(inhabitant => {
   print(`${inhabitant.species}; ${inhabitant.name}; ${inhabitant.gender}; ${inhabitant.legs}; ${inhabitant.hands}; ${inhabitant.saying}; ${inhabitant.friends.join(', ')}`)
});
