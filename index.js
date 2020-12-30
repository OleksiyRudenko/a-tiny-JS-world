/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const woman = {
   species: 'human',
   gender: 'female',
   name: 'Liza',
   hands: 2,
   legs: 2,
   speach: 'Tere hommikust!'
};
const man = {
   species: 'human',
   gender: 'male',
   name: 'Valerii',
   hands: 2,
   legs: 2,
   speach: 'Bongiorno!'
};
const cat = {
   species: 'cat',
   gender: 'female',
   name: 'Umka',
   hands: 0,
   legs: 4,
   speach: 'Meow!'
};
const dog = {
   species: 'dog',
   gender: 'male',
   name: 'Sharik',
   hands: 0,
   legs: 4,
   speach: 'Wow-Wow!'
};
const catWoman = {
   species: 'cat-woman',
   gender: 'female',
   name: 'Chalotra',
   hands: 2,
   legs: 2,
   speach: cat.speach + ' ' + woman.speach,
};

woman.friends = [man, cat, dog];
man.friends = [catWoman, woman, dog];
dog.friends = [man, woman];
cat.friends = [woman, catWoman];
catWoman.friends = [man, cat];




// ======== OUTPUT ========

[man, dog, woman, cat, catWoman].forEach(elem => {
   print(`Hi! I am ${elem.species}; My name is ${elem.name};
     My gender is ${elem.gender}; I have ${elem.legs} legs;
     I have ${elem.hands} hands; We are friends with ${elem['friends'].map(friend => friend.name).join(', ')} and I want to say ${elem.speach} to them`);
});


/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */