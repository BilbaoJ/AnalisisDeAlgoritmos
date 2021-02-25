/**
 * Escribir un programa que encuentre la suma de los enteros positivos pares desde N hasta
 * 2. Comprobar que si N es impar se imprima un mensaje de error.
 */

 let suma = 0;
 function sumaPares(n) {

    if (n%2 != 0) {
        console.log("ERROR: El número que ingresó es impar")
    }else{
        if (n==0) {
            return 0;
        }else{
            return n + sumaPares(n-2);
        }
    }
     
 }
 console.time("Recursividad4");
 console.log("Suma total: ",sumaPares(10000));
 console.timeEnd("Recursividad4");