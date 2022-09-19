import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const InhabitantsOfTheWorld = function (species, name, gender, legs, hands, saying) {
  this.species = species;
  this.name = name;
  this.gender = gender;
  this.legs = legs;
  this.hands = hands;
  this.saying = saying;
  this.friends = [];
}

const dog = new InhabitantsOfTheWorld('dog', 'Caesar', 'male', 4, 0, 'woof-woof!');
const cat= new InhabitantsOfTheWorld('cat', 'Musya', 'female', 4, 0, 'meow-meow!');
const man = new InhabitantsOfTheWorld('human', 'Myk', 'male', 2, 2, 'hello bro!');
const woman = new InhabitantsOfTheWorld('human', 'Magda', 'female', 2, 2, "I'll kill you!");

dog.friends = [cat.name, man.name, woman.name];
cat.friends = [dog.name, man.name, woman.name];
man.friends = [dog.name, cat.name, woman.name];
woman.friends = [dog.name, cat.name, man.name];

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

   const inhabitants = [dog, cat, man, woman];
   inhabitants.map(({species, name, gender, legs, hands, saying, friends}) => 
     print(`species: <strong style="color: darkblue">${species}</strong>;
       name: <strong style="color: red">${name}</strong>; 
       gender: <strong style="color: green">${gender}</strong>;
       legs: <strong style="color: black">${legs}</strong>;
       hands: <strong style="color: gray">${hands}</strong>;
       saying: <strong style="color: blue">${saying}</strong>;
       friends: <strong style="color: darkorchid">${friends}</strong>;`));
       
/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
