/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


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

   const dog = {
      species: 'dog',
      name: 'Toby',
      gender: 'male',
      legs: 4,
      hands: 0,
      saying: 'woof-woof!'
    };

    const cat = {
      species: 'cat',
      name: 'Mike',
      gender: 'male',
      legs: 4,
      hands: 0,
      saying: 'Murrrrrrrrrrr...'
    };

   const manJake = {  
      species: 'human',
      name: 'Jake',
      gender: 'male',
      legs: 2,
      hands: 2,
      saying: 'Hey, whats up?'
   };

   const manSpensor = {  
      species: 'human',
      name: 'Spensor',
      gender: 'male',
      legs: 2,
      hands: 2,
      saying: 'The weather is fine'
   };
   
   const womanJessy = {
      species: 'human',
      name: 'Jessy',
      gender: 'female',
      legs: 2,
      hands: 2,
      saying: 'Im a little tired today'
   };

   const womanMargo = {
      species: 'human',
      name: 'Margo',
      gender: 'male',
      legs: 2,
      hands: 2,
      saying: 'Your shirt is just rubbish!'
   };

   const catWoman = {
      species: 'Catwoman',
      name: 'Kate',
      gender: 'male',
      legs: 2,
      hands: 2,
      saying: cat.saying
   };

   const Inhabitants = [dog, cat, manJake, manSpensor, womanJessy, womanMargo, catWoman];
   const keyOfInhabitants = ["species", "name", "gender", "legs", "hands", "saying"];
   let summaryInhabitans = [];

   Inhabitants.forEach(habitant => summaryInhabitans.push(keyOfInhabitants.map(keyInObject => habitant[keyInObject])));

   summaryInhabitans.forEach(habitants => print(habitants.join("; ")));
