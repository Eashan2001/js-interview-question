const reverse=(str)=>{
  
    let words = str.trim().split(' ');
    let reverseWord=words.reverse().join(' ');
    return reverseWord

  

}
console.log(reverse(" i am eashan"))