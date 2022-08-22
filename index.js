/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/Levi123/a-tiny-JS-world
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
   species: 'dog',
   name: 'Rich',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Hav-hav!',
   friends: ['Bonya'],
}

const cat = {
   species: 'cat',
   name: 'Bonya',
   gender: 'female',
   legs: 4,
   hands: 0,
   saying: 'Mr-mr-mr',
   friends: ['Rich', 'Catwoman'],
}

const female = {
   species: 'human',
   name: 'Olya',
   gender: 'female',
   legs: 4,
   hands: 4,
   saying: "Glory to Ukraine",
   friends: ['Yura', 'Rich'],
}

const male = {
   species: 'human',
   name: 'Yura',
   gender: 'male',
   legs: 4,
   hands: 4,
   saying: "Glory to Ukraine",
   friends: ['Olya', 'Bonya'],
}

const catwoman = {
   species: 'human',
   name: 'Catwoman',
   gender: 'female',
   legs: 4,
   hands: 4,
   saying: cat.saying,
   friends: ['Bonya']
}
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

function printObject(object){
   const prop = [];
   for (element in object){
      prop.push(object[element]);
   }
   let newStr = prop.join('; ');
   print(newStr);
}

printObject(catwoman);
printObject(male);
printObject(female);
printObject(cat);
printObject(dog);
