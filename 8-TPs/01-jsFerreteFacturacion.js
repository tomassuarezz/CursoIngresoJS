/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Suarez, Tomas Martin DIV E
*/
function Sumar () 
{
    let precio1 = parseInt(txtIdPrecioUno.value);
    let precio2 = parseInt(txtIdPrecioDos.value);
    let precio3 = parseInt(txtIdPrecioTres.value);

    let sumaProductos = precio1 + precio2 + precio3;

    alert("La suma de tus productos es: " + sumaProductos);
	
}
function Promedio () 
{
    let precio1 = parseFloat(txtIdPrecioUno.value);
    let precio2 = parseFloat(txtIdPrecioDos.value);
    let precio3 = parseFloat(txtIdPrecioTres.value);

    let promedioProductos = (precio1 + precio2 + precio3) / 3;

    alert("El promedio de tus productos es: " + promedioProductos.toFixed(2));
	
}
function PrecioFinal () 
{
    let precio1 = parseFloat(txtIdPrecioUno.value);
    let precio2 = parseFloat(txtIdPrecioDos.value);
    let precio3 = parseFloat(txtIdPrecioTres.value);

    let precioIva = (precio1 + precio2 + precio3) * 1.21;

    alert("El precio final con IVA es: " + precioIva.toFixed(2));
	
}