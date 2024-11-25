// Array methods
let portals = ["Prep", "Sales", "Instructor"];

// Add an item
portals.push("Unified");
console.log(portals);

// Remove the last item
portals.pop();
console.log(portals);

// Loop through an array
portals.forEach((portal, index) => {
    console.log(`Name ${index + 1}: ${portal}`);
});
