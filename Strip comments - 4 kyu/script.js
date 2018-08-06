var solution= function(input, markers){
  var arr= input.split('');
  var flag= false;
  var recur=false;
  var aux=[];
  var resul=[];
  function isThere(mark,array){
    for (var j=0; j < mark.length; j++){
          for (var i=0; i < array.length; i++){
              if (mark[j] == array[i]){
                flag=true;
              }
              if (mark[j] != array[i] && flag == false){
                  aux.push(array[i]);
              }
              if (flag == true && array[i] == '\n'){
                  aux.pop();
          	  aux.push('\n');
                  flag= false;
              }
          }
      	  resul.push(aux);
      	  aux=[];
      }
      if (recur == false){
        recur= true;
        return isThere(markers,resul[0])
      }
      return resul;
   }
   isThere(markers,arr);
   resul[3].pop();
   return resul[3].join('');
}
