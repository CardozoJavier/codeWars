var formatDuration= function (seconds) {
  if (seconds == 0) return 'now';
  var sec=0;
  var min=0;
  var hour=0;
  var day=0;
  var year=0;

  // Descomponemos el argumento de formatDuration(seconds), en segundos, minutos, horas, dias y años.
  for (var i=0; i<seconds; i++){
    sec++
    if (sec == 60){
      min++;
      sec=0;
    }
    if (min == 60){
      hour++;
      min=0;
    }
  if (hour == 24){
    day++;
    hour=0;
    }
  if (day == 365){
    year++;
    day=0;
    }
  }
  // Armamos el formato que será devuelto.
  var format= function(s,m,h,d,y){
    if (s > 1){
          var sec= s + ' seconds';
    }else if (s == 1){
      var sec= s + ' second'
        }else{
      var sec= '';
        }

    if (m > 1){
          var min= m + ' minutes';
    }else if (m == 1){
      var min= m + ' minute'
        }else{
          var min= '';
    }

    if (h > 1){
          var hour= h + ' hours';
    }else if (h == 1){
      var hour= h + ' hour'
        }else{
      var hour= '';
        }

    if (d > 1){
          var day= d + ' days';
    }else if (d == 1){
      var day= d + ' day'
        }else{
      var day= '';
        }

    if (y > 1){
          var year= y + ' years';
    }else if (y == 1){
      var year= y + ' year'
        }else{
      var year= '';
        }

    return [year,day,hour,min,sec];
    }

  // Formato final, con comas y 'and';
  var and= function(r){
  if (r.length > 1){
        for (var i=0; i < r.length; i++){
            if (i == r.length - 1){
                r[i]= ' and ' + r[i];
                return r.join('');
            }
            else if (i == r.length - 2){
                r[i]= r[i];
            }
            else {
              r[i]= r[i] + ', ';
            }
        }
      }else{
      return r.join('');
      }
    return r;
  }

  // Filtramos los elementos vacíos del array.
    var r= format(sec,min,hour,day,year).filter(function(arr){
        return arr.length > 0;
    })

  return and(r);
}
