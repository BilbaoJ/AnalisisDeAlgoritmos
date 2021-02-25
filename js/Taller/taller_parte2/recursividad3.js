/**
 * Escribe una función recursiva que dado un número entero n, retorne un array con todos
 * los números enteros en orden decreciente desde n a 1.
 */

 let numeros = [];
 function numerosDecrecientes(n) {

    if(n==0){
        console.log(numeros)
    }else{
        numeros.push(n);
        numerosDecrecientes(--n);
    }
     
 }

 console.time("Recursividad3");
 numerosDecrecientes(10000);
 console.timeEnd("Recursividad3");