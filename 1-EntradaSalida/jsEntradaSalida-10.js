/*
Suarez, Tomas Martin DIV E
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
function mostrarAumento()
{
	var precioProducto = parseInt(txtIdImporte.value);

	var descuento = (precioProducto * 25) / 100;

	txtIdResultado.value = precioProducto - descuento;
}

*/
/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/


function mostrarAumento() {
	var precioProducto = parseInt(txtIdImporte.value);

	var descuento = parseInt(prompt("Ingrese el descuento del producto"));

	var descAplicado = precioProducto * descuento / 100;

	txtIdResultado.value = precioProducto - descAplicado;



	alert("El importe del producto es " + precioProducto + ", el descuento es de " + descAplicado + " y su importe con descuento es " + (precioProducto - descAplicado));
}