/**
 * 1. Realice un algoritmo que sume el número 5 y el número 8
 */
let numa = 5;
let numb = 8;
console.log(numa + numb);

function sumar(numa, numb){
    return numa + numb;
}
console.log(sumar(25,8));

/**
 * 2. Realizar un algoritmo que reciba como parámetro un número y lo retorne
 * @param {*} numeroA 
 */
function mostrar(numeroA){
    
    return numeroA;
}

console.time("mostrar");
console.log(mostrar(5));
console.timeEnd("mostrar");

/**
 * console.time() y console.timeEnd para ver cuanto se demora en ejecutar una instrucción
 *
 */


/**
 * 3. Realizar un algoritmo que reciba como parámetro un número y lo retorne el cuadrado de ese número más 2
 * @param {*} numeroB 
 */
function cuadrado(numeroB){
    return (numeroB*numeroB) + 2;
}

console.log(cuadrado(6));


/**
 * 4. Realice un algoritmo que imprima todos los enteros positivos hasta `n` incluido. Donde n es 100
 * @param {*} n 
 */
function numerosEnteros(n){

    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}

console.log(numerosEnteros(100));


/**
 * 5. Realice un algoritmo que sume todos los números enteros hasta n. Donde n es 100
 * @param {*} n 
 */
function sumaNumerosEnteros(n){

    let suma = 0;
    for(let i = 1; i <= n; i++){
        suma += i;
    }
    return suma;
}

console.log(sumaNumerosEnteros(100));


/**
 * Ejercicio 5 de una manera optimizada (Se demora menos tiempo cuando n aumenta)
 * @param {*} n 
 */
function sumaNumerosEnterosOpt(n){
    return (n * (n + 1)) / 2;
}

console.log(sumaNumerosEnterosOpt(100));


/**
 * 6. Realizar la tabla de multiplicar del 1-20 de n números. Donde n es 100
 * @param {*} n 
 */
function tablaDeMultiplicar(n){

    for(let i = 1; i <= n; i++){
        console.log("_________________")
        console.log("Tabla del " + i);
        for(let j = 1; j <= 20; j++){
            res = i * j;
            console.log(i + "x" + j + "=" + res);
        }
    }
}

console.time("tablaDeMultiplicar");
console.log(tablaDeMultiplicar(5));
console.timeEnd("tablaDeMultiplicar");


