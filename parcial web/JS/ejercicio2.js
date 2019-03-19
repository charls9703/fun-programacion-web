function hamming(){
    var tex1 = document.getElementById("text1").value;
    var tex2 = document.getElementById("text2").value;
    var dist = 0;
    var separador = "";

    if (tex1 == tex2) {
	    alert("Los textos son iguales; distancia de 0")
    }else{
	    var vector1 = tex1.split(separador);
	    var vector2 = tex2.split(separador);
		for (var i = 0; i <= vector1.length; i++) {
			if (vector1[i] != vector2[i]) {
				dist ++;
			}
		}
	alert("La distancia es de: " +dist);
	}

}