const findModes = (arr) => {
    const frequency = {}; // Object to store frequency of each element
    let maxFreq = 0; // Variable to store the maximum frequency
    const modes = []; // Array to store all modes

    // Count the frequency of each element
    for (let value of arr) {
        frequency[value] = (frequency[value] || 0) + 1;
        if (frequency[value] > maxFreq) {
            maxFreq = frequency[value];
        }
    }

    // Find all elements with the maximum frequency
    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    return modes;
}

console.log(findModes([1, 2, 2, 3, 3, 3, 4, 4, 4])); // Output: [3, 4]
