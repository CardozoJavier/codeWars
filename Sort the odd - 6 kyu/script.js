var sortArray= function(array) {
  for (var i=0; i<array.length; i++){
      for (var j=0; j<array.length; j++){
	 // Si el valor de array[i] es menor al valor de array[j], y ambos sean impar, se ordenan de forma ascendente.
	 if (array[i] < array[j] && array[i] % 2 != 0 && array[j] % 2 != 0){
            var aux= array[j];
            array[j]= array[i];
            array[i]= aux;
          }
      }
  }
  return array;
}
