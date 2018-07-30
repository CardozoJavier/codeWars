var numPrimorial= function(x){
   var arr=[];
   var i=2;
   var resul=1;
   // Funcion para comprobar numeros primos.
   function isPrime(n){
         var multiplos=0;
         var flag=false;
         for (var i=1; i < n; i++){
             if (n/i% 1 == 0){
                 multiplos++;
             }
         }
         return multiplos > 1 ? flag= false : flag= true;
    }
    // Añado a un arreglo todo numero primo mientras que la cantidad sea menor al parametro de numPrimorial(x)
    while (arr.length < x){
      if (isPrime(i)){
        arr.push(i);
      }
        i++;
    }
    for (var i in arr){
        resul *= arr[i];
    }
    return resul;
}
