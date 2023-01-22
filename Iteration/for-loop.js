// // console.log("listening weight 1");
// // console.log("listening weight 2");
// // console.log("listening weight 3");
// // console.log("listening weight 4");

// // for loop keeps on running while the condition is TRUE
// // for (let rep = 1; rep <= 11; rep++) {
// //     console.log(`listening weight ${rep}`);
// // }

// const alex = [
//   "Alexander",
//   "Msumba",
//   2023 - 1983,
//   "self employed",
//   ["Irene", "Lloyd", "Bertha"],
//   true,
//   "tall"
// ];


// const types = []

// // the bellow code will stop at 5

// // for (let i = 0; i < 5; i++) {
// //   console.log(alex[i]);
// // }

// console.log("");
// console.log("");
// // the bellow code will log all elements in the array
// for (let i = 0; i < alex.length; i++){
//   // reading from alex array
//   console.log(alex[i], typeof alex[i]);
  
//   // filling types array
//  // types[i] = typeof alex[i];
  
//   types.push(typeof alex[i])
// }

// console.log(types);

// const years = [1999, 2010, 2012, 2013, 1983];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// // CONTINUE AND BREAK STATEMENT
//        //continue
// console.log( "=== ONLY STRING === ");
// for (let i = 0; i < alex.length; i++) {
//   if(typeof alex[i] !== "string") continue
//   console.log(alex[i], typeof alex[i]);
// }
//         //  break 
// console.log("=== BREAK WITH A NUMBER === ");
// for (let i = 0; i < alex.length; i++) {
//   if (typeof alex[i] === "number") break;
//   console.log(alex[i], typeof alex[i]);
// }

const alex = [
  "Alexander",
  "Msumba",
  2023 - 1983,
  "self employed",
  ["Irene", "Lloyd", "Bertha"],
];

// looping backwards

for (let i = alex.length - 1; i >= 0; i--) {
  console.log(i, alex[i]);
}

// for loop inside loop 
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`======== Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 6; rep++) {
    console.log(`exercise ${exercise} lifting weight repetitions ${rep}`);
  }
}





