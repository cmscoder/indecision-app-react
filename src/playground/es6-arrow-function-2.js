// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// the keyword - no longer bound

const user = {
  name: "Camila",
  cities: ["Lisbon", "New York", "Rio de Janeiro"],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + " has lived in " + city);
    });
  },
};

user.printPlacesLived();

// Challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multipliedd
};

console.log(multiplier.multiply());
