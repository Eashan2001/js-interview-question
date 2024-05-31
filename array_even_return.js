function ArrayEven(arr, n) {
    let newArr = []; // Initialize an empty array to store even numbers
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]); // Push the even number into the new array
        }
    }
    return newArr; // Return the array containing even numbers
}

let arr = [1, 4, 2, 6, 7, 9];
let n = 6;
console.log(ArrayEven(arr, n));
