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