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
	let seguir;
	let nombreTitular;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let contadorBariloche = 0;
	let contadorSalta = 0;
	let contadorCataratas = 0;
	let cantidadPersonasPorViaje = 0;
	let lugarMasElegido;
	let nombreTitularMasPasajeros;
	let titularPasajerosFlag = 0;
	let cantidadMasPersonas = 0;
	let contadorInvierno = 0;
	let promedio = 0;
    
	  do{
      nombreTitular = prompt("Ingrese el nombre del titular");
      while(!(isNaN(nombreTitular))){
				nombreTitular = prompt("Nombre invalido. Ingrese el nombre del titular");
			}
			 lugar = prompt("Ingrese lugar: Bariloche, Cataratas o Salta").toLowerCase();
       while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){
				lugar = prompt("Lugar incorrecto. Ingrese lugar: Bariloche, Cataratas o Salta").toLowerCase();
			 }

			 temporada = prompt("Ingrese temporada: Otoño, Invierno, Verano, Primavera");
       while(!(temporada == "otoño" || temporada == "verano" || temporada == "invierno" || temporada == "primavera")){
				lugar = prompt("Temporada incorrecto. Ingrese temporada: Otoño, Invierno, Verano, Primavera").toLowerCase();
			 }

			 cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas"));
			 while(cantidadPersonas < 0 || isNaN(cantidadPersonas)){
				cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas"));
			 }

			if(lugar == "bariloche"){
				contadorBariloche++;
			}
			else if(lugar == "cataratas"){
				contadorCataratas++;
			}
			else{
				contadorSalta++;
			}

			if(titularPasajerosFlag = 0 || cantidadPersonas > cantidadMasPersonas){
				cantidadMasPersonas = cantidadPersonas;
				nombreTitularMasPasajeros = nombreTitular;
				titularPasajerosFlag = 1;

			}


			if(temporada == "invierno"){
				 cantidadPersonasPorViaje += cantidadPersonas;
				 contadorInvierno++;
			}
       
		  seguir = prompt("Desea continuar?");	
		}while(seguir == "s");

		promedio = cantidadPersonasPorViaje / contadorInvierno;

		
		if(contadorBariloche > contadorCataratas || contadorBariloche > contadorSalta){
			lugarMasElegido = "bariloche";
		}
		else if(contadorSalta >= contadorBariloche || contadorCataratas >= contadorCataratas){
			lugarMasElegido = "salta"
		}
		else{
			lugarMasElegido = "cataratas";
		}

		console.log("A- El lugar más elegido es: " + lugarMasElegido);
		console.log("B- El titular que lleva mas pasajeros es: " + nombreTitularMasPasajeros);
		console.log("C- El promedio de personas por viaje en invierno es: " + promedio);
}

