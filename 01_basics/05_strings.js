const name = "saad"
const repoCount = 2

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('saad-sv-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "   saad    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saad.com/saad%20vasaya"

console.log(url.replace('%20', '-'))

console.log(url.includes('suar'))

console.log(gameName.split('-'));