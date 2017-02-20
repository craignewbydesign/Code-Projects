/* Insertion Sort using es6
   
   Does an insertion sort on an unsorted list of values.

   */


//Insertion Sort function

class insertionSort {
	constructor(array) {
		this.array = array;

	}  

	sort(){
	    var len = this.array.length;
	    for (var i = 0; i < len; i++) {
	        var tmp = this.array[i]; //Copy of Current number that needs to be sorted

	        //compare tmp with all numbers to the left(already sorted part) of the list of numbers
	        //If the tmp value is LESS than the number being compared, then shift it to the right.
	        for (var j = i - 1; j >= 0 && (this.array[j] > tmp); j--) {
	            //Shift the number
	            this.array[j + 1] = this.array[j];
	        }
	        //If tmp is GREATER than the number being compared, then stop.
	        //Insert tmp into the correct position 
	        this.array[j + 1] = tmp;  
	    }
	}
}


var array = [5, 3, 1, 2, 4];  
var s = new insertionSort(array);
s.sort();  
alert(array);  

// Unit test for Insertion Sort
console.assert(
  array[0] === 1,
  array[1] === 2,
  array[2] === 3,
  array[3] === 4,
  array[4] === 5
);
