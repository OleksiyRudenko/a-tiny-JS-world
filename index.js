// создадим родительский класс World
class World {
  // обьявляем поля (свойства)
  
  // объявляем метод конструктора (ожидаем на входе значения)
  constructor(name, species, gender, legs, hands, saying, friends){
      // инициализация полей
      this.name = name
      this.species = species
      this.gender = gender
      this.legs = legs
      this.hands = hands
      this.saying = saying
      this.friends = friends
  }
  // объявление метода printing()
  printing(){
      // обращение к собственному атрибуту через this
      this.name
      this.species
      this.gender
      this.legs
      this.hands
      this.saying
      this.friends
  }
}
// создаем экземпляр жителя и передаем параметыр
// этот экземпляр с собственным состоянием свойств класса
let men = new World(
  'human',
  'Joey',
  'male',
  2,
  2,
  'Hi',
  `women.this.name`
  );

men.printing(print([
  men.name,
  men.species,
  men.gender,
  men.legs,
  men.hands,
  men.saying,
  men.friends,
])) // печатаем мен и его свойства

// создаем новый экземпляр жителя
let women = new World(
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
let cat = new World(
  'cat',
  'Allen',
  'female',
  4,
  0,
  'Mau',
  );
cat.printing(print([
  cat.name,
  cat.species,
  cat.gender,
  cat.legs,
  cat.hands,
  cat.saying,
])) // печатаем cat и её свойства

// создаем новый экземпляр жителя
let dog = new World(
  'dog',
  'Johnny',
  'male',
  4,
  0,
  'Woof',
  );
dog.printing(print([
  dog.name,
  dog.species,
  dog.gender,
  dog.legs,
  dog.hands,
  dog.saying,
])) // печатаем dog и его свойства
