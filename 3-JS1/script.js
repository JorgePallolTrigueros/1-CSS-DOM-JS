



function adivinaAleatorio(){
  var numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
  alert ("Agamos una prueba el numero aleatorio es el" + numeroAleatorio)
  let contador = 1;
  let respuesta = prompt("Ingresa un número (del 1 al 100):");
  while(Number(respuesta)!==numeroAleatorio && contador<5){
    if(respuesta<numeroAleatorio){
      respuesta = prompt('El número es mayor que el introducido. Inténtelo de nuevo');
    }else{
      respuesta = prompt('El número es menor que el introducido. Inténtelo de nuevo');
    }
    contador++;
    posibilidad = 5 - contador;
    alert('Te quedan Intentos = ' + posibilidad);
  }
  if(contador==5){
    alert('Has superado el número máximo de intentos. Se acabó');
  }else{
    alert('Enhorabuena. Ha acertado');
  }
  
}

console.log(adivinaAleatorio());