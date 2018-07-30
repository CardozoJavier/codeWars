var bouncingBall= function(h,  bounce,  window) {
  if (h > 0 &&  0 < bounce && bounce < 1 && window < h){
    var count=0;
    // Mientras h sea mayor o igual a window, la pelota va a 
    // seguir rebotando y aumentando el contador
    while (h >= window){
      h *= bounce;
      count++;
      if (h >= window){
        count++;
      }
    }
    return count;
  }else{
    return -1;
  }
}
