/**
 * En el estante de una biblioteca hay cinco libros de estadistica de autores diferentes y
 * siete libros de matemática, también de distintos autores. Si deseamos seleccionar un solo libro,
 * ¿Cuántas opciones diferentes tenemos?
 */

 function resultado() {
     let librosEst = 5;
     let librosMat = 7;
     let cont = 1;

     for (let i = 0; i < librosEst; i++) {
         console.log(cont, "Libro de estadística ", i+1);
         cont++;
     }

     for (let i = 0; i < librosMat; i++) {
        console.log(cont, "Libro de matemáticas ", i+1);
        cont++;
    }    
 }

 console.log(resultado());