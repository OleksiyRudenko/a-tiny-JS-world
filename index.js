/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
  Complete the below for code reviewers' convenience:

  Code repository: _put repo URL here_
  Web app: _put project's github pages URL here_
  */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const cat = {
  species: 'cat',
  name: 'Prokhor',
  hands: 0,
  legs: 4,
  saying: 'Meow!',
  gender: 'male',
  friends: 'June, Maki',
};
const catWoman = {
  species: 'cat',
  name: 'June',
  hands: 0,
  legs: 4,
  saying: cat.saying,
  gender: 'female',
  friends: 'Anna',
};
const dog = {
  species: 'dog',
  name: 'Maki',
  hands: 0,
  legs: 4,
  saying: 'bark-bark!',
  gender: 'male',
  friends: 'Alfred, Prokhor, Anna',
};
const man = {
  species: 'human',
  name: 'Alfred',
  hands: 2,
  legs: 2,
  saying: 'Master Bruce, I...',
  gender: 'male',
  friends: 'Maki, Anna',
};
const woman = {
  species: 'human',
  name: 'Anna',
  hands: 2,
  legs: 2,
  saying: 'Need more money!',
  gender: 'female',
  friends: 'June, Alfred',
};

// ======== OUTPUT ========
/* Use print(message) for output.
  Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

  Message can contain HTML markup. You may also tweak index.html and/or styles.css.
  However, please, REFRAIN from improving visuals at least until your code is reviewed
  so code reviewers might focus on a single file that is index.js.
*/

const inhabitants = [cat, catWoman, man, woman, dog];

const formatOutput = ({
  name,
  species,
  hands,
  legs,
  saying,
  gender,
  friends,
}) => {
  return `Hello! I am ${species}, my name is ${name}, my gender is ${gender}, I have ${hands} arms and ${legs} legs and you know what: ${saying}. My friends: ${friends}`;
};

inhabitants.forEach((habitant) => print(formatOutput(habitant), 'h5'));

/* Print examples:
  print('ABC');
  print('<strong>ABC</strong>');
  print('<strong>ABC</strong>', 'div');

  print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
*/
