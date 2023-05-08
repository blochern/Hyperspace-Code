/*

Given a string made of alphanumeric characters,

return true if the string is a palindrome (can be read backwards or forwards), or false if it is not

(you may need to split the string into an array)

*/

// declare a function to house the algorithm
const isPalindrome = str => {
    // if the input is empty (""), return true (ending the function)
    if (str === "") {
        return true;
    }
    // create a new variable, assigned to an array of the string's characters
    let reversedString = str.split("");
    // reverse the array
    reversedString = reversedString.reverse();
    // join the characters in the array into a string using .join("")
    reversedString = reversedString.join("");
    // if the new string deeply equals the old string
    if (reversedString === str) {
        // return true (ending the function)
        return true;
        // otherwise
    } else {
        // return false (ending the function)
        return false;
    }
}