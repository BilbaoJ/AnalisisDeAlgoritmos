/**
 * Igual que el ejercicio anterior, pero meter en el array números aleatorios sin que se
 * repitan.
 */


let numeros = [];

/**
 * 
 * @param {*} tam :Tamaño deseado del array 
 */
function ArrayAleatorio(tam) {

    if (numeros.length == tam){
        console.log(numeros);
    }else{
        if (numeros.length == 0) {
            numeros.push(Math.floor(Math.random() * tam));
            ArrayAleatorio(tam);
        }else{
            let num = Math.floor(Math.random() * tam);
            Comparar(num, numeros.length-1);
            ArrayAleatorio(tam);
        }
    }
}

/**
 * 
 * @param {*} num :Número aleatorio a comparar 
 * @param {*} l :Tamaño actual del array
 */
function Comparar(num, l) {

    if (l < 0) {
        numeros.push(num);
    }else{
        if (num == numeros[l]) {
            
        }else{
            Comparar(num, --l);
        }

    }  
}

const readline = require('readline');

let captura = readline.createInterface({
    input : process.stdin, output: process.stdout
});

captura.question('Tamaño del array ', function(respuesta) {
    console.time("Recursividad2");
    ArrayAleatorio(parseInt(respuesta));
    console.timeEnd("Recursividad2");
    captura.close();
    
});