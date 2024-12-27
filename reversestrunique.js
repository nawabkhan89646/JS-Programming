// Reverse String Unique Element
function reverseUniqueString(str){
    let seen = new Set(); // set is a collection of unique values.
    let reversedUniqueStr = "";

    for(let i=str.length - 1; i>=0; i--){
        let char = str[i];
        if(!seen.has(char)){
            seen.add(char);
            reversedUniqueStr += char;
        }
    }
    return reversedUniqueStr;
}
let input = "programming";
let result = reverseUniqueString(input);
console.log(result);