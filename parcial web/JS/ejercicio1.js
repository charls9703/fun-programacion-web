
function pangrama(){
	var frase = document.getElementById("frase").value;
	var separador = " ";
    var palabras=0;
    var abeceda =0;
    var contador =0;
    var contador2 =1;
    var letras;
    var aux;
    var vector = frase.split(separador);
   
    for (var i = 0 ; i <= vector.length ; i++) {
        for (var j = i+1; j <= vector.length-1; j++) {
            if (vector[i] == vector[j]) {
                aux = vector[j];
                for (var v = 0; v <= vector.length-1; v++) {
                    if (aux == vector[v]) {
                        vector[v] ="";
                    }
                }   
            }
        }
    }
    
    for (var i = 0; i <= vector.length-1; i++) {
        if (vector[i] == "") {

        }else{
            palabras++;
        }    
    }
    
    letras = vector.join("");
    letras = letras.split('')
    console.log(letras);
    aux ="";
    for (var i = 0; i <= letras.length; i++) {
        for (var j = i+1; j <= letras.length-1; j++) {
            if(letras[i] == letras[j]){
                aux=letras[j];
                console.log("entro"+contador2++);
                for (var l = 0; l <= letras.length-1; l++) {
                    if (aux == letras[l]) {
                        letras[l]="";
                    }
                }
            }
        }    
    }

    for (var i = 0; i <= letras.length-1; i++) {
        if (letras[i] == "") {
           
            contador++;
        }   
    }
    console.log(letras);
    abeceda = (letras.length)-contador;

    alert(" En la frase: "+ frase + " hay "+ palabras + " palabras y " + abeceda + " letras ");
    
}