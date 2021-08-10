// ! JavaScript Next-Gen Refresher

// ! Understanding 'let' and 'const'

let myName = "John";
myName = "JP";
console.log(myName);

const yourName = "John";
// TODO yourName = "JP"; Uncomment this line to see the error. A const cannot be changed.
console.log(yourName);

// ! Arrow Functions

function myOldFunction() {
  console.log("Old Function");
}

myOldFunction();

const myNewFunction = () => {
  console.log("New Function");
};

myNewFunction();

// ! Exports and Imports (Modules)

// TODO In a seperate file called person.js

const person = {
  name: "Max",
};

// ? export default person;

//  TODO In a second file called utility.js there is more exported.

// ? export const clean = () => {};

// ? export const baseData = 10;

//  TODO To import this into another file called app.js

// ? import person from "./person.js";
// ? import { baseData } from "./utility,js";
// ? mport { clean } from "./utility,js";

// ! Classes

class Person {
  name = "Max";
  call = () => {};
}

const aPerson = new Person(); // TODO Create a class object
aPerson.call(); // TODO Call the class function
console.log(aPerson.name); // TODO Log the class to the console.

// TODO Class injections

class Gender {
  constructor() {
    this.gender = "Male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class AnotherPerson extends Gender {
  constructor() {
    super(); // Must be run when extending another class and using a constructor function. It also initializes the other class.
    this.name = "Ryan";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person2 = new AnotherPerson();
person2.printMyName();
person2.printGender();

// ! Classes, Properties and Methods

// The constructor method can be skipped in ES7

// Functions are also changing to arrow functions in ES7

class Gender2 {
  gender = "Modern Male";

  printGender = () => {
    console.log(this.gender);
  };
}

class AnotherPerson2 extends Gender2 {
  name = "Modern Ryan";

  printMyName = () => {
    console.log(this.name);
  };
}

const person3 = new AnotherPerson2();
person3.printMyName();
person3.printGender();

// ! Spread and Rest Operators

// ? Spread ... Used to split up array elements OR object properties
// TODO const NewArray = [...oldArray, 1, 2]
// TODO const newObject = {...oldObject, newProp: 5}

// ? Rest ... Used to merge a list of function arguments into an array
// TODO function sortArgs(...args) {
// TODO return args.sort()
// TODO }

const numbers1 = [1, 2, 3];
const newNumbers1 = [...numbers1, 4];
console.log(newNumbers1);

const person4 = {
  name: "John",
};

const newPerson4 = {
  ...person,
  age: 28,
};

console.log(newPerson4);

// ! Desctructuring

// Easily extract single array elements or object properties and store them in variables

[a, b] = ["Hello", "Max"];
console.log(a); // 'Hello'
console.log(b); // 'Max'

// {name} = {name: 'Dave', age: 28}
// console.log(name)
