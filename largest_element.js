function large(arr){
    let lar=arr[0][0]
    for(let ele of arr){
        for(let eleIn of ele){
            if(lar<eleIn){
                lar=eleIn
            }
        }
    }
    return lar;
}
let arr = [[4, 5, 7], [8, 9, 4]];
console.log(large(arr));