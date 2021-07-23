const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log(age >= 19 ? "you can drink" : "you can not drink");
}
