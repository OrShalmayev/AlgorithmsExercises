/**
 * 
 * 
    Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

    For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

    The input will be a lowercase string with no spaces.

    Good luck!
 * 
 * 
 */

 /** Solution 1 (by codewars) **/
 function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

/** Solution 2  **/
function capitalize(s){
    let arr = [];
    let evenCapitalized = capitalizeFunc(s);
    let oddCapitalized = capitalizeFunc(s, false);
    arr.push(oddCapitalized);
    arr.push(evenCapitalized);
    return arr;
  };
  
  const capitalizeFunc = (str, even = true)=>{
    let newStr = '';
    let counter = 1;
    for(let c = 0; c < str.length; c++){
     if(even){
        if(counter%2===0) newStr += str[c].toUpperCase();
        else newStr += str[c];
      }else{
        if(counter%2!==0) newStr += str[c].toUpperCase();
        else newStr += str[c];
      }
      counter++;
    }
    return newStr;
  }