// Object creation
let person = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    },
};

// Access properties
console.log(person.name); // Alice
console.log(person.greet()); // Hello, my name is Alice.
