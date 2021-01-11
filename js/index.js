// Iteration 1: Names and Input
var hacker1 = "Frank Martin"; //driver
var hacker2 = "Jason Statham"; //navigator

console.log("The driver's name is  " + hacker1 );

console.log("The navigator's name is " + hacker2);  

console.log("----------2---------")

// Iteration 2: Conditionals
if ((hacker1.length) > (hacker2.length)) {
  console.log(`The driver has the long name, it has  "${hacker1.length}"  characters`);
} else if ((hacker1.length) < (hacker2.length)) {
  console.log(`It seems that the navigator has the longest name, it has "${hacker2.length}"  characters`);
} else {
  console.log(`Wow, you both have equally long names, "${hacker1.length}"  characters`);
}

console.log("-----------3------------");
// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));//name separated by spaces
console.log(hacker2.split("").reverse().join("")); //name reverse

