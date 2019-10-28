// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    /** SOLUTION 1 **/
    // let newArr = [];
    // while(array.length){
    //   newArr.push(array.splice(0, size));
    // }
    // return newArr;

    /** SOLUTION 2 **/
    // Create empty array to hold chunks
    const chunked = [];
    // for each element in the unchunked array
    for(let element of array){
        // retrieve the last element in chunked
        const last = chunked[chunked.length -1];
        // if last element does not exists or if its length is equal to chunk size
        if(!last || last.length === size){
            // push new chunk into chunked with current element
            chunked.push([element]);
        }else{
            // add the curreent element into the chunked
            last.push(element);
        }
    }
    
    return chunked;

}

module.exports = chunk;
