const hasDrivingLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDrivingLicense && hasGoodVision); //and
console.log(hasDrivingLicense || hasGoodVision); //or
console.log(!hasDrivingLicense); //not

// const shouldDrive = hasDrivingLicense && hasGoodVision;
// if (hasDrivingLicense && hasGoodVision) {
//     console.log("Alexander should drive!");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = false; //C
console.log(hasDrivingLicense && hasGoodVision && isTired); //or

if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("Alexander should drive!");
} else {
  console.log("Someone else should drive");
}