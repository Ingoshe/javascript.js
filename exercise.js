//  check whetther number is divisible by 2
let num = 95;
if (num % 2 == 0) {
  console.log("Number Divisible By 2");
} else {
  console.log("Number not divisible by 2");
}
// check eligibility for voting
let age = 18;
if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log("Not eligible for voting");
}
// check whether day of the week is Monday using switch
let day = 9;
switch (day) {
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
  case 3:
    console.log("Friday");
    break;
  default:
    console.log("Day is not Monday");
}
// checking leap year
let year = 2005;
if (year % 4 == 0) {
  console.log("leap year");
} else {
  console.log("rich year");
}
// ,check positive,negative or zero
let number = -5;
if (number > 0) {
  console.log("number is positive");
} else if (number < 0) {
  console.log("number is negative");
} else if (number == 0) {
  console.log("number is zero");
} else {
  console.log("number does not exist");
}
