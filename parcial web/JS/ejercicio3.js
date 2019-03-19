
   
	
	

function decifrar() {
	var mensaje = "Eexotehl t ng ingmh wxe jnx gh inxwtg ltebk, r fhkbktg tgmxl wx ihwxk xlvtitk  - lng msn";
	var desplazamiento = 7;
	var mensajeDecifrado = document.getElementById("decifrado").value;
	var cifrado = "";
    console.log("entro");
	var textoIngresado = mensaje.split('');
	textoIngresado.map(asc=>
	{
		let mayus = (asc === asc.toUpperCase()) ? true : false;
		let valorEntero = asc.toLowerCase().charCodeAt(0);
		console.log(valorEntero);
		if(valorEntero >= 97 && valorEntero <= 122){				
			if(valorEntero + desplazamiento> 122){
				valorEntero = 97 + (valorEntero - 122) + desplazamiento - 1;
				//console.log("")
			}else{
						valorEntero = valorEntero + desplazamiento;
			}
		}	
     	cifrado += String.fromCharCode(valorEntero);
		document.getElementById('decifrado').value = (cifrado);

	});
}
	