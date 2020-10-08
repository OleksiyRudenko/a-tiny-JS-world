/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

const SPECIES = {
    dog: 'dog',
    cat: 'cat',
    human: 'human'
};

const GENDER = {
    male: 'male',
    female: 'female',
}
// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
    species: SPECIES.dog,
    legs: 4,
    hands: 0,
    name: 'Lassie',
    gender: GENDER.female,
    say: 'Woof woof',
    friends: ['Donald'],
};

const cat = {
    species: SPECIES.cat,
    legs: 4,
    hands: 0,
    name: 'Garfield',
    gender: GENDER.male,
    say: 'Meow meow',
    friends: ['Donald', 'Rosa Parks'],
};

const man = {
    species: SPECIES.human,
    legs: 2,
    hands: 2,
    name: 'Donald',
    gender: GENDER.male,
    say: 'Need more money',
    friends: [],
};

const woman = {
    species: SPECIES.human,
    legs: 2,
    hands: 2,
    name: 'Rosa Parks',
    gender: GENDER.female,
    say: 'Black lives matter',
    friends: ['Garfield', 'Lassie'],
};


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

const inhabitantToString = ({ friends, name, gender, hands, legs, species, say }) => {
    const friendsString = friends.length ? friends.join(', ') : 'None';

    return `My name is ${name}. I am a ${gender} and i have ${hands} hands and ${legs} legs. My species is ${species}.
I say: '${say}', and have this friends: ${friendsString}`
}

[man, dog, woman, cat].forEach((inhabitant) => print(inhabitantToString(inhabitant)));


