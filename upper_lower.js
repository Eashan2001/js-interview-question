const UL=(char)=>{
    if(char.charCodeAt(0)>= 65 && char.charCodeAt(0)<= 90  ){
        return true
    }
    else{
        return false
    }
}

console.log(UL("A"))