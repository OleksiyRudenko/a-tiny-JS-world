// Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Person {

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this._arms = 0;
        this._paws = 0;
        this._sound = "mute";
        this._friends = [];
    }

    setArms(_arms) {
        return this._arms = _arms;
    }

    getArms() {
        return this._arms;
    }

    setPaws(_paws) {
        return this._paws = _paws;
    }

    getPaws() {
        return this._paws;
    }

    say(_sound) {
        return this._sound = _sound;
    }

    getSound() {
        return this._sound;
    }

    addFriend(friend) {
        this._friends.push(friend);
    }

    getFriends() {
        return this._friends;
    }
}

class Animal extends Person {
    constructor(name, sex, type) {
        super(name, sex)
        super.setPaws(4);
        this.type = type;
    }
}

class Human extends Person {
    constructor(name, sex) {
        super(name, sex)
        super.setArms(2);
    }
}

class Mutant extends Human {
    constructor(name, sex, animal) {
        super(name, sex);
        this.animal = animal;
        super.setArms(2);
        this.type = `mutant with ` + this.animal.type;
        this._sound = this.animal.getSound();
    }
}

function display(inhabitant) {
    if (inhabitant.getFriends().length === 0) {
        inhabitant._friends = "no friends";
    }
    if (inhabitant.constructor.name === `Human`) {
        print(`${inhabitant.constructor.name};  <strong>${inhabitant.name}</strong>; ${inhabitant.sex}; ${inhabitant.getArms()}; ${inhabitant.getPaws()}; <em> ${inhabitant.getSound()} </em>; ${inhabitant.getFriends()};`, 'div');
    } else {
        print(`${inhabitant.constructor.name}; ${inhabitant.type}; <strong>${inhabitant.name}</strong>; ${inhabitant.sex}; ${inhabitant.getArms()}; ${inhabitant.getPaws()}; <em> ${inhabitant.getSound()}; </em>; ${inhabitant.getFriends()};`, 'div');
    }
}

// Create inhabitants:
const man = new Human(`Jack`, `male`);
const woman = new Human(`Olga`, `female`);

const dog = new Animal(`Demi`, `male`, `dog`);
const cat = new Animal(`Matrosskin`, `male`, `cat`);

cat.say("meow");
const cat_woman = new Mutant(`Pussycat`, `female`, cat);
cat_woman.addFriend(woman.name);

dog.say("bark-bark-bark!");
dog.addFriend(man.name);
dog.addFriend(woman.name);
dog.addFriend(cat.name);


display(dog);
display(man);
display(woman);
display(cat);
display(cat_woman);

