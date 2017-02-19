/* Insertion Sort
   
   Does an insertion sort on an unsorted list of values.

   */





var insertionSort = (function() {  
//*** Private


    //Insertion Sort function
    var sort = function(array) {

            var len = array.length;
            for (var i = 0; i < len; i++) {
                var tmp = array[i]; //Copy of Current number that needs to be sorted

                //compare tmp with all numbers to the left(already sorted part) of the list of numbers
                //If the tmp value is LESS than the number being compared, then shift it to the right.
                for (var j = i - 1; j >= 0 && (array[j] > tmp); j--) {
                    //Shift the number
                    array[j + 1] = array[j];
                }
                //If tmp is GREATER than the number being compared, then stop.
                //Insert tmp into the correct position 
                array[j + 1] = tmp;
            }


    };


//*** Pubilc
    return { 
        sort: sort
    };


})();

var array = [5, 3, 1, 2, 4];  
insertionSort.sort(array);  
alert(array);  