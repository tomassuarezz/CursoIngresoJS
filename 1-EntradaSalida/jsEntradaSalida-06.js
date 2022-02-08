/*
Suarez, Tomas Martin DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;

	primerNumero = parseInt(txtIdNumeroUno.value);
	segundoNumero = parseInt(txtIdNumeroDos.value);



	var suma = primerNumero + segundoNumero;

	alert("La suma es " + suma);


}

