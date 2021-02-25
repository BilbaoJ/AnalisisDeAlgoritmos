/**
 * Un restaurante de fideos ofrece 5 tipos de fideos para elegir. Cada plato viene con una
 * de 4 carnes y una de 6 salsas diferentes a elección. ¿Cuántas combinaciones se pueden
 * hacer?
 * (Principio de multiplicación)
 */

 function resultado() {
     let nroFideos = 5;
     let nroCarnes = 4;
     let nroSalsas = 6;
     let cont = 1;

     for (let i = 0; i < nroFideos; i++) {
         for (let j = 0; j < nroCarnes; j++) {
             for (let k = 0; k < nroSalsas; k++) {
                 console.log(cont , `Fideos ${i+1} Carne ${j+1} Salsa ${k+1}`);
                 cont++;
             }
             
         }
         
     }
     
 }

 console.time("ejercicio6");
 resultado();
 console.timeEnd("ejercicio6");