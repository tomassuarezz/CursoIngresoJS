/*
Suarez, Tomas Martin DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero = parseInt(txtIdNumeroDividendo.value);
	var segundoNumero = parseInt(txtIdNumeroDivisor.value);

	var divisor = primerNumero % segundoNumero;

	alert("El resto es " + divisor);
}
