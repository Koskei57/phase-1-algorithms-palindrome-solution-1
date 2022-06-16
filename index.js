function reverseString(word) {
    return word.split("").reverse().join("");
}

function isPalindrome(word) {
    const reverseWord = reverseString(word);
    return word === reverseWord;

}

/* 
  Add your pseudocode here
reverse the input string
if the reverse string is the same as the input
return true
else
return false

*/

/*
  Add written explanation of your solution here
our code simply creates an array from the input string,reverses the keyed in array
returns a true if the now reversed is the same as the input word in the array
and returns false otherwise. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("EXpecting: true");
    console.log("=>", isPalindrome("a"));
    console.log("");

    console.log("EXpecting: true");
    console.log("=>", isPalindrome("abba"));
    console.log("");

    console.log("EXpecting: false");
    console.log("=>", isPalindrome("dab"));
    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;