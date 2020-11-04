/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
  Complete the below for code reviewers' convenience:

  Code repository: _put repo URL here_
  Web app: _put project's github pages URL here_
  */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Animal {
  constructor() {
    this.hands = 0;
    this.legs = 4;
    this.friends = ['no friends'];
  }
}

class Cat extends Animal {
  constructor(feature) {
    super();
    this.species = 'cat';
    Object.assign(this, feature);
  }

  saying() {
    return 'Meow!';
  }

}

class Dog extends Animal {
  constructor(feature) {
    super();
    this.species = 'dog';
    Object.assign(this, feature);
  }

  saying() {
    return 'Bark-Bark!';
  }
}

const cat = new Cat({
  name: 'Prokhor',
  gender: 'male',
  friends: ['June', 'Maki'],
});


const dog = new Dog({
  name: 'Maki',
  gender: 'male',
  friends: ['Alfred', 'Prokhor', 'Anna'],
});

class Human {
  constructor(feature) {
    this.legs = 2;
    this.hands = 2;
    this.species = 'human';
    Object.assign(this, feature);
  }

  saying() {
    return this.phrase;
  }
}


const catWoman = new Human({
  name: 'June',
  gender: 'female',
  friends: ['Anna'],
  saying: new Cat().saying,
});

const man = new Human({
  name: 'Alfred',
  phrase: 'Master Bruce, I...',
  gender: 'male',
  friends: ['Maki', 'Anna'],
});

const woman = new Human({
  name: 'Anna',
  phrase: 'Need more money!',
  gender: 'female',
  friends: ['June', 'Alfred'],
});

// ======== OUTPUT ========
/* Use print(message) for output.
  Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

  Message can contain HTML markup. You may also tweak index.html and/or styles.css.
  However, please, REFRAIN from improving visuals at least until your code is reviewed
  so code reviewers might focus on a single file that is index.js.
*/

const inhabitants = [cat, catWoman, man, woman, dog];

const formatOutput = (habitant) => {
  return `Hello! I am <strong>${habitant.species}</strong>, my name is <strong>${habitant.name}</strong>, my gender is <strong>${habitant.gender}</strong>, I have <strong>${habitant.hands}</strong> arms and <strong>${habitant.legs}</strong> legs and you know what: <strong>${habitant.saying()}</strong>. My friends: <strong>${habitant.friends}</strong>`;
};

inhabitants.forEach((habitant) => print(formatOutput(habitant)));

/* Print examples:
  print('ABC');
  print('<strong>ABC</strong>');
  print('<strong>ABC</strong>', 'div');

  print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
*/
