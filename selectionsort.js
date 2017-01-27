/* Selection Sort
   
   Javascript implementation of a selection sort.
   Returns either the index of the location in the array,
   or -1 if the array did not contain the targetValue 
*/
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {

    var minIndex; // holds the index of the curren lowest value in array[]

    for (var i = 0; i < array.length - 1; i++) {
        startIndex = i; //holds the current starting index
        minIndex = indexOfMinimum(array, startIndex);
        swap(array, minIndex, startIndex);

    }


};

var array = [22, 11, 99, 88, 9, 7, 42];
// Print Unsorted array[]
alert("Selection Sorted:  " + array);

// Sort Array
selectionSort(array);
// Print Selection Sorted array[]
alert("Selection Sorted:  " + array);

//println("Array after sorting:  " + array);
//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);