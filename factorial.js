// away1------------------------
// function factorial(n){
//     if(n===0) return 1;
//     return n*factorial(n-1);
// }
// result=factorial(4)
// console.log(` factorial :  ${result}`)


//away2-----------------
const factorial=(num)=>{
    if(num==0) return 1;
    return num* factorial(num-1)
}

console.log(factorial(2))