var CaesarCipher = function (shift) {
    this.encode= function(str){
          var arr=[];
          for (var i in str){

              var asciiCode= str[i].charCodeAt();
              var asciiCodeLowerCase= str[i].toLowerCase().charCodeAt();
              // En la siguiente linea guardamos en 'arr[i]' la letra resultante de la suma
              // entre el codigo ASCII de la posicion 'i' del string ingresado, y el indice 'n'
              // pasado como parametro en el constructor:

              if (asciiCode > 64 && asciiCode < 91 || asciiCode > 96 && asciiCode < 123 ){
                arr[i]= String.fromCharCode(asciiCodeLowerCase + shift);
        	if (asciiCodeLowerCase + shift > 122){
                  arr[i]= String.fromCharCode(96 + ((asciiCodeLowerCase + shift) - 122))
              	}
              }else{
                 arr[i]= str[i];
              }
          }
        return arr.join('').toUpperCase();
    }

      this.decode= function(str){
          var arr= [];
          for (var i in str){

	      var asciiCode= str[i].charCodeAt();
              var asciiCodeLowerCase= str[i].toLowerCase().charCodeAt();
              if (asciiCode > 64 && asciiCode < 91 || asciiCode > 96 && asciiCode < 123 ){
                 arr[i]= String.fromCharCode(asciiCodeLowerCase - shift);
                 if (asciiCodeLowerCase - shift < 97){
                   arr[i]= String.fromCharCode(123 - (97 - (asciiCodeLowerCase - shift)))
                 }
              }else{
                 arr[i]= str[i];
              }
          }
          return arr.join('').toUpperCase();
      }
  };
