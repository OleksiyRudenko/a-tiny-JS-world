/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
    species: 'dog',
    name: 'Ivan',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Woof-woof!',
    friends: ['Ira']
};

const cat = {
    species: 'cat',
    name: 'Pushok',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Meeeow!',
    friends: ['Sharik', 'Ponchik']
};

const catWoman = {
    species: 'cat',
    name: 'Murka',
    gender: 'female',
    legs: 4,
    hands: 0,
    saying: cat.saying,
    friends: ['Pushok']
};

const woman = {
    species: 'human',
    name: 'Natali',
    gender: 'female',
    legs: 0,
    hands: 2,
    saying: 'Nice to meet you!',
    friends: ['Madona']
};

const man = {
    species: 'human',
    name: 'Andre',
    gender: 'male',
    legs: 0,
    hands: 2,
    saying: 'How you doing?',
    friends: ['Vasya', 'Mitya']
};

const inhabitants = [dog, cat, catWoman, man, woman];

let output = inhabitants.map(elem => {
    return `${elem.saying} I'm a ${elem.species} with the name ${elem.name}, which means I'm ${elem.gender}. My body has ${elem.legs} legs and ${elem.hands} hands. And I want to say hi to <b>${elem.friends}</b>, you are the best!`
}).join('\n\n');

print(output);

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


