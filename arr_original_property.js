 /* Array.prototype.extraProperty="ram"

const arr=[1,2,3,4]
for(let v in arr){
    console.log(v)
}

output
=0,1,2,3,extraProperty
remove extraProperty
*/
const arr = [1, 2, 3];
for (let v in arr) {
    if (arr.hasOwnProperty(v)) {
        console.log(v);
    }
}

