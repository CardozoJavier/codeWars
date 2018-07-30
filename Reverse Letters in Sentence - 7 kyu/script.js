var reverser= function(sentence) {
  var array=[];
  var resul=[];
  for (var i=0; i<sentence.length; i++){
    if (sentence[i] != ' '){
      array.unshift(sentence[i]);
      if (i == sentence.length-1){
        resul.push(array.join(''));
      }
    }else{
      array.push(' ');
      resul.push(array.join(''));
      array=[];
    }
  }
  return resul.join(''); 
}