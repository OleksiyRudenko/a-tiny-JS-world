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
  // объявление метода printing()
  printing(){
      // обращение к собственному атрибуту через this
      this.name
      this.species
      this.gender
      this.saying
  }
}

// создадим два класса наследующие от родительского часть свойств
class Human extends WorldInhabitant {
  constructor(name, species, gender, legs, hands, saying) {
     super(name, species, gender, saying); //наследуем поля от родителя, и добавляем еще два поля
     this.legs = legs;
     this.hands = hands;
  } 
  
  printing(){
    super.toString() //вызываем метод родителя
    this.legs
    this.hands
  }
}

class Animal extends WorldInhabitant {
  // наследуем четыре свойства от родителя и добавляем лапы для животных
  constructor(name, species, gender, paws, saying) {
     super(name, species, gender, saying) //наследуем поля от родителя, и добавляем еще два поля
     this.paws = paws;
  }

  printing(){
    super.toString() //вызываем метод родителя
    this.paws
  }
}

// создаем экземпляр жителя и передаем параметыр
// этот экземпляр с собственным состоянием свойств класса
let men = new Human(
  'human',
  'Joey',
  'male',
  2,
  2,
  'Hi',
  );

men.printing(print([
  men.name,
  men.species,
  men.gender,
  men.legs,
  men.hands,
  men.saying,
])) // печатаем мен и его свойства


// создаем новый экземпляр жителя
let women = new Human(
  'human',
  'Rey',
  'female',
  2,
  2,
  'Bye',
  );
women.printing(print([
  women.name,
  women.species,
  women.gender,
  women.legs,
  women.hands,
  women.saying,
])) // печатаем вумен и её свойства

// создаем новый экземпляр жителя
let cat = new Animal(
  'cat',
  'Allen',
  'female',
  4,
  'Mau',
  );
cat.printing(print([
  cat.name,
  cat.species,
  cat.gender,
  cat.paws,
  cat.saying,
])) // печатаем cat и её свойства

// создаем новый экземпляр жителя
let dog = new Animal(
  'dog',
  'Johnny',
  'male',
  4,
  'Woof',
  );
dog.printing(print([
  dog.name,
  dog.species,
  dog.gender,
  dog.paws,
  dog.saying,
])) // печатаем dog и его свойства
