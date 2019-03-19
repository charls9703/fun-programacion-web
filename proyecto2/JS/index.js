function validateForm() {
   var nombre = document.forms["formulario1"]["Nombre"].value;
   var apellido = document.forms["formulario1"]["Apellido"].value;
   var email = document.forms["formulario1"]["Fecha"].value;
   var fecha = document.forms["formulario1"]["Email"].value;
  if (nombre == "") {
    alert("No se encuentra el nombre");
    return false;
  }
  if (apellido == "") {
    alert("No se encuentra el apellido");
    return false;
  }
  if (email == "") {
    alert("No se encuentra el email");
    return false;
  }
  if (fecha == "") {
    alert("No se encuentra la fecha");
    return false;
  }
}

function calcularDias(){
  var hoy = new Date();
  var dd = hoy.getDate();
  var mm = hoy.getMonth()+1;
  var yyyy = hoy.getFullYear();
  var hora = hoy.getHours();
  var minutos= hoy.getMinutes();
  var segundos = hoy.getSeconds();
  alert(segundos);
}


function convertir(){
  var tipo = document.forms["formulario2"]["tipo"].value;
  var grados = document.getElementById("Ingresar").value;
  var resultado;

  if (tipo == "F" || tipo == "f") {
      resultado = ((grados-32)*(1.8));
  }else{
    if (tipo == "C" || tipo == " c") {
        resultado = (((1.8)*grados)+32);
    }
  }

  alert(resultado);
}