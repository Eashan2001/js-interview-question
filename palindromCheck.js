function palindrome(str){
    return str === str.split("").reverse().join(""); 
}
result = palindrome("madm");

if(result){
    console.log(`The string is a palindrome.`);
} else {
    console.log(`The string is not a palindrome.`);
}
