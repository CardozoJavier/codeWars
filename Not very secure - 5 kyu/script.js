var alphanumeric= function(string){
    if (string.length < 1) return false;
    for (var i in string){
	// Comprobamos que el codigo ASCII sea el de un caracter alfanumerico.
        if (string[i].charCodeAt() < 48 || string[i].charCodeAt() > 57 && 
            string[i].charCodeAt() < 65 || string[i].charCodeAt() > 90 && 
            string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122){
            return false;
        }
    }
    return true;
}
