var divisors= function(integer){
  var arr=[];
  for (var i= integer-1; i >1; i--){
    if ((integer/i) % 1 == 0){
        arr.push(integer/i);
    }
  }
  if (arr.length == 0){
    return integer + ' is prime';
  }
  return arr;
}
