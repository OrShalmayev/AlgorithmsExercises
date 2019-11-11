// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


/***** SOLUTION 2 ******/

function pyramid(n, row=0, str='') {
    if(row===n) return;

    if(str.length=== n*2 -1){
        console.log(str);
        return pyramid(n, row++);
    }

    const midPoint = Math.floor((n*2-1)/2);
    let add;
    if(midPoint-row <= str.length && midPoint+row >= str.length){
        add='#';
    }else{
        add=' ';
    }
    pyramid(n, row, str+add);
}

module.exports = pyramid;

/***** SOLUTION 1 ******/
// function pyramid(n) {
//     let midPoint = Math.floor((n*2 - 1) / 2);
//     for(let row = 0; row < n; row++){
//         let str = '';
//         for(let col = 0; col < 2 * n - 1; col++){
//             if(midPoint - row <= col && midPoint + row >= col){
//                 str+='#';
//             }else{
//                 str+=' ';
//             }
//         }
//         console.log(str);
//     }

// }