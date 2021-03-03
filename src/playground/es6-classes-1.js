// Setup constructor to take name and age (default to 0)
// getDescription - Camila Silva is 27 year(s) old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return "Hi. i am" + this.name + "!";
    return `Hi. I am ${this.name}!`;
    // return `Hi. I am ${this.name}. I'm visiting from ${this.location}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description = description += `Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.location) {
      greeting += ` I am visiting from ${this.location}.`;
    }
    return greeting;
  }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Camila Silva. I'm visiting from Portugal.
// 2. Hi. I am Camila Silva.

const me = new Traveler("Camila Silva", 27, "Portugal");
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());
