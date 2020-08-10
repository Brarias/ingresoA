/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let lugarMasElegido;
	let promedioPersonas;
	let titularMasPasajeros;

		do{
			 nombre = prompt("Ingrese nombre del titular");
			 while(!isNaN(nombre)){
				 nombre = prompt("Nombre Incorrecto. Ingrese nuevamente");
			 }
				lugar = prompt("Ingrese destino Bariloche, cataratas o salta")
				while(!(lugar == "bariloche" || lugar == "salta" || lugar == "cataratas")){
					lugar = prompt("incorrecto. Ingrese destino Bariloche, cataratas o salta")
				}

				temporada = prompt("Ingrese la temporada");
				while(!(temporada == "otoño" || temporada == "verano" || temporada =="primavera" || temporada == "invierno")){

				}
		}




}
