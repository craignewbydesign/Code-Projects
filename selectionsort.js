/* Selection Sort
   
   Javascript implementation of a selection sort using 3 functions.
   selectionSort()
   indexOfMinimum()
   swap()
*/


var selectionSort = (function() {  

//*** Private

    // swap minimum value to sort the array correctly 
    var _swap = function(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };


    // find the minimum value in the unsorted list
    var _indexOfMinimum = function(array, startIndex) {

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

    // Selection Sort
    var sort = function(array) {

        var minIndex; // holds the index of the current lowest value in array[]

        for (var i = 0; i < array.length - 1; i++) {
            startIndex = i; //holds the current starting index
            minIndex = _indexOfMinimum(array, startIndex);
            _swap(array, minIndex, startIndex);

        }


    };


//*** Pubilc
    return { 
        sort: sort
    };


})();


var array = [22, 11, 99, 88, 9, 7, 42];
// Print Unsorted array[]
alert("Unsorted list:  " + array);

// Sort Array
selectionSort.sort(array);
// Print Selection Sorted array[]
alert("Selection Sorted list:  " + array);

//println("Array after sorting:  " + array);
//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


// Unit test for Selection Sort
console.assert(
  array[0] === 7,
  array[1] === 9,
  array[2] === 11,
  array[3] === 22,
  array[4] === 42,
  array[5] === 88,
  array[6] === 99

);

