const remo = (arr) => {
    let newArr = [...new Set(arr)];
    return newArr;
}

console.log(remo([11, 2, 1, 2, 3, 3, 4, 4, 4])); // Output should be [11, 2, 1, 3, 4]
