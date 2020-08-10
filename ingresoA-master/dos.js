/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar() {
  let seguir;
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesoTotal;
  let liquidoMasCaro = 0;
  let MarcaMascaroLiquidos;
  let marcaLivianoSolidos;
  let solidoMasLiviano = 0;
  let flagLiquido = 0;
  let flagSolido = 0;

  do {
    marca = prompt("Ingrese una marca");
    while (!(isNaN(marca))) {
      marca = prompt("Marca invalida. Ingrese una marca");
    }

    precio = parseFloat(prompt("Ingrese precio"));
    while (precio < 0) {
      precio = parseFloat(prompt("Precio invalido. Ingrese precio"));
      pesoTotal = peso + pesoTotal;
    }

    peso = parseFloat(prompt("Ingrese el peso"));
    while (peso < 0) {
      peso = parseFloat(prompt("Peso invalido. Ingrese peso"));
    }


    tipo = prompt("Ingrese el tipo solido o liquido");
    while (!(tipo == "solido" || tipo == "liquido")) {
      tipo = prompt("Tipo invalido. Ingrese tipo solido o liquido");
    }

    switch (tipo) {
      case "liquido":
        if (flagLiquido == 0 || precio < liquidoMasCaro) {
          liquidoMasCaro = precio;
          MarcaMascaroLiquidos = marca;
          flagLiquido = 1;
        }
        break;
      case "solido":
        if (flagSolido == 0 || peso < solidoMasLiviano){
          solidoMasLiviano = peso;
        marcaLivianoSolidos = marca;
        flagSolido = 1;
      }

        break;
    }
        seguir = prompt("continuar?");
  } while (seguir == "s");
  
  console.log("A-El peso total de la compra es: " + pesoTotal);
  console.log("B-La marca del mas caro de los liquidos es: " + MarcaMascaroLiquidos);
  console.log("C-La marca del mas liviano de los solidos es: " + marcaLivianoSolidos);


}

