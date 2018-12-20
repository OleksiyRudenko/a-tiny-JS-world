/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
  species: 'dog',
  name: 'Toby',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof-woof!',
  friends: [""]
};

const cat = {
  species: 'cat',
  name: 'Fabula',
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: 'meow-meow!',
  friends: ['Toby', ]
};

const man = {
  species: 'human',
  name: 'Kan',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'I am Superman!',
  friends: ['']
};

const woman = {
  species: 'human',
  name: 'Kandy',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Who is there?',
  friends: ['Kan', 'Fabula']
};

const catWoman = {
  species: 'human',
  name: 'Lili',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: cat.saying + ' Who is there?',
  friends: ['Fabula']
};

function inhabitantsInfo(obj) {
  let info = '';
  for (let key of Object.keys(obj)) {
    if (obj[key] != undefined && obj[key] != 0) {
      info += obj[key] + '; ';
    } else {
      info += '';
    }

  }
  return info;
}

print(inhabitantsInfo(dog));
print(inhabitantsInfo(cat));
print(inhabitantsInfo(man));
print(inhabitantsInfo(woman));
print(inhabitantsInfo(catWoman));


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