function fibo(number){
    let ans=[0,1]
    
    if(number===0) return [];
    if(number===1) return ans[0];
    if(number===2) return ans[1];


    a=ans[0]
    b=ans[1]
    for(let i=2;i<=number;i++){
        temp=a+b;
        ans.push(temp)
       a=b
       b=temp
        

    }


return ans



}

console.log(fibo(6));