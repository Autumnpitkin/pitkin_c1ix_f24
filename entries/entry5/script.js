// Function to handle coffee selection and apply the corresponding coffee animation
function selectCoffee(coffeeType) {
    // Reset all classes
    const filling = document.querySelector('.filling');
    filling.classList.remove('reset', 'americano', 'au_lait', 'capuccino', 'espresso', 'latte', 'corretto', 'lungo', 'macchiato', 'mocha', 'ristretto');

    // Add the selected coffee class to the cup filling
    filling.classList.add('reset', coffeeType);

    // Update the coffee name text
    const coffeeName = document.querySelector('.coffee_name');
    coffeeName.textContent = coffeeType.charAt(0).toUpperCase() + coffeeType.slice(1); // Capitalize first letter of the coffee name
}

// Add event listeners to each button
document.getElementById("americano").addEventListener("click", function() {
    selectCoffee('americano');
});

document.getElementById("au_lait").addEventListener("click", function() {
    selectCoffee('au_lait');
});

document.getElementById("capuccino").addEventListener("click", function() {
    selectCoffee('capuccino');
});

document.getElementById("corretto").addEventListener("click", function() {
    selectCoffee('corretto');
});

document.getElementById("espresso").addEventListener("click", function() {
    selectCoffee('espresso');
});

document.getElementById("latte").addEventListener("click", function() {
    selectCoffee('latte');
});

document.getElementById("lungo").addEventListener("click", function() {
    selectCoffee('lungo');
});

document.getElementById("macchiato").addEventListener("click", function() {
    selectCoffee('macchiato');
});

document.getElementById("mocha").addEventListener("click", function() {
    selectCoffee('mocha');
});

document.getElementById("ristretto").addEventListener("click", function() {
    selectCoffee('ristretto');
});

