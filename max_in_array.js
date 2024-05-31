function findMax(arr){
    if(arr.length==0){
        return null;
    }
    let max=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

let arr=[1,2,3,42,6]
let result=findMax(arr);
console.log(`maximum in array ${result}`)
