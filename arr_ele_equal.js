const arrEleEqual=(arr1,arr2)=>{
    if(arr1.length != arr2.length) return false
   return  arr1.every((curEle,index)=> curEle=== arr2[index])

}

console.log(arrEleEqual([1,2,3],[1,2,3]))
console.log(arrEleEqual([1,2,3],[2,2,3]))