var toCamelCase= function(str){
  var arr= [];
  var del=[];
  // Recorro el string en busca de guion medio o guion bajo.
  // En la posicion que se encuentre uno de estos, lo reemplazo por la letra ubicada
  // en la posicion siguiente a este, en mayuscula.
  // Creo un array 'del' para guardar las posiciones en donde se encuentran
  // dichos guiones para luego poder eliminarlos del array 'arr' que sera retornado.
  for (var i in str){
      if (str[i] == '-' || str[i] == '_'){
      arr[i]= str[i - 0+1].toUpperCase();
      del.push(i - 0+1);  
      }else{
        arr[i]= str[i]
      }
  }
  for (var i in del){
    arr.splice(del[i]-i,1)
  }
  return arr.join('');    
}
