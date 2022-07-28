/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

// тип: собака, кошка, женщина, мужчина
// имеют: ноги, руки, имя, пол, может сказать
   const resident1 = {
      species: 'dog',
      legs: 4,
      hands: 0,
      name: 'Boby',
      gender: 'male',
      saying: 'woof',
    };
    const resident2 = {
      species: 'cat',
      legs: 4,
      hands: 0,
      name: 'Linda',
      gender: 'female',
      saying: 'meow',
    };
    const resident3 = {
      species: 'man',
      legs: 2,
      hands: 2,
      name: 'Ben',
      gender: 'male',
      saying: 'Hellow, how are you?',
     
    };
    const resident4 = {
      species: 'woman',
      legs: 2,
      hands: 2,
      name: 'Janie',
      gender: 'female',
      saying: 'I am fine',
     
    };
    const resident5 = {
      species: 'woman',
      legs: 2,
      hands: 2,
      name: 'Nino',
      gender: 'female',
      saying: 'And you?',
      
    };
    
    const friends = {
      resident5: resident4.name,
    }
    //print(resident1.species + '; ' + resident1.name + '; ' + resident1.gender + '; ' + resident1.legs + '; ' + resident1.hands + '; ' + resident1.saying);
    
    const residents = [resident1, resident2, resident3, resident4, resident5];
    const keys = ['species', 'name', 'gender', 'legs', 'hands', 'saying'];
    
    const resident = residents.map(el => {
      const description = keys.map(key => { return el[key] })
      //console.log(description);
      return description;
    });
    // console.log(resident);

    resident.map(el => print(el.join('; ')));   

    


