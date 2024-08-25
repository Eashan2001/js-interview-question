const avg=(arr)=>{
    let sum = arr.reduce((accum,curEle)=> accum+ curEle,0)
    return sum/arr.length;
}
console.log(avg([2,2,4,2]))  