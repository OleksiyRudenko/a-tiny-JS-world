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
class Inhabitant {
   constructor(name, gender, saying) {
      this.name = name;
      this.gender = gender;
      this.saying = saying;
   }
   print() {
      const specs = [this.species, this.name, this.gender, this.legs, this.hands, this.saying];
      print(specs.join("; "));
   }
}

class Animal extends Inhabitant {
   constructor(name, gender, saying) {
      super(name, gender, saying);
      this.legs = 4; 
      this.hands = 0;
   }
}

class Human extends Inhabitant {
   constructor(name, gender, saying) {
      super(name, gender, saying);
      this.species = 'human';
      this.legs = 2;
      this.hands = 2;
      this.print();
   }
}

class Dog extends Animal {
   constructor(name, gender, saying) {
      super(name, gender, saying);
      this.species = 'dog';
      this.print();
   }
}

class Cat extends Animal {
   constructor(name, gender, saying) {
      super(name, gender, saying);
      this.species = 'cat';
      this.print();
   }
}

class CatWoman extends Animal {
   constructor(name, gender, saying) {
      super(name, gender, saying);
      this.species = 'catWoman';
      this.legs = 2;
      this.hands = 2;
      this.print();
   }
}

const dog = new Dog('Toby', 'male', 'woof-woof!'),
      cat = new Cat('Mike', 'male', 'Murrrrrrrrrrr...'),
      manJake = new Human('Jake', 'male', 'Hey, whats up?'),
      manSpensor = new Human('Spensor', 'male', 'The weather is fine'),
      womanJessy = new Human('Jessy', 'female', 'Im a little tired today'),
      womanMargo = new Human('Margo', 'female', 'Your shirt is just rubbish!');
      catWoman = new CatWoman('Kate', 'female', cat.saying);

      