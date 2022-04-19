// 1. in js we have 3 kinds of operators

//a. arthematic operator
//b. conditional operator
//c. logical operator
//d. arthematic operator
// + - * / % ** exponentioal
console.log(2+2); //4
console.log(3-1); //2
console.log(4*3); //12
console.log(10/5); //2
console.log(10%3); //1 
console.log(2**3); //2*2*2 =8

let a = 2;
//post increment operator
console.log(a+1); // 3
console.log(a++); // 2
console.log(a) //3

// post decrement operator 
console.log(a--); //2
console.log(a); //1

// pre increment / pre decrement
console.log(++a); //3

//urany operator / binary operator
// both are called operator + sigh is called operator
//2 + 2
console.log(2+); // binary operator need 2 operands , + - *

// unary operator need only 1 operand: ++ -- typeof
console.log(typeof "hello"); // it will come out as a string 
console.log(typeof true); // it will come out as a boolean
console.log(typeof 45); // it will come out as a number
console.log(typeof undefined); // it will come out as undefined
console.log(typeof null); //  // it will come out as an object

// convert any number into string or any string into a number 
let num = 23;
console.log(String(num)); // it will convert it into a string
let name = "Jim"
let stringNum = "34";
console.log(Number(stringNum)); 
console.log(typeof Number (stringNum));// if you type it like this it will give what type it is 
let stringNum = "ghbaebnlknrg" // not a real number but it will be converted as a number
console.log(Number(stringNum));