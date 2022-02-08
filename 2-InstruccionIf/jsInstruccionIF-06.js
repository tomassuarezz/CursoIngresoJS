//Suarez, Tomas Martin Div E


function mostrar()
{
	let edadIngresada = parseInt(txtIdEdad.value);
	
	if (edadIngresada >= 18)
	{
		alert("Eres mayor de edad");
	}
		else if (edadIngresada >=13 && edadIngresada <= 17)
		{
			alert("Eres adolescente");
		} else
		{
			alert("Eres un niño")
		}


}//FIN DE LA FUNCIÓN