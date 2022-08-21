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
   constructor(spacies, name, gender, saying) {
      this.spacies = spacies;
      this.name = name;
      this.gender = gender;
      this.saying = saying;
      this.props = [this.spacies, this.name, this.gender, this.saying];
   }
   print() {
      print(this.props.join('; '));
   }
}

class Animal extends Inhabitant {
   constructor(spacies, name, gender, saying, props) {
      super(spacies, name, gender, saying, props);
      this.legs = 4;
      this.props.push(this.legs);
   }
}

class Human extends Inhabitant {
   constructor(spacies, name, gender, saying, props) {
      super(spacies, name, gender, saying, props);
      this.legs = 2;
      this.hands = 2;
      this.props.push(this.legs, this.hands);
      this.print();
   }
}

class Dog extends Animal {
   constructor(spacies, name, gender, saying, legs, props) {
      super(spacies, name, gender, saying, legs, props);
      this.print();
   }
}

class Cat extends Animal {
   constructor(spacies, name, gender, saying, legs, props) {
      super(spacies, name, gender, saying, legs, props);
      this.print();
   }
}

class CatWoman extends Animal {
   constructor(spacies, name, gender, saying, props) {
      super(spacies, name, gender, saying, props);
      this.legs = 2;
      this.hands = 2;
      this.props.push(this.hands);
      this.print();
   }
}

const dog = new Dog('dog', 'Toby', 'male', 'woof-woof!'),
      cat = new Cat('cat', 'Mike', 'male', 'Murrrrrrrrrrr...'),
      manJake = new Human('human', 'Jake', 'male', 'Hey, whats up?'),
      manSpensor = new Human('human', 'Spensor', 'male', 'The weather is fine'),
      womanJessy = new Human('human', 'Jessy', 'female', 'Im a little tired today'),
      womanMargo = new Human('human', 'Margo', 'female', 'Your shirt is just rubbish!'),
      catWoman = new CatWoman('catWoman', 'Kate', 'female', cat.saying);

