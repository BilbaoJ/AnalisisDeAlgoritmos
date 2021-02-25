/**
 * ¿De cuentos modos pueden ubicarse en una fila de 10 sillas a 4 personas?
 * (Permutación)
 */

function factorial_recursivo(n) {

    if(n == 0){
        return 1;
    }else{
        return n * factorial_recursivo(n-1);
    }
}

function resultado() {

    let sillas = 10;
    let personas = 4;
     
    let p = (factorial_recursivo(sillas))/(factorial_recursivo(sillas-personas));
    console.log("Hay", p, "modos de ubicar 4 personas en 10 sillas");
}

console.time("ejercicio1");
resultado();
console.timeEnd("ejercicio1");