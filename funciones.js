
const a = 25;
const b = 15;
const suma = (a + b);
console.log(suma);
console.table(suma);

let resta = (a - b);
console.log (resta);
console.table(resta);

const frase = ("La Voz De Tu Cabeza Siempre Tiene El Mismo Volumen.");
console.log (frase);
console.log ('%c' + frase, 'color:cyan');
console.log (frase.toUpperCase());
console.log (frase.toLowerCase());

// 7. Crear un texto con espacios al inicio y al final. Mostrar el texto original y aplicando el método para eliminar espacios mostrar el resultado, también por consola.

const frase2 = ("      Frase con espacios      ")
console.log (frase2);
console.log (frase2.trim());

/* 8. Crear un texto de cinco palabras separadas por espacios y cortar el texto en un arreglo de palabras. Mostrar por consola el texto original y el arreglo de palabras separadas. */

const frase3 = ("Azul Blanco Café Dorado Esmeralda")
console.log (frase3);
console.log (frase3.slice(5));

