// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const var1 = "I can walk in the park all day!"
console.log(var1.slice(18, 22));
// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const var2 = "Hello World"
console.log(var2.toUpperCase());
// Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
const var3 = "Hello Earthling"
console.log(var3.toLowerCase());
// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const var4 = "JavaScript"
console.log(var4.slice(3, 6));
// Check if the sentence "nice shoes" contains the letter l or n. 
const var5 = "nice shoes"
console.log(var5.includes("L"), var5.includes("n"));
// Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
console.log(var2[0].toUpperCase() + var2 + var2[0].toUpperCase());
// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
console.log(var2.slice(-3) + var2 + var2.slice(-3));
// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
console.log(var4[9].toUpperCase() + var4.slice(1, 9) + var4[0]);
// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
let firstName = "Maria"
let city = "Berlin"
let job = "teacher"
console.log("My name is " + firstName + " . I live in " + city + " and I am a " + job);
// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const var6 = "the quick brown fox"
console.log(var6[0].toUpperCase() + var6.slice(1));