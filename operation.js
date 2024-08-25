const ArrOperation = (arr) => {
    return arr.reduce((accum, curEle) => accum + curEle * curEle, 0);
}

console.log(ArrOperation([2, 1, 3]));
