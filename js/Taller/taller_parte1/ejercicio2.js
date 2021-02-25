/**
 * Entre Manizales y Armenia hay 3 carreteras ¿ De cuantos modos puede viajarse de
 * Manizales a Armenia?
 * (Principio de conteo)
 */

function factorial_recursivo(n) {

    if(n == 0){
        return 1;
    }else{
        return n * factorial_recursivo(n-1);
    }
}

function resultado() {
    let caminos = 3;

    for (let i = 0; i < caminos; i++) {
        console.log("Camino #",i);
        
    }
    
}

console.time("Ejercicio2");
resultado();
console.timeEnd("Ejercicio2");

