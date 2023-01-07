// const friend1 = "Michael";
// const friend2 = "Alexander";
// const friend3 = "Allan";

// // DATA STRUCTURE
// const friends = ["Alex", "Mary", "Michael", "John", "Allan"];
// console.log(friends[1]);

// const years = new Array(1990, 1876, 9853, 2023);
// console.log(years[years.length - 2]);
// console.log(friends.length);
// console.log(friends[friends.length - 2]);

// friends[1] = "Duncan";
// friends[0] = "Joe";
// console.log(friends);

// const firstName = "Alexander";
// const secondName = "Msumba";
// const age = 2023 - 1983;
// const alex = [firstName, secondName, age, friends];
// console.log(alex.length);

// const myName = "AJ";
// const alexander = [myName, "Alexander Junior", 2023 - 1983];
// console.log(alexander);

// // exercise
// const calcAge = function(birthYear) {
//     return 2023 - birthYear
// }

// const myYears = [1998, 2000, 1983, 1978, 2010];

// const age1 = calcAge(myYears[0])
// const age2 = calcAge(myYears[1]);
// const age3 = calcAge(myYears[myYears.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(myYears[0]), calcAge(myYears[1]), calcAge(myYears[myYears.length - 1])]
// console.log(ages);


// BASIC ARRAY OPERATIONS (methods)
// PUSH METHOD
// push method adds an element to the end of array 
const friends = ["Alex", "Mary", "Michael", "John", "Allan"];
const newLength = friends.push("Lee");
console.log(friends);
console.log(newLength);

// UNSHIFT METHOD
// unshift method adds an element to the beginning of array 
friends.unshift("Bertha"); //add element to last
console.log(friends);

// POP METHOD
// POP method remove the last element from the array 
friends.pop(); // remove last
const popped = friends.pop();
console.log(popped);
console.log(friends);

// SHIFT METHOD
// SHIFT method remove the first element from the array 
friends.shift(); //remove first
console.log(friends);

friends.push(23);
console.log(friends.indexOf("John"));//tells position at which element is

console.log(friends.includes("Alex")) //true
console.log(friends.includes("Irene")) //false
console.log(friends.includes(23));

if (friends.includes("Alex")) {
    console.log("Alex is my in-law");
}







