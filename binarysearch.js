/* Binary Search
   
   Javascript implementation of a binary search.
   Returns either the index of the location in the array,
   or -1 if the array did not contain the targetValue */


//Binary Search function
var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    
    while(min < max){
        guess = Math.floor((max+min)/2);
        alert("guess: "+array[guess]+"  TARGET: "+targetValue);

        if(array[guess] == targetValue){
            return guess;
        }  
       if(array[guess] < targetValue) {
            min = guess + 1;
        }
        else if(array[guess] > targetValue){ 
            max = guess - 1;   
        }
    
    }
    return (-1 + ": Value does not exist!");
};


// Array of Numbers to be searched
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];





//Test case 1:  First Value in array
var result = doSearch(primes, 2);
alert("Found prime at index " + result);

//Test case 2:  Last Value in array
var result = doSearch(primes, 97);
alert("Found prime at index " + result);


//Test case 3:  Rnd targetValue
var result = doSearch(primes, 89);
alert("Found prime at index " + result);



//Test case 4:  targetValue is too high
var result = doSearch(primes, 1189);
alert("Found prime at index " + result);

//Test case 5:  targetValue is too low
var result = doSearch(primes, -230459);
alert("Found prime at index " + result);


