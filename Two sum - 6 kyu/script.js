var twoSum= function(numbers, target) {
  var nwArr=[];
  for (var i=0; i < numbers.length; i++){
    for (var j=1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] == target){
        nwArr.push(Number(i),j);
    	return nwArr;
      }
    }
  }
}
