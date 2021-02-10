/**
 * 20 países mantienen relaciones diplomáticas, cada país tiene un embajador en los otros países.
 * Indique la cantidad de embajadores que hay en total.
 */

 function resultado() {
     let nroPaises = 20;
     let nroRelaciones = 19;
     let cont = 1;

     for (let i = 0; i < nroPaises; i++) {
         for (let j = 0; j < nroRelaciones; j++) {
             console.log(cont, "Pais ", i+1, "Embajador ", j+1);
             cont++;
         }  
     }   
 }

 console.log(resultado());