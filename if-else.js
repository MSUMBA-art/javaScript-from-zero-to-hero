const age = 15;


if (age >= 18) {
    console.log("Alex can drive 🚕");
} else {
    const yearsLeft = 18 - age;
    console.log(`Alex is too young, wait another ${yearsLeft} years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20 ;
} else {
    century = 21;
}
console.log(century);