/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
 const dog = {
  species: 'dog',
  name: 'Toby',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof-woof!',
  friends : function friends (){
	  return cat.name + " " + woman.name + " " + man.name;
  }
};

 const cat = {
  species: 'cat',
  name: 'Tom',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meow!',
  friends : function friends (){
	  return dog.name + " " + woman.name + " " + man.name;
  },
  setSaying :  function setSaying(saying){
	  cat.saying = saying;
	  catWoman.saying = saying; 
  }
};

 const woman = {
  species: 'human',
  name: 'Olena',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Hello world!',
  friends : function friends (){
	  return dog.name + " " + cat.name + " " + man.name;
  }
};

 const man = {
  species: 'human',
  name: 'Sergejs',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'Hello world!',
  friends : function friends (){
	  return dog.name + " " + cat.name + " " + woman.name;
  }
};

 const catWoman = {
  species: 'cat',
  name: 'Sabrina',
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: 'meow!',
  friends : function friends (){
	  return dog.name + " " + woman.name + " " + man.name;
  }
};


// ======== OUTPUT ========
print("I am:" + dog.species + ';' + "My name is:" + dog.name + ';' + "My gender is:" + dog.gender + ';' + "I have " + dog.legs + " legs" + ';' + "I have " 
+ dog.hands + " hands" + ';' + "My favorite saying is:" + dog.saying + ';' + "My friends are:" + dog.friends());

print("I am:" + cat.species + ';' + "My name is:" + cat.name + ';' + "My gender is:" + cat.gender + ';' + "I have " + cat.legs + " legs" + ';' + "I have " 
+ cat.hands + " hands" + ';' + "My favorite saying is:" + cat.saying + ';' + "My friends are:" + cat.friends());

print("I am:" + woman.species + ';' + "My name is:" + woman.name + ';' + "My gender is:" + woman.gender + ';' + "I have " + woman.legs + " legs" + ';' 
+ "I have " + woman.hands + " hands" + ';' + "My favorite saying is:" + woman.saying + ';' +  "My friends are:" + woman.friends());

print("I am:" + man.species + ';' + "My name is:" + man.name + ';' + "My gender is:" + man.gender + ';' + "I have " + man.legs + " legs" + ';'
+ "I have " + man.hands + " hands" + ';' + "My favorite saying is:" + man.saying + ';'  + "My friends are:" + man.friends());

print("I am:" + catWoman.species + ';' + "My name is:" + catWoman.name + ';' + "My gender is:" + catWoman.gender + ';' + "I have " + catWoman.legs + " legs" + ';'
+ "I have " + catWoman.hands + " hands" + ';' + "My favorite saying is:" + catWoman.saying + ';'  + "My friends are:" + catWoman.friends());

cat.setSaying("meooow!");
print("Cat`s new saying is: " + cat.saying + " and " + "CatWoman`s new saying is: " + catWoman.saying);



