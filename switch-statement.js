const day = "Tuesday";

switch (day) {
  case "monday": // day === "monday"
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
    console.log("Go to midweek service");
    break;
  case "Thursday":
    console.log("Go to home-cell");
    break;
  case "Friday":
  case "Saturday":
    console.log("Fetch Irene");
    break;
  case "Sunday":
    console.log("Go to C.R.M.I Church");
    break;
  default:
    console.log("not a valid day");
}

if (day === "Friday") {
  console.log("Its weekend");
} else if (day === "Tuesday") {
  console.log("weekdays, got to work");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Time for midweek");
} else {
    console.log("Not a day available");
}
