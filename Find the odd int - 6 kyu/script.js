var findOdd= function(A) {  
  var array=[];
  for (var i=0; i < A.length; i++){
    for (var j=0; j < A.length; j++){
        if (A[i] === A[j]){
          array.push(A[i]);
        }
    }
    if (array.length % 2 != 0){
      return array[0];
    }else{
      array=[];
    }
  }
}
