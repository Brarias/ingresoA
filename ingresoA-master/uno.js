/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorHombres = 0;
	let contadorMujeres = 0;
	let promedio;
	let edadTotal = 0;
	let mujerMasTemperatura = 0;
	let nombreMujerMasTemperatura;

	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("Nombre invalido. Ingrese nombre");
		}

		temperatura = parseFloat(prompt("Ingrese temperatura"));
		while (temperatura <= 35 || temperatura >= 45 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Temperatura invalida. Ingrese temperatura"));
		}

		sexo = prompt("Ingrese género: f o m");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Sexo invalido. Ingrese género: f o m");
		}

		edad = parseInt(prompt("Ingrese edad"));
		while (isNaN(edad) || edad <= 0) {
			edad = parseInt(prompt("Edad invalida. Ingrese edad"));
		}

		if (sexo == "f") {
			contadorMujeres++;
			if (contadorMujeres > 0 && temperatura > mujerMasTemperatura) {
				mujerMasTemperatura = temperatura;
				nombreMujerMasTemperatura = nombre;
			}
		}
		else {
			contadorHombres++;
		}


		edadTotal += edad;
	}

	promedio = edadTotal / 5;
	console.log(`A- Hay: ${contadorHombres} hombres y ${contadorMujeres} mujeres`);
	console.log("B- El promedio de edad es: " + promedio);
	if (contadorMujeres == 0) {
		console.log("C-No se registraron mujeres");
	}
	else {
		console.log("C- La mujer con mas temperatura es: " + nombreMujerMasTemperatura + " y tiene: " + mujerMasTemperatura + " grados");
	}

}
