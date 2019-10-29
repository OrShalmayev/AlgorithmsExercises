// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // Make an array from the string where there is a space
    let arr = str.split(' ');
    // loop through the array
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i+1];
    }
    console.log(arr);

}
capitalize('a lazy fox')
module.exports = capitalize;
