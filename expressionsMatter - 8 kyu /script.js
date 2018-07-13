var expressionMatter= function(a,b,c) {

	var aux1= a * b * c;
	var aux2= a + b + c;
	var aux3= a + b * c;
	var aux4= a * b + c;
	var aux5= (a + b) * c;
	var aux6= a * (b + c);

	return Math.max(aux1,aux2,aux3,aux4,aux5,aux6);
}
