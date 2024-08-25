const VolCount=(str)=>{
    let vowel=["a","e","i","o","u"];
    let arr=str.split("")
    let count=0;
    for(let char of arr){
        if(vowel.includes(char.toLowerCase())){
            count++
        }
    }
    return count;
}
console.log(VolCount("eashan sarkar"))