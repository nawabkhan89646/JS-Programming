//Reverse Word
function reverseString(str){
    let newString = "";
    for(let i=str.length - 1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}
const input = "I am good boy";
const output = reverseString(input);
console.log(output); // yob doog ma I

