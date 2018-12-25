class Parent {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
}

class Animal extends Parent {
  constructor(name, gender) {
    super(name, gender)
    this.hands = 0
    this.legs = 4
  }
}

class Human extends Parent {
  constructor(name, gender) {
    super(name, gender)
    this.kind = 'Human'
    this.hands = 2
    this.legs = 2
    this.say = `Hello, I'm ${this.name}}`
  }
}

class Dog extends Animal {
  constructor(name, gender) {
    super(name, gender)
    this.kind = 'Dog'
    this.say = `woof - woof`
  }
}

class Cat extends Animal {
  constructor(name, gender) {
    super(name, gender)
    this.kind = 'Cat'
    this.say = `meow - meow`
  }
}
class CatWoman extends Human {
  constructor(name, gender) {
    super(name, gender)
    this.say = new Cat().say
  }
}

const printAll = obj => {
  print(
    `${obj.kind}; ${obj.gender}; ${obj.name}; ${obj.legs} legs; ${
      obj.hands ? obj.hands : 'no'
    } hands; ${obj.say}`
  )
}

const specimens = [
  new Cat('Tom', 'male'),
  new Dog('Spot', 'male'),
  new Human('Adam', 'male'),
  new Human('Eva', 'female'),
  new CatWoman('Amber Heard', 'female')
]

specimens.forEach(obj => {
  printAll(obj)
})
