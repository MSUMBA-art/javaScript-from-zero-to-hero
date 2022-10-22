const age = 23;
// age >= 3 ? console.log("good") : console.log("high"); // This is the same as if else statement

const drink = age >= 3 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "mowa";
} else {
    drink2 = "water";
};

console.log(drink2);

console.log(`I lik to drink ${ age >= 3 ? "wine" : "water"}`);