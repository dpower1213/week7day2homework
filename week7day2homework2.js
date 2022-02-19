//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let len = arr.length
console.log(len)
function replaceEvens(arr){
    for (i=0, len, text = ""; i < len; i+=2)
    {
        arr.splice(i,1,"even index")
    };
    console.log(arr)
    };
replaceEvens(arr)
// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]