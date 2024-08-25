const camelCase = (str) => {
    // Trim whitespace and split the string into words
    let words = str.trim().split(' ');

    // Process each word
    words = words.map((word, index) => {
        if (index === 0) {
            // Convert the first word to lowercase
            return word.toLowerCase();
        } else {
            // Capitalize the first letter of subsequent words and lowercase the rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    // Join the words to form the camelCase string
    return words.join('');
}

console.log(camelCase(" hello Ram")); // Output: helloRam
console.log(camelCase("convert this string to camel case")); // Output: convertThisStringToCamelCase
