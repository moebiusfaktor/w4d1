// let and const

// variables declared with var can be re-declared

var name = "John";
console.log(name);
var name = "Jane";
console.log(name);

let lastName = "Doe";
// let lastName = "Doe"; Uncaught SyntaxError: Identifier 'lastName' has already been declared

const age = 21;
// const age = 42; Uncaught SyntaxError: Identifier 'age' has already been declared

// variables declared with let or var can be re-assigned

/*
var city = "Paris";
city = "Berlin";
console.log(city);
*/
let country = "France";
country = "Germany";
console.log(country);

const continent = "Europe";
// continent = "Europe"; Uncaught TypeError: Assignment to constant variable.

const person = {
  name: "John"
};

person.name = "Jane";

Object.freeze(person);

person.name = "Tarzan";

console.log(person.name); // "Jane"

// Hoisting

// var, let and const hoist, but only var is initialized with a value of undefined, thus making it available for access even before its declaration
// let and const are uninitialized and will throw an error if tried to access beforehand

// console.log(b); // Uncaught ReferenceError: Cannot access 'c' before initialization
let b = 42;

// console.log(c); // Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 42;

console.log(a);
var a = 42;

// Scope

// variables declared with let and const have `block scope`. They're available only within the brackets where they're declared (as long as they're made available before trying to access them). Scope leaks (to the bottom) so they're also available within nested blocks.

if (true) {
  let d = 0;

  d++;

  console.log(d); // 1

  for (let i = 0; i < 5; i++) {
    d++;
  }
  console.log(d); // 6
}

function showScope() {
  const e = 42;
  const c = 21; // shadowing

  if (true) {
    console.log(e); //
  }

  console.log("c: ", c); // shadowing
}

showScope();

// var global scope

if (true) {
  var f = 0;
}

console.log(f);

// var local or function scope

function foo() {
  if (true) {
    var g = false;
  }
  console.log(g);

  if (1) {
    // truthy
    console.log(g);
  }
}

foo();
// console.log(g); // Uncaught ReferenceError: g is not defined

// String interpolation

const str = `Hello World!`;

const bike = {
  color: "green",
  make: "motobecane",
  gears: 10
};

// ES5
var description =
  "My bike is a" +
  " " +
  bike.color +
  " " +
  bike.make +
  " " +
  "that comes with" +
  " " +
  bike.gears +
  " " +
  "!!!!";

//  ES6

const newDescription = `My bike is a ${bike.color} ${
  bike.make
} that comes with ${bike.gears} !!!!`;

console.log(description);
console.log(newDescription);

// ES5
var content = "<div> \
    <h1>Hello world!</h1> \
</div>";

console.log(content);

// ES6
const newContent = `<div>
    <h1>Hello world!</h1>
</div>`;

console.log(newContent);

// String methods

const str1 = "To be, or not to be, that is the question.";

// includes
// determines whether one string can be found within another string, returning true or false

console.log(str1.includes("to be")); // true
console.log(str1.includes("apple")); // false
console.log(str1.includes("To be", 1)); // false
console.log(str1.includes("To be", 0)); // true

// the second parameter is the index where the search starts

// startsWith

console.log(str1.startsWith("To be")); // true
console.log(str1.startsWith("question")); // false
// console.log(str1[33]); // 'q'
console.log(str1.startsWith("question", 33));
true;
// the second parameter is the index where the search starts

// endsWith

console.log(str1.endsWith("question.")); // true
console.log(str1.endsWith("to be")); //false
console.log(str1.endsWith("to be", 19)); // true

// the second parameter is the length it should consider

// repeat
// creates and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

const chorus = "Because I'm happy. ";

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(27));

function generateShape(int) {
  const shape = "+";

  const str = `${shape.repeat(int)}\n`.repeat(int);

  return str.substring(0, str.length - 1);
}

// Destructuring
// Creating variables that bear the same name as the properties in the object we're destructuring.

const campus = {
  city: "Berlin",
  bootcamps: ["WebDev", "Data", "UX/UI"],
  address: "EichhornStr. 3",
  zipCode: 10785,
  language: "english",
  GM: "Mike",
  phoneNumbers: []
};

// ES5
/*
const city = campus.city;
const bootcamps = campus.bootcamps;
console.log(city);
console.log(bootcamps);
*/
// ES6

/*
const { city } = campus;
const { bootcamps } = campus;
console.log(city);
console.log(bootcamps);
console.log(campus);
*/
// ES5
// const city = campus.city;
// const bootcamps = campus.bootcamps;
// const GM = campus.GM;
// const address = campus.address;
// const zipCode = campus.zipCode;
// ES6
let {
  city,
  bootcamps,
  GM,
  address,
  zipCode,
  phoneNumbers,
  building = "Atrium Tower"
} = campus;

console.log(city);
city = "Paris";
console.log(bootcamps);

phoneNumbers.push(123);
console.log(campus);

console.log(building);
