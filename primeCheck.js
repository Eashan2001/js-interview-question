
function prime(n){
    if(n<=1) return false;
    for(i=2;i*i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}

result=prime(7)
if(result){
    console.log(`This number is prime`)
}
else{
    console.log(`This number is not prime`)
}
