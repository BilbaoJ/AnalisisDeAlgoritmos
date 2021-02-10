/**
 * ¿Cuantos números de 3 cifras existen? Donde el número no puede empezar con 0
 */

 function resultado() {
     let cont = 1;
     let lim = 9;
     
     for (let i = 1; i <= lim; i++) {
         for (let j = 0; j <= lim; j++) {
             for (let k = 0; k <= lim; k++) {
                 console.log(cont, `${i}${j}${k}`);
                 cont++;
             }   
         }         
     }
 }

 console.log(resultado());