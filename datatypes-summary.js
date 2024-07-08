// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 35763547678251532n


// Reference (Non Primitive) 

// Array, Objects, Functions

const heros = ["CaptainAmerica", "IronMan", "Thor"];
let myObj = {
    name: "saad",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);