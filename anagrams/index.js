// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    /********************** Solution 1 **********************/ 
        // let s1 = stringA.replace(/[^\w]/g,'').split``.sort().join``.toLowerCase();
        // let s2 = stringB.replace(/[^\w]/g,).split``.sort().join``.toLowerCase();
        // console.log(s1,s2)
        // return s1===s2;
    /********************** Solution 2 **********************/
        // let obj1 = {};
        // let obj2 = {}; 
        // let counter = 1;
        // let isAnagram = false;
        // for(let arg of arguments){
        //     arg = arg.replace(/[^\w]/g,'').toLowerCase();
        //     for(let char of arg){
        //         if(!eval(`obj${counter}`)[char]){
        //             eval(`obj${counter}`)[char] = 1;
        //         }else{
        //             eval(`obj${counter}`)[char]++;
        //         }
        //     }
        //     counter++;
        // }

        // for(let k in obj1){
        //     if(obj1[k]===obj2[k]){
        //         isAnagram = true;
        //     }else{
        //         isAnagram = false;
        //         break;
        //     }
        // }

        // return isAnagram;


    /********************** Solution 3 **********************/
        // let obj1 = {};
        // let obj2 = {}; 
        // let counter = 1;
        // let isAnagram = false;
        // for(let arg of arguments){
        //     arg = arg.replace(/[^\w]/g,'').toLowerCase();
        //     for(let char of arg){
        //         if(!eval(`obj${counter}`)[char]){
        //             eval(`obj${counter}`)[char] = 1;
        //         }else{
        //             eval(`obj${counter}`)[char]++;
        //         }
        //     }
        //     counter++;
        // }

        // counter = 1;
        // while(counter <= 2){
        //     let currentObj = eval(`obj${counter}`);
        //     for(let k in currentObj){
        //         let secObj = counter === 1 
        //            ? 
        //            eval(`obj${counter+1}`) 
        //            : 
        //            eval(`obj${counter-1}`);
        //         if(currentObj[k]===secObj[k]){
        //             isAnagram = true;
        //         }else{
        //             isAnagram = false;
        //             break;
        //         }
        //     }
        //     counter++;
        // }

        // return isAnagram;


}

//anagrams('RAIL! SAFETY!', 'fairy tales')


/********************** Solution 4 **********************/
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
//     // if the length of the strings is not equal then its not anagram.
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }

//     return true;

// }

// function buildCharMap(str){
//     const charMap = {};
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

//anagrams('RAIL! SAFETY!', 'fairy tales')


/********************** Solution 5 **********************/
function anagrams(stringA, stringB){
    let s1 = cleanString(stringA);
    let s2 = cleanString(stringB);
    return s1 === s2;
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split``.sort().join``;
}


module.exports = anagrams;

