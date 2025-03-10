// Define the array
const cats = ["Milo", "Otis", "Garfield"];

// Append a cat destructively
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Prepend a cat destructively
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Remove the last cat destructively
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Remove the first cat destructively
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Append a cat non-destructively
function appendCat(name) {
    return [...cats, name];
}

// Prepend a cat non-destructively
function prependCat(name) {
    return [name, ...cats];
}

// Remove the last cat non-destructively
function removeLastCat() {
    return cats.slice(0, -1);
}

// Remove the first cat non-destructively
function removeFirstCat() {
    return cats.slice(1);
}

// Export functions (only if using modules)
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};

