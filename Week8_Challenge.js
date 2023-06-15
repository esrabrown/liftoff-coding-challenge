/* 

Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples

charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4

*/


function charCount(myChar, str) {

    let num=0;
    
    for(let i=0; i<str.length; i++){
      if(myChar.toLowerCase() == str[i].toLowerCase()){
        num += 1;
      }
    
    }
      return num;
  }
  
  console.log(charCount("a", "Esra"));
  console.log(charCount("n", "banana"));