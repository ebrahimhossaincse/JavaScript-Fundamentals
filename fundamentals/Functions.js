function sum(num1, num2) {
    return num1 + num2;
}

console.log('Summation: '+sum(2, 3));

// function with a parameter called 'name'
function greet(name) {
    console.log(`Hello ${name}`);
}

// pass argument to the function
greet("Ebrahim");


function toCelsius(fahrenheit) {
    let res = (5/9) * (fahrenheit-32);
    return console.log("Celsius: "+res);
}
toCelsius(98)

const multiply = function(num1, num2) {
    return console.log(num1 * num2);
}
multiply(3,5)

const add = (a,b) => a + b;
console.log(add(5, 8))

const divide = (num1, num2) =>{
    if(num2 === 0){
        console.log("Can't divided by Zero")
    }
    return console.log(num1 / num2);
}
divide(24,8)
divide(4,0)

function summation(...numbers) {
    return numbers.reduce((sum, number) => sum+number, 0)
}
console.log(summation(1,2,3,4,5,6,7,8,9,10))


