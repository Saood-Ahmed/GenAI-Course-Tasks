//Tests for equality and inequality with strings
var string1 = "Hello";
var string2 = "Hi";
console.log("Is string1 equal to string2? I predict false.");
console.log(string1 === string2);
console.log("Is string1 not equal to string2? I predict true.");
console.log(string1 !== string2);
// Tests using the lower case function
var upperCaseString = "HELLO";
console.log("Is upperCaseString in lowercase equal to 'hello'? I predict true.");
console.log(upperCaseString.toLowerCase() === "hello");
console.log("Is upperCaseString in lowercase not equal to 'hello'? I predict false.");
console.log(upperCaseString.toLowerCase() !== "hello");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 2;
var num2 = 4;
console.log("Is num1 less than num2? I predict true.");
console.log(num1 < num2);
console.log("Is num1 greater than or equal to num2? I predict false.");
console.log(num1 >= num2);
// Tests using "and" and "or" operators
var boolean1 = true;
var boolean2 = false;
console.log("Is boolean1 true and boolean2 true? I predict false.");
console.log(boolean1 && boolean2);
console.log("Is boolean1 true or boolean2 true? I predict true.");
console.log(boolean1 || boolean2);
// Test whether an item is in an array
var cars = ["mehran", "coure", "civic"];
console.log("Is 'civic' in the cars array? I predict true.");
console.log(cars.includes("civic"));
// Test whether an item is not in an array
console.log("Is 'mira' not in the cars array? I predict true.");
console.log(!cars.includes("mira"));
