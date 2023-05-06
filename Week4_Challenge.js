/* 
Longest Word

Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

*/


function LongestWord(sen) { 


    // code goes here  
  
    let words = sen.replace(/[^0-9a-zA-Z\s]/g, "").split(" ");
  
    let longestWord = "";
    let longestLength = 0;
  
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestLength) {
        longestWord = words[i];
        longestLength = words[i].length;
      }
    }
  
   
    return longestWord;
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));