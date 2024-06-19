const GenerateHash=(str)=>{
    if(str.length>280 && str.trim().length===0){
        return false;
    }

    str=str.split(" ")
    str=str.map((curEle)=> curEle.replace(curEle[0],curEle[0].toUpperCase()))
    str=`#${str.join(" ")}`

    console.log(str);
}
console.log(GenerateHash("i am eashan"))


//another into map function  
curEle.charAt(0).toUpperCase()+curEle.split(1)