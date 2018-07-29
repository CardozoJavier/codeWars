var bouncingBall= function(h,  bounce,  window) {
  if (h > 0 &&  0 < bounce && bounce < 1 && window < h){
    var count=0;
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
