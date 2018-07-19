const BINARY_ARRAY_TO_NUMBER = arr => {
  var resul=0;
  for (var i in arr){
    resul += arr[i] * Math.pow(2,arr.length-1-i)
  }
  return resul;
};
