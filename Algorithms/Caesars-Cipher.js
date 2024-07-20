function rot13(str) {

  let accumulator='';
  const regex=/[A-Z]/;
  //we'll be looping the string searching for characters.
  for(let i=0; i<str.length; i++){
  //checki each character in the string if its an alphabet.
    if(regex.test(str[i])){
      //convert the character into a ascii unicode and shifting.
      if((str[i].charCodeAt()+13)<=90 ){
        accumulator +=String.fromCharCode(str[i].charCodeAt()+13);

      }else if((str[i].charCodeAt()+13)>90){
        let char=(str[i].charCodeAt()+13) -91+65
       accumulator +=String.fromCharCode(char);
      }
    }else{//if not an alphabet, push the character into the accumulator.
      accumulator +=str[i]
    }
  }

  return accumulator;
}

rot13("SERR PBQR PNZC");
