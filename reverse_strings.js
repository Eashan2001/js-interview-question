const reverse_string = (str) => {
    // let char = str.trim().split('');
    // char = char.reduce((accum, curEle) => {
    //     return curEle + accum;
    // }, ''); // Initial value for accum is set to an empty string
    // return char;
    let ans=" ";
    for(let i=str.length-1;i>=0;i--){
        ans=ans+str[i]
    
    }
    return ans;
}

console.log(reverse_string("hello"));
