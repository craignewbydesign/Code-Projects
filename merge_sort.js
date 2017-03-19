/* Merge Sort
   
   Javascript implementation of a merge sort.
*/
var mergeSort = (function() {

    //*** Private
    //Merge Sort function
    var sort = function(array, p, q, r) {
        var lowHalf = [];
        var highHalf = [];

        var k = p;
        var i;
        var j;
        for (i = 0; k <= q; i++, k++) {
            lowHalf[i] = array[k];
        }
        for (j = 0; k <= r; j++, k++) {
            highHalf[j] = array[k];
        }

        k = p;
        i = 0;
        j = 0;

        // Repeatedly compare the lowest untaken element in
        //  lowHalf with the lowest untaken element in highHalf
        //  and copy the lower of the two back into array

        while (i < lowHalf.length && j < highHalf.length) {
            if (lowHalf[i] < highHalf[j]) {
                array[k] = lowHalf[i];
                i++;
            } else {
                array[k] = highHalf[j];
                j++;
            }

            k++;
        }


        // Once one of lowHalf and highHalf has been fully copied
        //  back into array, copy the remaining elements from the
        //  other temporary array back into the array

        while (i < lowHalf.length) {
            array[k] = lowHalf[i];
            i++;
            k++;
        }
        while (j < highHalf.length) {
            array[k] = highHalf[j];
            j++;
            k++;
        }


    };

    //*** Public
    return {
        sort: sort
    };

})();




var array = [3, 7, 12, 14, 2, 6, 9, 11];
mergeSort.sort(array, 0,
    Math.floor((0 + array.length - 1) / 2),
    array.length - 1);
console.log("Array after merging: " + array);
console.assert(array, [2, 3, 6, 7, 9, 11, 12, 14]);


var array1 = [5096, 3, 1, 65, 7, 35, -9, -221];
mergeSort.sort(array1, 0,
    Math.floor((0 + array1.length - 1) / 2),
    array1.length - 1);
console.log("Array after merging: " + array1);
console.assert(array1, [-221, -9, 1, 3, 7, 35, 65, 5096]);