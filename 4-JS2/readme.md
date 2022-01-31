# Ejercicio JavaScript 2

Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos).

La función devolverá un nuevo array con un nuevo objeto **por cada elemento del array original**. Ese nuevo objeto tendrá el **nombre** y el **total de puntos** del equipo correspondiente.

Ej:
Entrada

```javascript
[
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
];
```

Salida

```javascript
[
  {
    equipo: "Toros Negros",
    puntosTotales: 28,
  },
  {
    equipo: "Amanecer Dorado",
    puntosTotales: 34,
  },
];
```

Encontrarás un array de ejemplo en el propio documento.
