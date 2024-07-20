function convertToRoman(num) {
//set the table to const so that it doesnt change for iternal,
const lookupTable={
	M:1000,
	CM:900,
	D:500,
	CD:400,
	C:100,
	XC:90,
	L:50,
	XL:40,
	X:10,
	IX:9,
	V:5,
	IV:4,
	I:1
}
//the accumulator will change over time so we set it to let
let accumulator='';
//to look up through the table for each key in table
for(const key in lookupTable){
 const value=lookupTable[key];
 //camparing if the value with the input and do calculations. after the while loop terminates then we start all over till num is zero
 while(value <= num){
  num -=value;
  accumulator +=key;
   }
 }
 
 return accumulator;
}

convertToRoman(36);
