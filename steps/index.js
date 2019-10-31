// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/** SOLUTION 1 **/
function steps(n) {
    let str = '';
    for(let i = 0 ; i <  n; i++){
        str += ' ';
    }

    for(let j = 0; j < n; j++){
        str = str.split``;
        str[j] = '#';
        str.length = n;
        str = str.join``;
        console.log(str);
    }

}
steps(4);





module.exports = steps;
