/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 */

let numeros = [];

/**
 * 
 * @param {*} tam :Tamaño del array
 */
function ArrayAleatorio(tam) {
    
    if (tam == 0) {
        console.log(numeros);
    }else{
        numeros.push(Math.floor(Math.random() * tam));
        ArrayAleatorio(--tam);
        //((tam+1) - 0) + 0
    }  
}

const readline = require('readline');

let captura = readline.createInterface({
    input : process.stdin, output: process.stdout
});

captura.question('Tamaño del array ', function(respuesta) {
    console.time("Recursividad1");
    ArrayAleatorio(parseInt(respuesta));
    console.timeEnd("Recursividad1");
    captura.close();
    
});