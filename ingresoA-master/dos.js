/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
 let seguir;
 let marca;
 let precio;
 let peso;
 let tipo;
 let pesoTotal = 0;
 let marcaLiviano;
 let marcaSolido;
 let precioCaroLiquido = 0;
 let pesoLivianoSolido = 0;
 let flagLiquido = 0;
 let flagSolido = 0;

 do{
   marca = prompt("Ingrese marca");
   while(!(isNaN(marca))){
    marca = prompt("Marca incorrecta .Ingrese marca");
   }

   precio = parseFloat(prompt("Ingrese precio"));
   while(precio < 0 || isNaN(precio)){
    precio = parseFloat(prompt("Precio incorrecto. Ingrese precio"));
   }

   peso = parseFloat(prompt("Ingrese peso"));
   while(peso < 0 || isNaN(peso)){
    peso = parseFloat(prompt("Peso incorrecto. Ingrese peso"));
   }

   tipo = prompt("Ingrese el tipo: solido o liquido");
   while(!( tipo == "solido" || tipo == "liquido")){
    tipo = prompt("Error! Ingrese el tipo: solido o liquido");
   }

    if(tipo == "solido"){
       if(flagSolido == 0 || peso < pesoLivianoSolido)
       pesoLivianoSolido = peso;
       marcaSolido = marca;
       flagSolido = 1;
    }
    else{
      if(flagLiquido == 0 || precio > precioCaroLiquido){
          precioCaroLiquido = precio;
          marcaLiviano = marca;
          flagLiquido = 1;
      }
    }

    




 pesoTotal += peso;
 seguir = prompt("Desea continuar?");
 }while(seguir == "s");

 console.log("A- El peso total de la compra es: " + pesoTotal + " kilogramos");
 console.log("La marca de los más caros de los liquidos es: " + marcaLiviano);
 console.log("C- La marca de los más livianos de los solidos es: " + marcaSolido);

}
