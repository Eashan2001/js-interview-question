// const startWith = (str, substr) => {
//     return str.toLowerCase().startsWith(substr.toLowerCase());
// }

// console.log(startWith("Hello World", "hello")); // Output: true
// console.log(startWith("Hello World", "world")); // Output: false


// otherway

const startWith = (str, substr) => {
    return str.toLowerCase().slice(0,substr.length)===substr.toLowerCase();
}

console.log(startWith("Hello World", "hello")); // Output: true
console.log(startWith("Hello World", "world")); // Output: false
