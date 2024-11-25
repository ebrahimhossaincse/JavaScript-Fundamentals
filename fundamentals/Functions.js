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