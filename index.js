/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

let inhabitants = getInhabitants();

function getInhabitants () {
    const man = {
        species: 'man',
        name: 'Homer',
        gender: 'male',
        legs: 2,
        hands: 2,
        saying: 'D\'oh!',
    };
    const woman = {
        species: 'woman',
        name: 'Marge',
        gender: 'female',
        legs: 2,
        hands: 2,
        saying: 'Mmm~mmmmm!',
    };
    const dog = {
        species: 'dog',
        name: 'Santa\'s Little Helper',
        gender: 'female',
        legs: 4,
        hands: 0,
        saying: 'Arf-arf!',
    };
    const cat = {
        species: 'cat',
        name: 'Snowball',
        gender: 'male',
        legs: 4,
        hands: 0,
        saying: 'Meaou-meaou!',
    };
    const catWoman = {
        species: 'catWoman',
        name: 'Selina Kyle',
        gender: 'female',
        legs: 2,
        hands: 2,
        get saying () {return cat.saying},
        set saying (nextVerb) {return cat.saying},
    };

    man.friends = [woman, dog];
    woman.friends = [man, cat, dog];
    cat.friends = [catWoman];

    return [man, woman, cat, dog, catWoman];
};

// printInfo(inhabitants);

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

const BASE_SCHEME = ['species', 'name', 'gender', 'legs', 'hands', 'saying', 'friends'];

function inhabitantHandler (inhabitant) {
    let parts = BASE_SCHEME.map((propName) => {
        if (propName === 'friends') {
            const hasFriends = inhabitant.friends && Array.isArray(inhabitant.friends);
            console.log(inhabitant.friends);
            console.log(inhabitant);
            return (hasFriends)
                ? inhabitant.friends.map((friend) => (friend.name)).join(', ')
                : 'has no friends';
        }

    return inhabitant[propName] || `has no ${propName}`;
    });

    let message = parts.join('; ');
    window.print(message);
}

inhabitants.forEach(inhabitantHandler);
