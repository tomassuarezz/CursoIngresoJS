//Suarez, Tomas Martin Div E

function mostrar()
{
	var edadIngresada = parseInt(txtIdEdad.value);
	var civilEstado = (estadoCivil.value).toLowerCase();


	if (edadIngresada >= 18 && civilEstado == "soltero") {
		alert("Es soltero y no es menor.")
	}



}//FIN DE LA FUNCIÓN