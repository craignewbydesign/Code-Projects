/* Recursion - Palindrome Checker
   
       Checks if a string is a palindrome.
       Returns TRUE if a string is a palindrome.
       Returns FALSE if a string is not a palindrome.
       */





var Palindrome = (function() {  

//*** Private

    // Returns the first character of the string str
    var firstCharacter = function(str) {
        return str.slice(0, 1);
    };

    // Returns the last character of a string str
    var lastCharacter = function(str) {
        return str.slice(-1);
    };

    // Returns the string that results from removing the first
    // and last characters from str
    var middleCharacters = function(str) {
        return str.slice(1, -1);
    };

    var isPalindrome = function(str) {
        // base case #1
        // If there is only 1 character in the string,
        // It is automatically a palindrome.
        // return true;
        if(str.length <= 1 ) {
            return true;
        }
        
        // base case #2
        // If the firstCharacter and lastCharacter are different,
        // It is NOT a palindrome.
        // return false;
       if(firstCharacter(str)  !== lastCharacter(str)){
           return false;
       }
        
        // recursive case
        // Test if a word is a palindrome.
        // 1.  Take the first and last letter of any string, 
        // 2.  Check if the first and last characters are equal,
        // 3.  Move in one character from the first and last character in the string,
        // 4.  Repeat the test if the characters are equal, etc...
        return isPalindrome(middleCharacters(str));
        
    };


    // Main
    var checkPalindrome = function(str) {
        alert("Is this word a palindrome? " + str + "\n\n" + isPalindrome(str));
    };



//*** Pubilc
    return { 
        checkPalindrome: checkPlindrome,
        isPalindrome: isPaindrome
    };


})();





// Test Palindrome Checker
Palindrome.checkPalindrome("a");
console.assert(Palindrome.isPalindrome("a"), true);

Palindrome.checkPalindrome("motor");
console.assert(Palindrome.isPalindrome("motor"), false);

Palindrome.checkPalindrome("rotor");
console.assert(Palindrome.isPalindrome("rotor"), true);

Palindrome.checkPalindrome("aljgoj;wlke");
console.assert(Palindrome.isPalindrome("aljgoj;wlke"), false);

Palindrome.checkPalindrome("aaaaaaaaaaaaaa");
console.assert(Palindrome.isPalindrome("aaaaaaaaaaaaaa"), true);
