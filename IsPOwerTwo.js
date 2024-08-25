const isPowerTwo = (num) => {
    let op = false;
    for (let i = 0; i < num; i++) { // Start from 0 to include 2^0 = 1 case
        if (2 ** i === num) {
            op = true;
            break; // Once we find a match, we can exit the loop
        }
    }
    return op;
}

console.log(isPowerTwo(8)); // Should print true
console.log(isPowerTwo(10)); // Should print false
console.log(isPowerTwo(16)); // Should print true
console.log(isPowerTwo(1)); // Should print true