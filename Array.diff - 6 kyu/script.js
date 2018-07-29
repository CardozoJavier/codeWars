function array_diff(a,b){
  var array=[];
  if (b.length === 0){return a;}
  // Una vez finalizado ambos ciclos for, se devolvera el array compuesto por 
  // los valores en 'a' que no coincidan con el valor de 'b'
  for (var i=0; i < a.length; i++){
      for (var j=0; j < b.length; j++){
      if (a[i] != b[j]){
        array.push(a[i]);
            }
        }
    }
  return array;
}
