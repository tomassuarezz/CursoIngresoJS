/*
Suarez, Tomas Martin DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
	var primerNumero = parseInt(txtIdNumeroUno.value);
	var segundoNumero = parseInt(txtIdNumeroDos.value);
	var suma = primerNumero + segundoNumero;
	alert("La suma es " + suma);
}

function restar()
{
	var primerNumero = parseInt(txtIdNumeroUno.value);
	var segundoNumero = parseInt(txtIdNumeroDos.value);
	var resta = primerNumero - segundoNumero;
	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var primerNumero = parseInt(txtIdNumeroUno.value);
	var segundoNumero = parseInt(txtIdNumeroDos.value);
	var multiplicacion = primerNumero * segundoNumero;
	alert("La multiplicacion es " + multiplicacion);
}

function dividir()
{
	var primerNumero = parseInt(txtIdNumeroUno.value);
	var segundoNumero = parseInt(txtIdNumeroDos.value);
	var division = primerNumero / segundoNumero;
	alert("La division es " + division);
}

