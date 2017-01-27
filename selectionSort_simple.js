/* Selection Sort - simple
   
   Javascript implementation of a selection sort using 1 function.
   selectionSort()
*/



var selectionSort = function(array) {
  for (var i = 0; i < array.length; i++) {
 
    var minIndex = i;  // holds the index of the current lowest value in array[]
 
    // search for the minimum value in the unsorted list
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        // the smallest number has been found
        minIndex = j;
      }
    }
 
    // swap minimum value to sort the array correctly 
    if (minIndex != i) {
      var temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
}
 

var array = [345, 6, 345, 8, 1, 4, 98, 34 ,2364, 0, 34];
// Print Unsorted array[]
alert("Unsorted list:  " + array);

// Sort Array
selectionSort(array);
// Print Selection Sorted array[]
alert("Selection Sorted list:  " + array); 
