// Immediately Invoked Function Expressions (IIFE)
/* Global scope pollution causes problem sometimes. To reduce this,
IIFE functions are used... */

(function chai() {
    // named IIFE
    console.log("DB CONNECTED");
})(); // semicolon is must for ending the function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('saad')

