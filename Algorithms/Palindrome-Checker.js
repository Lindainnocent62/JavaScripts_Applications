function palindrome(str) {
//set the string to lowercase for case sensitivity and exctract the alphanumeric mix
  let myString = str.toLowerCase().match(/[a-z0-9]/g);
//reverse the string...could have easly did myString.reverse();
  let reversedArray=[];
  for(let i= myString.length-1;  i>=0; i--){
    reversedArray.push(myString[i]);
  }
//join the array to have a complete string to compare 
  let reversedString= reversedArray.join("");
  let otherString=myString.join("");
//strictlucomparing the two strings
  return reversedString == otherString;
}

palindrome("eye");
