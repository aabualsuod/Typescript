////Q1
console.log("Q1");       
console.log("------------");

let firstName: string = "Ahmad";
let age: number = 20;

console.log("Name:", firstName);
console.log("Age:", age);


////Q2
console.log("Q2");  
console.log("------------");

let a = 100;    // Block scoped, mutable
const b = 200;  // Block scoped, immutable
var c = 300;    // Function scoped, mutable

////Q3
console.log("Q3");       
console.log("------------");

let num: number = 10;
let str: string = "First Homework!";
let isActive: boolean = true;
let notDefined: undefined = undefined;

console.log(num + 10);           
console.log(str.toUpperCase()); 
console.log(isActive ? "Active" : "Inactive");  
console.log(notDefined);       

////Q4
console.log("Q4");       
console.log("------------");

let num2: number = 10;
//num2 = "Hello"; //Type 'string' is not assignable to type 'number'.

//Q5
console.log("Q5");       
console.log("------------");

let inferred = "should be string";  
console.log(typeof inferred); // "string"

//Q6
console.log("Q6"); 
console.log("------------");

let strQ6: string = "6666";
let numQ6: number = parseInt(strQ6); // string to number

console.log(numQ6);  

// Type assertion example
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length; 
console.log(strLength); 

//Q7
console.log("Q7");  
console.log("------------");

type Employee = {
  name: string;
  Posistion: string;
};

let emp1: Employee = {
  name: "Ala",
  Posistion: "Developer",
};

console.log(emp1.name); 
console.log(emp1.Posistion);  

//Q8
console.log("Q8");  
console.log("------------");

let numbersArr: number[] = [1, 2, 3, 4];

numbersArr.push(5);  
console.log(numbersArr);  

numbersArr.pop();    
console.log(numbersArr);  

for (let number of numbersArr) {
  console.log(number);  
}

//Q9
console.log("Q9"); 
console.log("------------");

// enum Color {
//   Red = "Red",
//   Green = "Green",
//   White = "White",
//   Blue = "Blue",
// }

// let selectedColor: Color = Color.Green;
// console.log(selectedColor); // "Green"

//Q10
console.log("Q10");
console.log("------------");

let isNull: null = null;
let isUndefined: undefined = undefined;

console.log(isNull);        // null
console.log(isUndefined);   // undefined

