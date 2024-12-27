// Function to Remove Duplicates From String
function removeDuplicates(str) {
    let result = ""; 
    let seen = new Set();
    
    for (let char of str) {
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }
    
    return result;
}

// Example usage
let input = "aabbccddeeff";
console.log("String with duplicates removed:", removeDuplicates(input));
