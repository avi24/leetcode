/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // O(nlog(n)) sorting leaves us with:
 // mergesort
 // heapsort
 // quicksort
 // timsort
 const sortArray = function(nums) {

    function mergesort(array) {
        // base case: single element array
        if (array.length === 1) {
            return array;
        }

        // use the middle index of the array as the pivot
        const middle = Math.floor(array.length/2);

        // recursively split array into two halves
        const leftArray = mergesort(array.slice(0, middle));
        const rightArray = mergesort(array.slice(middle, array.length));

        // merge the now-sorted array
        return merge(leftArray, rightArray);
    }

    // helper function to merge the sorted arrays
    function merge (left, right) {
        let result = [];
        let i=0, j=0;

        // compare the elements in each sub-array and merge them in a sorted array
        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        // add any remaining array values once one sub-array is exhausted
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    return mergesort(nums);
};