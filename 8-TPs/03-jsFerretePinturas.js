/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").


Suarez, Tomas Martin DIV E
*/
function FahrenheitCentigrados () 
{
    let fahrenheit = parseFloat(txtIdTemperatura.value);

    let calculoCentigrados = (fahrenheit - 32) * 5 / 9;

    alert("Los " + fahrenheit + "º Fahrenheit, " + " son " +calculoCentigrados.toFixed(1) + "º Centigrados.");
	
}

function CentigradosFahrenheit () 
{
	let centigrados = parseFloat(txtIdTemperatura.value);

    let calculoFarenheit = centigrados *1.8 + 32;

    alert("Los " + centigrados + "º Centigrados, " + " son " +calculoFarenheit.toFixed(1) + "º Fahrenheit.");
}
