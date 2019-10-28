// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    /*********************** SOLUTION 1 ***********************/
    let obj = {};
    let char = '';
    let numShown = 0;
    for (let i = 0; i < str.length; i++){
        if(!(str[i] in obj)){
            obj[str[i]] = 1
        }else if(str[i] in obj){
            obj[str[i]]++;
        }
    }

    for(let k in obj){
        if(obj[k] > numShown){
            numShown = obj[k];
            char = k; 
        }
    }
    return char;
}

module.exports = maxChar;
