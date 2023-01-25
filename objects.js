// // const car = [
// //     "Alex",
// //     "Msumba",
// //     2023 - 1983,
// //     "Self Employed",
// //     ["Duncan", "Mary"],
// // ];

// // const alex = {
// //     firstName: "Alexander Junior",
// //     lastName: "Msumba",
// //     age: 2023 - 1983,
// //     job: "Self employed",
// //     friends: ["Duncan", "Mary"]
// // }

// // console.log(alex);

// // DOT VS BRACKET NOTATION 
// // const alex = {
// //     firstName: "Alexander Junior",
// //     lastName: "Msumba",
// //     age: 2023 - 1983,
// //     job: "Self employed",
// //     friends: ["Duncan", "Irene", "Mary"],
// //     friendList: 3
// // }



// // console.log(alex.lastName); //dot notation
// // console.log(alex["firstName"]); //bracket notation

// // const nameKey = "Name";
// // console.log(alex["first" + nameKey]);//bracket notation
// // console.log(alex["last" + nameKey]);//bracket notation


// // //retrieving element from an object
// // const interestedIn = prompt("What do you want know about firstName, lastName, age, job and friends");


// // if (alex[interestedIn]) {
// //     console.log(alex[interestedIn]);
// // } else {
// //     console.log("Wrong request!!  firstName, lastName, age, job and friends");
// // }

// // // add element to an object by using dot and bracket notation

// // alex.location = "Cape Town";
// // alex['twitter'] = "@alexander";
// // alex.gender = "Male";
// // alex["married"] = true;
// // console.log(alex);

// // console.log(`${alex.firstName} has  ${alex.friends.length} friends, and his best friend is ${alex.friends[1]}`);

// const alex = {
//   firstName: "Alexander Junior",
//   lastName: "Msumba",
//   birthYear: 1983,
//   job: "Self employed",
//   friends: ["Duncan", "Irene", "Mary"],
//   hasDriversLicense:  true,

//   // calcAge: function (birthYear) {
//   //     return 2023 - birthYear;
//   // }

//   // calcAge: function () {
//   //    console.log(this);
//   //     return 2023 - this.birthYear;
//   //  }

//   calcAge: function () {
//       this.age = 2023 - this.birthYear;
//         return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} ${this.lastName} is ${this.calcAge()} years old,  ${this.job} and he has ${this.hasDriversLicense ? "a valid" : "no" } drivers license`;
//   }
// };

// console.log(alex.calcAge());

// console.log(alex.age);
// console.log(alex.hasDriversLicense);
// console.log(alex.job);
// console.log(alex.birthYear);
// console.log(alex.friends.length);
// console.log(alex.friends);

// // challenge

// console.log(alex.getSummary());



