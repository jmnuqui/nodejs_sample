
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings(){
    return(`My Name is ${this.name} and i am ${this.age}`);
  }
}

module.exports = Person;
