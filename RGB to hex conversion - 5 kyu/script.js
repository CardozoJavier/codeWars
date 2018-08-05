var rgb= function(r, g, b){
var toHex= function(n){

 // Conjunto de valores decimales-hexadecimales.
 var hexValues= {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
    }

    // Tanto para valores superiores a 255 como inferiores a 0, el equivalente será 255 o 0 respectivamente.
    if (n > 255){n = 255}
    if (n < 0){n = 0}
    var hex1= Math.trunc(n/16);
    var hex2= Math.trunc(n - hex1*16);
    if (hex2 < 16){
      return hexValues[hex1] + '' + hexValues[hex2];
    }
  }
  return toHex(r) + '' + toHex(g) + '' + toHex(b);
}
