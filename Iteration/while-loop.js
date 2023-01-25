// for (let rep = 1; rep <= 11; rep++) {
//     console.log(`listening weight ${rep}`);
// }


// while loop 
let rep = 1
while (rep <= 5) {
    console.log(`listening weight ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 5) + 1;
console.log(dice);

while (dice !== 5) {
    console.log(`You jumped a ${dice}`);
    dice = Math.trunc(Math.random() * 5) + 1;
    if (dice === 5) {
        console.log(`loop is about to end`);
    }
}