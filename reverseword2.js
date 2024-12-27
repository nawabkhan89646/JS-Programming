//Reverse Word
function reverseWords(input) {
    return input.split(" ").reverse().join(" ");
  }
  
  const input = "I am good boy";
  const output = reverseWords(input);
  console.log(output); // Output: "boy good am I"
  
