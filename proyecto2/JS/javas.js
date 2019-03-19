function validateForm() {
   var nombre = document.forms["formulario1"]["Nombre"].value;
   var apellido = document.forms["formulario1"]["Apellido"].value;
   var fecha = document. getElementById("Fecha").value;
   var email = document.forms["formulario1"]["Email"].value;
  if (nombre == "") {
    alert("No se encuentra el nombre");
    return false;
  }
  if (apellido == "") {
    alert("No se encuentra el nombre");
    return false;
  }
  if (email == "") {
    alert("No se encuentra el nombre");
    return false;
  }
  if (fecha == "") {
    alert("No se encuentra el nombre");
    return false;
  }
   calcularDias(); 
}

function calcularDias(){
  var hoy = new Date();
  var dd = parseInt(hoy.getDate());
  var mm = parseInt(hoy.getMonth()+1);
  var yyyy = hoy.getFullYear();
  var hora = parseInt(hoy.getHours());
  var minutos= parseInt(hoy.getMinutes());
  var segundos = parseInt(hoy.getSeconds());
  var day = 0;
  var hour = 0;
  var minute = 0;
  var second = 0;
  var dia = parseInt(fecha.substr(8,7));
  var mes = parseInt(fecha.substr(6,5));
  var ano = parseInt(fecha.substr(4,0));
  
  
  var ene = 31;
  var feb = 28;
  var mar = 31;
  var abr = 30;
  var may = 31;
  var jun = 30;
  var jul = 31;
  var ago = 31;
  var sep = 30;
  var oct = 31;
  var nov = 30;
  var dic = 31;

  Things[1] = 31;
  Things[2] = 28;
  Things[3] = 31;
  Things[4] = 30;
  Things[5] = 31;
  Things[6] = 30;
  Things[7] = 31;
  Things[8] = 31;
  Things[9] = 30;
  Things[10] = 31;
  Things[11] = 30;
  Things[12] = 31;

  if (mm == "1" ) {
      day = dia +(Things[mm] - dd);
      for (var i = mm; i <=mes; i++) {
        day = day + Things[i];           
      }
  } else{ 
    if (  mm == "2" ) {
        day = dia +(Things[mm] -dd);
        for (var i = mm; i <=mes; i++) {
          day = day + Things[i];           
        }
    }else{
      if ( mm == "3" ) {
        day = dia +(Things[mm] -dd);
        for (var i = mm; i <=mes; i++) {
          day = day + Things[i];           
        }
      }else{
        if ( mm == "4" ) {
          day = dia +(Things[mm] -dd);
          for (var i = mm; i <=mes; i++) {
            day = day + Things[i];           
          }
        }else{
          if ( mm == "5" ) {
            day = dia +(Things[mm] -dd);
            for (var i = mm; i <=mes; i++) {
              day = day + Things[i];           
            }
          }else{
            if ( mm == "6" ) {
              day = dia +(Things[mm] -dd);
              for (var i = mm; i <=mes; i++) {
                day = day + Things[i];           
              }
            }else{
              if ( mm == "7" ) {
                day = dia +(Things[mm] -dd);
                for (var i = mm; i <=mes; i++) {
                  day = day + Things[i];           
                }
              }else{
                if ( mm == "8" ) {
                  day = dia +(Things[mm] -dd);
                  for (var i = mm; i <=mes; i++) {
                    day = day + Things[i];           
                  }
                }else{
                  if ( mm == "9" ) {
                    day = dia +(Things[mm] -dd);
                    for (var i = mm; i <=mes; i++) {
                      day = day + Things[i];           
                    }
                  }else{
                    if ( mm == "10" ) {
                      day = dia +(Things[mm] -dd);
                      for (var i = mm; i <=mes; i++) {
                        day = day + Things[i];           
                      }
                    }else{
                      if ( mm == "11" ) {
                        day = dia +(Things[mm] -dd);
                        for (var i = mm; i <=mes; i++) {
                          day = day + Things[i];           
                        }
                      }else{
                        if ( mm == "12" ) {
                          day = dia +(Things[mm] -dd);
                          for (var i = mm; i <=mes; i++) {
                            day = day + Things[i];
                          }             
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
parseInt(hora);
hour = parseInt((day*24)+hora);
minute = (hour*60)+minutos;
second = (minute*60)+ segundos; 
alert("faltan" + day + "dias" + hour + "horas" + minute + "minutos" + second + "segundos para su cumple años");







function convertir() {
  var grados = document.forms["formulario2"]["Ingresar"].value;
  var tipo = document.getElementById("tipo").value;
  var resultado = 0;
  if (tipo == "1") {
      resultado = (((grados*9)/5)+32);
      alert(grados + " Grados centigrados equivalen a: " +resultado+ " Grados fahrenheit");
  }else{
    if (tipo == "2") {
        resultado = ((grados-32)*(5/9));
        alert(grados + " Grados fahrenheit equivalen a: " +resultado+ "Grados centigrados"); 
    }
  }
}

function convert() {
  var medidas = document.forms["formulario3"]["medidas"].value;
  var clase = document.getElementById("clase").value;
  var medida = 0;
  if (clase == "1") {
      medida = (medidas/1.609);
      alert(medidas + "Millas equivalen a:" +medida+ "Kilometros");
  }else{
    if (clase == "2") {
         medida = (medidas*1.609);
        alert(medidas + "Kilometros equivalen a:" +medida+ "Millas"); 
    }
  }
}
