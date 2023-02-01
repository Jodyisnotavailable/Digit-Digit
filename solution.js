function squareDigits(num){
  var i = 0;
  var j = 0;
  var numLength = (num.toString()).length;
  var arr = String(num).split("").map(Number);
  var outArr = [];
  var final = "";
  var placeholder1="";
  var placeholder2=""
  
  while (i<numLength) {
    outArr.push(Math.pow((arr[i]),2));
    i++;
  }
  
  while (j<numLength) {
    if (j%2 == 0) {
      placeholder1 = outArr[j];
      placeholder2 = outArr[j+1];
      final = final.concat(placeholder1,placeholder2);  
    }
    j++;
  }
  
  return parseInt(final);
    
}
