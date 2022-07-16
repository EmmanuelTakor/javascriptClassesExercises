"use strict"


class Person {
    name;
    address;
    race;

    constructor(name,address,race){
this.name = name
this.address = address
this.race = race
    }

    identity(){
        return `Hello my name is ${this.name}.I am from ${this.address}.I am of ${this.race} descent.`
    }
}

let personOne = new Person("Takor","Tiko","African");
console.log(personOne.identity())

class Car {
  name;
  capacity;

  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }

  fullInfo() {
    return `My car is a ${this.name} and it has ${this.capacity}.`;
  }
}

let Car1 = new Car("BMW", "10,000Engine Capacity");
console.log(Car1.fullInfo());
