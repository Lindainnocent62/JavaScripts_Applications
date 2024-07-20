function telephoneCheck(str) {

 const regexValidator=[
   //validating list of numbers each
   //555-555-5555
   /^\d{3}-\d{3}-\d{4}$/,
   //(555)555-5555 
   /^1? \(\d{3}\)[- ]\d{3}[- ]\d{4}$/,
   //555 555 5555
   /^1? \d{3}[- ]\d{3}[- ]\d{4}$/,
   //1 456 789 4444
   /^1? \d{3} \d{3} \d{4}$/,
   //(555)555-5555 or  1(555)555-5555
   /^1?\(\d{3}\)\d{3}-\d{4}$/,
   //5555555555
   /^\d{10}$/
   //"555-555-5555"
  


 ]
  //use the some method that will look in all the entries in the regex array and return either a true if match or false other wise.
  return regexValidator.some(item=> item.test(str));
}

telephoneCheck("555-555-5555");
