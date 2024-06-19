const LongestWord=(str)=>{
    // check str !==NUll
    if(str.trim().length===0){
        return false;
    }

    //string to array
    strArr=str.split(" ");
    
    // strArr=strArr.sort((a,b)=>(b.length-a.length));
    // console.log(strArr);
    // return strArr[0];


    //another way
    return strArr.reduce((accum,curWord)=>(accum.length< curWord.length? curWord:accum)," ");
};
    
  
console.log(LongestWord("ram is a good boy"))