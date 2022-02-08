/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

Suarez, Tomas Martin DIV E
*/

function Rectangulo () 
{
    let largoTerreno = parseInt(txtIdLargo.value);
    let anchoTerreno = parseInt(txtIdAncho.value);
    
    let cantAlambre = (largoTerreno * 2 + anchoTerreno * 2) * 3;

    alert("La cantidad de metros de alambra a comprar son: " + cantAlambre + " metros");

}
function Circulo () 
{
    let radioTerreno = parseInt(txtIdRadio.value);

    const pi = Math.PI;

    let perimetro = 2 * pi * radioTerreno;

    let cantAlambre = perimetro * 3;

    alert ("La cantidad de alambre a comprar son: " + cantAlambre.toFixed(2) + " metros");

	
}
function Materiales () 
{
    let largoTerreno = parseInt(txtIdLargo.value);
    let anchoTerreno = parseInt(txtIdAncho.value);

    let areaTerreno = largoTerreno * anchoTerreno;

    let bolsaCemento = areaTerreno * 2;
    let bolsaCal = areaTerreno * 3;

    alert("Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " de cal.")
	
}