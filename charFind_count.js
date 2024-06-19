const countChar=(word,char)=>{
    word=word.toLowerCase();
    char=char.toLowerCase();
    totalCount=word.split("").reduce((accum,curChar)=>{
        if(char===curChar){
            accum++;
        }
        return accum;
    },0)
    return totalCount;
}

console.log(countChar("eaaashan","a"))