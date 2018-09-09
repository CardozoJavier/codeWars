var add= function(a,b){
  var a= a.split('').reverse();
  var b= b.split('').reverse();
  var unidad= 0;
  var decena= 0;
  var total;
  var arr=[];
  var length= Math.abs(a.length - b.length);
  
  // Completo con ceros el arreglo de menor longitud.
  for (var i=0; i<length; i++){
    if (a.length < b.length){
      a.push('0');
    }else{
       b.push('0');
    }
   } 

  for (var i=0; i<a.length; i++){ 
    if (decena > 0){
      total= Number(a[i]) + Number(b[i]) + Number(decena);
    }else{
      total= Number(a[i]) + Number(b[i]);
    }
    if (String(total).length > 1){
      decena= String(total)[0];
      unidad= String(total)[1];
    }else{
      unidad= String(total)[0];
      decena= 0;
    }

    // Si el indice 'i' se encuentra en el ultimo valor del array y 'decena' es mayor a cero, 
    // adicionamos un cero a cada array para proceder a la suma de estos con la decena.
    if (i == a.length-1 && decena > 0){
      a.push('0');
      b.push('0');
    }
    arr.unshift(unidad);
  }
  return arr.join('');
}
