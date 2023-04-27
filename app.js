//VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(num1, num2,) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(min(10, 30));

//EASY: Create an array of students holding their last name, first name, 
// and age with 3 students. To validate, please log a greeting with the first 
// name, last name and age of the 2nd student. The output should look like 
// "Hello, my name is John Doe and I'm 19 years old."

let studentsFirName = ["John", "Mary", "Star"];
let studentLasName = ["Doe", "Em", "Will"];
let studentsAge = [16, 18, 17];
// studentsFirName.length[2];
// studentLasName[2];
// studentsAge[2];

console.log("Hello, my name is" + " " + studentsFirName[2] + " " + studentLasName[2] + " " + "and I am" + " " + studentsAge[2] + " " + "years old.");

//MEDIUM: Create a program that accepts a number (1-12) as input and logs to 
// the console that number and its corresponding month. For example: if the user 
// enters the number 3, then it should return the month “March.” Alert the user if 
// they enter an invalid number (e.g. less than 1 or greater than 12).

// const numberOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function month(numberOfMonth) {
    if (numberOfMonth === 1){
    return "January"
}else if  (numberOfMonth === 2) {
    return "February"
}else if  (numberOfMonth === 3) {
    return "March"
}else if  (numberOfMonth=== 4) {
    return "April"
}else if  (numberOfMonth === 5) {
    return "May"
}else if  (numberOfMonth === 6) {
    return "June"
}else if  (numberOfMonth === 7 ) {
    return "July"
}else if  (numberOfMonth === 8) {
    return "August"
}else if  (numberOfMonth === 9) {
    return "September"
}else if  (numberOfMonth === 10) {
    return "October"
}else if  (numberOfMonth === 11) {
    return "November"
}else if  (numberOfMonth === 12) {
    return "December"
}else{
    return 'Invaild number. #1-12 accepted'
}
}
console.log(month(10));
console.log(month(13));

//HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
 // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

let tomHeight = 9;
let tomMass = 8;
let tomBMI = tomMass / tomHeight;

let jerryHeight = 10;
let jerryMass = 45;
let jerryBMI = jerryMass / jerryHeight;

if (tomBMI > jerryBMI) {
    console.log("Is Tom BMI higher than Jerry's? True");
}else {
    console.log("Is Tom BMI higher than Jerry's? False");
}
console.log("tom:" + " " + tomBMI);
console.log("jerry:" + " " + jerryBMI);
