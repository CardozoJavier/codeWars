function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 == 0){
    var aux= Math.pow(Math.sqrt(sq) + 1, 2);
    return aux;
  }
  return -1;
}