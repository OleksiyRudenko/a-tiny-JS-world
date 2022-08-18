/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
let man = {
  entity: "person",
  name: "John",
  sex: "male",
  hands: 2,
  legs: 2,
  say: "Hello world!",
  friends: "Jenny, Rex",
};

let woman = {
  entity: "person",
  name: "Jenny",
  sex: "female",
  hands: 2,
  legs: 2,
  say: "Hello world! I'm Jenny.",
  friends: "Tom",
};

let dog = {
  entity: "dog",
  name: "Rex",
  sex: "male",
  hands: 0,
  legs: 4,
  say: "Gav!",
  friends: "John, Jenny",
};

let cat = {
  entity: "cat",
  name: "Tom",
  sex: "male",
  hands: 0,
  legs: 4,
  say: "Meyow!",
  friends: "Jenny",
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

function makeString(obj) {
  let arrStr = [];
  for (let value in obj) {
    arrStr.push(obj[value]);
  }
  return arrStr.join(";");
}

print(makeString(man));
print(makeString(woman));
print(makeString(cat));
print(makeString(dog));
/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
