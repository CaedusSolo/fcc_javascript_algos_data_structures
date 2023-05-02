function palindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, "");
    str = str.toLowerCase();
  
    let reversedStr = str.split("").reverse().join("");  //reverse the string

    if(str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye")

// alternative

function palindromeChecker(str) {
    str = str.replace(/[^0-9a-z]/gi, '')
    str = str.toLowerCase();
    
    let reversedStr = "";
  
    for (let i=str.length-1;i>=0;i--) {
      reversedStr += str[i];
    }
    
    if (reversedStr === str) {
      return true;
    } else {
      return false;
    }
  
  } 
  
  palindromeChecker("eye"); 