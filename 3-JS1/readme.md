# Ejercicio JavaScript

Edita el archivo script.js para crear una función que haga lo siguiente:

1- Generar una contraseña (número entero aleatorio del 0 al 100)
2- Pedir al usuario que introduzca un número dentro de ese rango (prompt).
3- Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje indicando que ha ganado (alert) y terminará la función; si no, volverá al paso 2.

- El usuario tendrá 5 oportunidades de acertar, si no lo consigue, aparecerá un mensaje indicando que ha perdido (alert).

EXTRA: Haz que después de cada intento fallido, el juego indique con un alert si el numero buscado es mayor o menor al introducido.

**TIP**: para obtener números enteros aleatorios de 0 a un número concreto usábamos lo siguiente:

```javascript
Math.round(Math.random() * num);
```

**TIP 2**: Recuerda que prompt **siempre devuelve un string** y que 2==="2" sería false.

Para probar que funciona, puedes hacer un console.log de la contraseña para ver cual es y poder introducirla.
