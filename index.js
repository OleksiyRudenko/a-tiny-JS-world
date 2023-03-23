import { print } from './js/lib.js';

"use strict";

/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/oleksii-anoshkin/a-tiny-JS-world
   Web app: https://oleksii-anoshkin.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Objects {
   constructor(object, name, gender, hands, legs, phrase, friends) {
      this.object = object,
      this.name = name,
      this.gender = gender,
      this.hands = hands,
      this.legs = legs,
      this.saying = phrase,
      this.friends = friends
   };

   printObj() {
      let str = ``;
      let i = 1;

      for (const key in this) {
         if (i === 7) {
            str += `${this[key]}`;
            continue;
         };

         str += `${this[key]}; `;
         i += 1;
      };

      return str;
   };
};

const man = new Objects("human", "Oleksii", "male", 2, 2, "Hello! My name's Oleksii! Nice to meet you!", "Julia, Jack, Lili");
const woman = new Objects("human", "Julia", "female", 2, 2, "Hello! My name's Julia! Nice to meet you!", "Oleksii, Jack, Lili");
const dog = new Objects("animal", "Jack", "male", 0, 4, "Woof-woof!", "Oleksii, Julia, Lili");
const cat = new Objects("animal", "Lili", "female", 0, 4, "Meow-meow!", "Oleksii, Julia, Jack");
const catWoman = new Objects("human", "Mia", "female", 2, 2, cat.saying, "Lili");

// ======== OUTPUT ========

[man, woman, dog, cat, catWoman].forEach(obj => print(`${obj.printObj()}`, 'div'));

// print(`<strong></strong>`, 'div');

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
