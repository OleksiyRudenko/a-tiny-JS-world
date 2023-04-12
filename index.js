import { print } from './js/lib.js';

class Inhabitants {
	constructor(name, species, gender, legs, hands, saying) {
		this.name = name;
		this.species = species;
		this.gender = gender;
		this.legs = legs;
		this.hands = hands;
		this.saying = saying;
	}
	prepareForPrinting() {
		print(`species:${this.species}; name:${this.name}; gender:${this.gender};` +
			`legs:${this.legs}; hands:${this.hands}; saying:${this.saying}`);
	}
}

class Humans extends Inhabitants {
	constructor(name, gender, saying) {
		super(name, 'human', gender, 2, 2, saying);
	}
	prepareForPrinting() {
		return [super.prepareForPrinting()].join('; ')
	}
}

class Pets extends Inhabitants {
	constructor(name, species, gender, saying) {
		super(name, species, gender, 4, 0, saying)
	}

	prepareForPrinting() {
		return [super.prepareForPrinting()].join('; ')
	}
}
class Cats extends Pets {
	constructor(name, gender, saying) {
		super(name, 'cat', gender, saying)
	}
}
class Dogs extends Pets {
	constructor(name, gender, saying) {
		super(name, 'dog', gender, saying)
	}
}

const RyanMan = new Humans('Ryan', 'male', 'Hold on, hold on, Miranda.');
const JohnMan = new Humans('John', 'male', 'I beg your pardon!');
const BradMan = new Humans('Brad', 'male', 'wassup guys?');

const EmmaWoman = new Humans('Emma', 'female', 'Special for you!');
const AnaWoman = new Humans('Ana', 'female', 'I love u!');
const KateWoman = new Humans('Kate', 'female', 'Honey, can you hear me?');

const AzreaCat = new Cats('Azrea', 'female', 'Murrr...');
const ZumikCat = new Cats('Zumik', 'male', 'Meow');

const ArchiDog = new Dogs('Archi', 'female', 'Woof');
const ButchDog = new Dogs('Butch', 'male', 'Woof-woof!');

const inhabitants = [JohnMan, RyanMan, BradMan, EmmaWoman, AnaWoman, KateWoman, AzreaCat, ZumikCat, ArchiDog, ButchDog];
inhabitants.forEach(inhabitant => {
	print(inhabitant.prepareForPrinting());
});
