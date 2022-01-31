"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

// Creamos una función de tipo ARROW que recibe como parámetro de entrada el array original
const sumarPuntos = arrayConPuntos => {
    // Definimos una variable para calcular el nuevo array
    const arrayPuntosTotales = arrayConPuntos.map(eq => {
      // Para cada elemento del array, contruimos un objeto con el equipo y los puntos totales
      return {
        equipo: eq.equipo, // El equipo lo tenemos directamente en el atributo equipo
        puntosTotales: eq.puntos.reduce((a, b) => a + b), // Los puntos totales los sumamos con el metodo reduce de arrays
      }
    })
    // La funcion devuelve el nuevo array con los puntos sumados
    return arrayPuntosTotales;
};

// Ahora solo queda llamar a nuestra funcion ARROW
const salida = sumarPuntos(puntuaciones);
console.log(salida);
