function mostrar()
{
	var notaRandom = (Math.random() * (10 - 1) + 1).toFixed(1);

	if (notaRandom >= 9 && notaRandom <= 10) {
		alert("Tu nota es " + notaRandom + ". EXCELENTE")
	} else if (notaRandom >=4 && notaRandom < 9) {
		alert("Tu nota es " + notaRandom + ". APROBADO")
	} else {
		alert("Tu nota es " + notaRandom + ". Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN