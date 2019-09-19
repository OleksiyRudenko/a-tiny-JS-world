const INHABITANT = {
   properties: ['species', 'name', 'gender', 'legs', 'hands', 'saying', 'friends'],
   species: {
      human: 'human',
      dog: 'dog',
      cat: 'cat',
      femile: 'femile',
      male: 'male'
   },
}

const dog = {
   species: INHABITANT.species.dog,
   name: 'Nika',
   gender: INHABITANT.species.femile,
   legs: 4,
   hands: 0,
   saying: 'gav-gav',
   friends: ['man'],
   toString
}

const cat = {
   species: INHABITANT.species.cat,
   name: 'Musia',
   gender: INHABITANT.species.femile,
   legs: 4,
   hands: 0,
   saying: 'mur-mur',
   friends: ['woman', 'catWoman'],
   toString
}

const woman = {
   species: INHABITANT.species.human,
   name: 'Katia',
   gender: INHABITANT.species.femile,
   legs: 2,
   hands: 2,
   saying: 'Pryvit)',
   friends: ['man'],
   toString
}

const man = {
   species: INHABITANT.species.human,
   name: 'Petro',
   gender: INHABITANT.species.male,
   legs: 2,
   hands: 2,
   saying: 'Zdorov!',
   friends: ['woman', 'dog'],
   toString
}

const catWoman = {
   species: INHABITANT.species.human,
   name: 'Murka',
   gender: INHABITANT.species.femile,
   legs: 2,
   hands: 2,
   saying: cat.saying,
   friends: ['cat'],
   toString
}


function toString() {
  return INHABITANT.properties.map(prop => `${this[prop]}`).join('; ');
}

[man, woman, dog, cat, catWoman]
  .forEach(inhabitant => {
      print(inhabitant);
});


