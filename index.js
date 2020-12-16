/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/YuliiaHordiichuk/a-tiny-JS-world
   Web app: https://yuliiahordiichuk.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const man = {
   species: 'human',
   name: 'Mark',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'Hi, there!'
};

const woman = {
   species: 'human',
   name: 'Jane',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hello, darling!'
};

const dog = {
   species: 'dog',
   name: 'Donny',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Woof!'
};

const cat = {
   species: 'cat',
   name: 'Beniia',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Mrrrr!'
};

// ======== OUTPUT ========

const inhabitants = [man, woman, dog, cat]; 

let message = (obj) => {
   return `${obj.saying} I am a ${obj.species} and my name is ${obj.name}. Nice to meet you! My gender is ${obj.gender} so I have ${obj.legs} legs and ${obj.hands} hands.`;  
} 

inhabitants.forEach(inhabitant => print(message(inhabitant))); 

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


