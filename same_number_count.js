const countSame=(arr)=>{
    let frequency={}
    for(let value of arr ){
        frequency[value]=(frequency[value] ||0) +1
    }
    return frequency

}
console.log(countSame([1,1,2,3,3,3,3,3,3,4,4]))