// 5 falsy values:
// 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Alex"));
console.log(Boolean({}));

// const money = 100;
// if (money) {
//     console.log("Dont spend all");
// } else {
//     console.log("Get a job");
// }

let height;
if (height) {
    console.log("yay, height is defined");
} else {
 console.log("height is undefined");   
}