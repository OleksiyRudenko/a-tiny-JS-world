// создадим родительский класс World
class WorldInhabitant {
  // обьявляем поля (свойства)
  
  // объявляем метод конструктора (ожидаем на входе значения)
  constructor(name, species, gender, saying){
      // инициализация полей
      this.name = name;
      this.species = species;
      this.gender = gender;
      this.saying = saying;
  }
// объявление метода toString()
// toString() возвращает строку, представляющую объект
// обращение к собственному атрибуту через this
  toString() {
     return `${this.name}; ${this.species}; ${this.gender}; ${this.saying}; `;
  }
}

// создадим два класса наследующие от родительского часть свойств
class Human extends WorldInhabitant {
  constructor(name, species, gender, legs, hands, saying) {
     super(name, species, gender, saying); //наследуем поля от родителя, и добавляем еще два поля
     this.legs = legs;
     this.hands = hands;
  } 
  
  toString() {
    return super.toString() + `${this.legs}; ${this.hands}; `
  }
}

class Animal extends WorldInhabitant {
  // наследуем четыре свойства от родителя и добавляем лапы для животных
  constructor(name, species, gender, paws, saying) {
     super(name, species, gender, saying) //наследуем поля от родителя, и добавляем еще два поля
     this.paws = paws;
  }

  toString(){
    return super.toString() + `${this.paws}; `
  }
}

// создаем экземпляр жителя и передаем параметыр
// этот экземпляр с собственным состоянием свойств класса
let man = new Human(
  'human',
  'Joey',
  'male',
  2,
  2,
  'Hi',
  );

// создаем новый экземпляр жителя
let woman = new Human(
  'human',
  'Rey',
  'female',
  2,
  2,
  'Bye',
  );

// создаем новый экземпляр жителя
let cat = new Animal(
  'cat',
  'Allen',
  'female',
  4,
  'Mau',
  );
  
// создаем новый экземпляр жителя
let dog = new Animal(
  'dog',
  'Johnny',
  'male',
  4,
  'Woof',
  );

[man, woman, cat, dog].map(el => print(el)); 
