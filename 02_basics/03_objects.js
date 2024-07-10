/* singleton - if an object is created from a constructor, 
then it'll be a singleton object */
// Object.create()

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Saad",
    "full name": "Saad Vasaya",
    [mySym]: "mykey1",
    age: 21,
    location: "Mumbai",
    email: "saad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "saad@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "saad@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());