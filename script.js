class Pet {
    constructor(name, animal_type, age) {
      this._name = name;
      this._animal_type = animal_type;
      this._age = age;
    }
  
    set_Name(name) {
      this._name = name;
    }
  
    set_Animal_Type(animal_type) {
      this._animal_type = animal_type;
    }
  
    set_Age(age) {
      this._age = age;
    }
  
    get_Name() {
      return this._name;
    }
  
    get_Animal_Type() {
      return this._animal_type;
    }
  
    get_Age() {
      return this._age;
    }
  }
  
  let pets = [];
  
  function createPet() {
    let name = document.getElementById("name").value;
    let animal_type = document.getElementById("animal_type").value;
    let age = Number(document.getElementById("age").value);
    let pet = new Pet(name, animal_type, age);
    pets.push(pet);
    document.getElementById("result").innerHTML += `<p>Питомец: ${pet.get_Name()}, ${pet.get_Animal_Type()}, ${pet.get_Age()}</p>`;
  }
  
  function showYoungestDog() {
    //список всех собак
    let dogs = pets.filter(pet => pet.get_Animal_Type() === "собака");
    //самая молодая собака
    let youngest_dog = dogs[0];
    for (let dog of dogs) {
      if (dog.get_Age() < youngest_dog.get_Age()) {
        youngest_dog = dog;
      }
    }
    document.getElementById("youngest_dog").innerHTML = "";
    document.getElementById("youngest_dog").innerHTML = `Кличка самой молодой собаки: ${youngest_dog.get_Name()}`;
  }
  