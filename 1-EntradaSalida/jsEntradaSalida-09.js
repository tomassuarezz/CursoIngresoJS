/*
Suarez, Tomas Martin DIV E
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*
function mostrarAumento()
{

	var sueldoBruto = parseInt(txtIdSueldo.value);
	

	var aumento = (sueldoBruto * 10) / 100;

	txtIdResultado.value = sueldoBruto + aumento;



}

*/

/*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/


function mostrarAumento()
{

	var sueldoBruto = parseInt(txtIdSueldo.value);
	

	var aumento = parseInt(prompt("Ingrese el porcentaje de aumento"));

	var sueldoNeto = sueldoBruto + (sueldoBruto * aumento / 100);

	txtIdResultado.value = sueldoNeto;



}

