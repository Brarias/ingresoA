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
	let sexo;
	let edad;
	let nombre;
	let temperatura;
	let cantidadPersonasMasculino = 0;
	let cantidadPersonasFemenino = 0;
	let mujerMayorTemperatura = 0;
	let flagFemenino = 0;
	let edadPromedio;


	for (let i = 0; i < 5; i++) {

		nombre = prompt("Ingrese su nombre");

		while (!(isNaN(nombre))) {
			nombre = prompt("nombre invalido. Ingrese un nombre");
		}

		temperatura = parseInt(prompt("Ingrese su temperatura"));

		while (temperatura <= 0) {
			temperatura = parseInt(prompt("Temperatura Invalida. Ingrese su temperatura"));
		}
		sexo = prompt("Ingrese su sexo");

		while (!(sexo == "m" || sexo == "f")) {
			sexo = prompt("Sexo invalido. Ingrese su sexo");
		}

		edad = parseInt(prompt("Ingrese su edad"));

		while (edad <= 0) {
			edad = parseInt(prompt("Edad invalida. Ingrese su edad"));
			edadPromedio = edadPromedio + edad / 5;
		}

		switch (sexo) {
			case "f":
				cantidadPersonasFemenino++;
				if (flagFemenino == 0 || mujerMayorTemperatura > temperatura) {
					mujerMayorTemperatura += temperatura;
					flagFemenino = 1;
				}


				break;
			case "m":
				cantidadPersonasMasculino++;
				break;
		}
	}
	console.log("La cantidad de mujeres es: "cantidadPersonasFemenino + " " + "La cantidad de hombres es: "+cantidadPersonasMasculino);

	console.log("La mayor temperatura femenina es: " + mujerMayorTemperatura);

	console.log("La edad preomedio es: " + edadPromedio);

	
}
