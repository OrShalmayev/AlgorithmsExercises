// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/** SOLUTION 2 **/
function vowels(str) {
    return str.replace(/[^aeiou]/gi,'').length;
}

module.exports = vowels;

/** SOLUTION 1 **/
// function vowels(str) {
//     let counter = 0;
//     for(let c of str){
//         if('aeiou'.includes(c.toLowerCase())) counter++;
//     }
//     return counter;
// }