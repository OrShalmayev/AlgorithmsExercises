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
// function steps(n) {
       // create a new string
//     let str = '';
       // iterate from 0 to n to add spaces
//     for(let i = 0 ; i <  n; i++){
//         str += ' ';
//     }
       // iterate from 0 to n
//     for(let j = 0; j < n; j++){
           // make the string array
//         str = str.split``;
           // at ascending order postion change the array value from space to '#'
//         str[j] = '#';
           // cut the array to length of n
//         str.length = n;
           // make the array string
//         str = str.join``;
           // log the string
//         console.log(str);
//     }

// }

/** SOLUTION 2 **/
function steps(n) {
    // iterate from 0 to n(row)
    for(let row=0; row<n; row++){
        // create empty string
        let stair = '';
        //iterate from 0 to n (column)
        for(let col = 0; col < n; col++){
            // if the current column is equal to or less than the current row
            // add a '#' to stair
            if(col <= row){
                stair+='#';
            }else{
                // add a space to stair
                stair+=' ';
            }
        }
        // log stair
        console.log(stair);
    }
}





module.exports = steps;
