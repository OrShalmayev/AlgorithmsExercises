// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    /** SOLUTION 1 **/
    // Math.sign return if number is positive 1 else -1
    // tilde returns -1 to 0, 
    // if the number given is negative then do this..
    // if(!~Math.sign(n)){
    //     return -parseInt(n.toString().split``.reverse``.join``);
    // }else{
    //     return parseInt(n.toString().split``.reverse``.join``);
    // }

    /** SOLUTION 2 **/
    let reversed = n.toString().split``.reverse``.join``;
    return parseInt(reversed) * Math.sign(n);

}

module.exports = reverseInt;
