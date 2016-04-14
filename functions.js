// Read about the Array.prototype.sort method. Create a function that can be used with sort. 
// This function should take two strings, and return a value that sort can use to determine which is the longest 
// string. Finally, create an array of strings and try to get it sorted using your new function.

function sentenceSorter(string1, string2) {
    var stringsArray = [];
    stringsArray.push(string1, string2);
    stringsArray.sort(function compare(a, b){
        if (a.length < b.length) {
            return 1;
        } else if (a.length > b.length) {
            return -1;
        } else {
            return 0;
        }
    });
    
    return stringsArray[0];
    
}

console.log(sentenceSorter("I like cats", "My cat's name is Apo"));
console.log(sentenceSorter("My cat's name is Apo", "I like cats"));

// Create an array of objects (don’t need to use new here, just regular object literals). 
// These objects will contain a name and email property. 
// Then, run some code that will sort your array by the longest name. 
// Then, run some code that will sort your array by e-mail address in alphabetical order.

var objectsArray = [
    {name: "Apo", email: "apo@catmail.com"},
    {name: "Jack", email: "jack@doglook.com"},
    {name: "Jack", email: "zack@doglook.com"}, // test to see if Jack will be last in the results because the email is zack
    {name: "Pikachu", email: "pikachu@pokemail.com"},
    {name: "Mr.Cat", email: "mrcat@catmail.com"}
];

function longestName() {
    objectsArray.sort(function compare(a, b) {
        if (a.name.length > b.name.length) {
            return -1;
        } else if (a.name.length < b.name.length) {
            return 1;
        } else {
            return 0;
        }
    });
    return objectsArray;
}

function alphabeticalEmails() {
    objectsArray.sort(function compare(a, b) {
        if (a.email < b.email) {
            return -1;
        } else if (a.email > b.email) {
            return 1;
        } else {
            return 0;
        }
    });
    return objectsArray;
} 

console.log(longestName());
console.log(alphabeticalEmails());

// Create a function that can be used with Array.prototype.map. 
// This function should take a number and return its square. 
// Then, use this function with map on an array of numbers to check the result.

var array = [2, 4, 12];

var squared = array.map(function (number) {
    return number*number;
});

console.log(squared);

// Create a function that can be used with Array.prototype.map. 
// This function should be able to take an object and square its “num” property. 
// Then, use this function with map on an array of objects each containing a “num” property.

var numsArray = [
    {num: 2}, 
    {num: 4},
    {num: 16}
];

var squaredNum = numsArray.map(function(obj) {
    return obj.num * obj.num;
});

console.log(squaredNum);

/* In a previous workshop, you had to create a function that took two numbers and an operation 
(add, sub, mult, …) and returned the result of the operation on the two numbers. 
Here we are going to do the same but at a higher order. 
Create a function called operationMaker that takes only a string called operation as argument. 
This string could be “add”, “subtract”, “mult” or “div”. 
Your function will return a function that will take two numbers and return the result of running operation 
on these numbers. The end result should let me do something like this:

var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var multiplier = operationMaker(“mult”);
var product = mult(5, 10); // 50 
*/

function operationMaker(string) {
    return function operation(number1, number2) {
        if (string === "add") {
            return number1 + number2;
        } else if (string === "subtract") {
            return number1 - number2;
        } else if (string === "mult") {
            return number1 * number2;
        } else if (string === "div") {
            return number1 / number2;
        } else {
            return "Please enter add, subtract, mult or div";
        }
    }
}

var adder = operationMaker("add");
var addSum = adder(5, 10);

var multiplier = operationMaker("mult");
var multSum = multiplier(5, 10);

var subtracter = operationMaker("subtract");
var subtraction = subtracter(10, 5);

var diviser = operationMaker("div");
var division = diviser(10, 5); 

console.log(addSum);
console.log(multSum);
console.log(subtraction);
console.log(division);