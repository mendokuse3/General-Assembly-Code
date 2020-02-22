// VERBAL QUESTIONS
// 1. An argument is the input when you are calling the function.  the parameter is the input represented within the function
// 2. console.log simply prints to the console and is not useable.  return can make it so that the value of the function becomes whatever is returned and can be used within other functions.

// PALINDROME
const checkPalindrome = string => {
    if (string === string.split("").reverse().join("")){
        return true;
    }
    return false;
}
console.log(checkPalindrome("radar"));