// Object creation
let person = {
    name: "Ebrahim",
    age: 26,
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    },
    info: function () {
        return `Hello, my name is ${this.name}. and my age is ${this.age}.`;
    }
};

// Access properties
console.log(person);
console.log(person.name); // Alice
console.log(person.greet()); // Hello, my name is Alice.
console.log(person.info())