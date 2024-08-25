const mmm = (arr) => {
    let sum = 0; // Initialize sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Accumulate the sum
    }
    let mean = sum / arr.length; // Calculate the mean
    return mean;
}

console.log(mmm([1, 2, 3])); // Correct function call
