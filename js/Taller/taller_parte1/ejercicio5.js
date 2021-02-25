/**
 * Sofia trabaja en una tienda de ropa. Se le ha asignado la tarea de vestir a un maniquí
 * con una falda, una blusa y un par de zapatos de una exposición de faldas, blusas y
 * zapatos que hacen juego. Ya que todas las prendas combinan, ella puede elegir
 * cualquier blusa, cualquier falda y cualquier par de zapatos y el atuendo se verá bien. Si
 * hay 3 faldas, 5 blusas y 2 pares de zapatos, ¿De cuántas maneras distintas puede vestir
 * al maniquí?
 * (Principio de multiplicación)
 */

 function resultado() {
     let nroFaldas = 3;
     let nroBlusas = 5;
     let nroZapatos = 2;
     let cont = 1;

     for (let i = 0; i < nroBlusas; i++) {
         for (let j = 0; j < nroFaldas; j++) {
             for (let k = 0; k < nroZapatos; k++) {
                 console.log(cont , `Blusa ${i+1} Falda ${j+1} Zapatos ${k+1}`);  
                 cont++; 
             }
             
         }
         
     }
     
 }

 console.time("ejercicio5");
 resultado();
 console.timeEnd("ejercicio5");