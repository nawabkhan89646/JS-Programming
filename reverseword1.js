//Reverse Words
function reverseWords(input) {
    let words = input.split(' ');
    let reverseWords = [];
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        let reverseWord = '';
        for(let j = word.length - 1; j >= 0; j--) {
            reverseWord += word[j];
        }
        reverseWords.push(reverseWord);
    }
    return reverseWords.join(' ');
}
let input = "I am a good Boy";
let output = reverseWords(input);
console.log(output); //I ma a doog yob

