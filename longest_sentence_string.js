const find = (str) => {
    let words = str.trim().split(' ');  // Split the string into words
    let longestWord = words.reduce((accum, curEle) => {
        if (curEle.length > accum.length) {
            return curEle;
        } else {
            return accum;
        }
    }, ""); // Initial value for accum is an empty string
    return longestWord;
}

console.log(find("i am "));
