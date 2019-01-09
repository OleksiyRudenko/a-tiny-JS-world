const catSay = 'meow';

const dog = {
    species: 'dog',
    name: 'Toby',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'woof-woof!',
};

const cat = {
    species: 'cat',
    name: 'Markiz',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: catSay,
    friends: ['Mouse', 'Tom'],
};

const woman = {
    species: 'human',
    name: 'Sarah',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'hey, sweetheart!',
    friends: ['Rex', 'Tom', 'Jenn'],
};

const man = {
    species: 'human',
    name: 'Joe',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'hello there',
};

const catWoman = {
    species: 'cat-woman',
    name: 'Cat Woman',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: catSay,
};

const listObj = (obj) => {
    let str = '';

    for (item in obj) {
        if (obj[item] !== 0) str += `${obj[item]}; `;
    }

    return str;
};

print(listObj(dog));
print(listObj(cat));
print(listObj(woman));
print(listObj(man));
print(listObj(catWoman));
