function deleteNth(arr,n){
  var array= arr.slice();
  var count=1;
  for (var i=0; i < arr.length; i++){
     for (var j=i -1; j<arr.length; j++){
       if (arr[i] == arr[j]){
         count++;
       }
       if (arr[i] == arr[j] && count > n){
         array[j]='';
       }
     }
     count=1;
  }
  return array.filter(Boolean);
}
