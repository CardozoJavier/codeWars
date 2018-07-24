function printerError(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 109) {
      count++;
    }
  }
  return count + "/" + s.length;
}
