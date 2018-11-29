/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant{
        constructor(type,name,gender,legs,hands,say) {
            this.type = type;
            this.name = name;
            this.gender = gender;
            this.legs = legs;
            this.hands = hands;
            this.say = say;
            this.getInfo = function () {
                return this.type+";"+this.name+";"+this.gender+";"+this.legs+";"+this.hands+";"+ this.say;
            }
        }

}

const man = new Inhabitant('man','James','male',2,2,'Hello KOTTANS');
const woman = new Inhabitant('woman', 'Alisa','female',2,2,'I hate this world');
const dog = new Inhabitant('dog','Basta','male',4,0,'af-af');
const cat = new Inhabitant('cat','Marpha','female',4,0,'meow-meow');

print(man.getInfo());
print(woman.getInfo());
print(dog.getInfo());
print(cat.getInfo());





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


