const maxInArr = (arr) => {
    if (arr.length === 0) {
        return null; // or handle empty array as you prefer
    }
    let maxi = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }  
    return maxi;
}

console.log(maxInArr([2, 54, 2, 6])); // should print 54
