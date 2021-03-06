// "use strict"

class Person {
  name = "Takorr";
  address;
  race;

  constructor(name, address, race) {
    this.name = name;
    this.address = address;
    this.race = race;
  }

  identity() {
    return `Hello my name is ${this.name}.I am from ${this.address}.I am of ${this.race} descent.`;
  }
}
Person.prototype.ageGroup = "Adult";
Person.prototype.gender = "male";

let personOne = new Person("Takor", "Tiko", "African");

console.log(personOne.gender);

class Car {
  name;
  capacity;

  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }

  get nameCar() {
    return this.name.toUpperCase();
  }

  fullInfo() {
    return `My car is a ${this.name} and it has ${this.capacity}.`;
  }
}
let Car2 = new Car("Honda", "4000Powers");
console.log(Car2.nameCar);

let Car1 = new Car("BMW", "10,000Engine Capacity");
Car.prototype.color = "red";
console.log(Car1.fullInfo());
console.log(Person.name);
console.log(Car1.color);

let ages = [1, 2, 3, 4];

function add(number) {
  return number * 3;
}

console.log(add(3));

ages.forEach((value) => {
  // console.log(value.toLocaleUpperCase())
  console.log(value * 3);
});
// console.log(x)

const agesSet = ages.filter((value) => {
  return value < 5;
});

console.log(agesSet);

for (let i = 0; i < ages.length; i++) {
  let sCet = ages[i] + 1;
  console.log(sCet);
}

let x = ages.forEach((age) => {
  if ((age = 3)) {
    // throw "Error! Age === 3"
  }
});

console.log(x);

let y = ages.forEach((value) => {
  try {
    if (value == 2) {
      1 + 1;
    }
  } catch (error) {
    console.log(error);
  }
});

// console.log(y)

function details(firstName, ...lastName) {
  return lastName;
}

console.log(details("Takor", "Emmanuel", "John"));

function giveDetails(...info) {
  return info;
}

console.log(giveDetails("fromTiko", "Emmanuel", "Takor", "isAnglophone"));

let ids = [1111111111, 2222222, 33333, 44444];
console.log(ids);

let newArray = [];

ids.forEach((id) => {
  if (id !== 44444) {
    newArray.push(id);
  }
});

console.log(newArray);

const someDetailOne = ["I", "am", "a"];
const someDetailTwo = [...someDetailOne, "boy"];

console.log(someDetailTwo);
