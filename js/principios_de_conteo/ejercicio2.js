/**
 * En un baile scolar la profesora forma parejas extrayendo de una bolsa el nombre de 
 * un niño y de otra bolsa el nombre de una niña. Si en el aula hay 9 niños y 7 niñas 
 * ¿Cuantas posibles parejas distintas se podrian formar?
 */
function resultado() {
    let nroNinas = 7;
    let nroNinos = 9;
    let cont = 1;

    for (let i = 0; i < nroNinas; i++) {
        for (let j = 0; j < nroNinos; j++) {
            console.log(cont, "Niña ", i, " Niño ",j);
            cont++; 
        }  
    }
}

console.log(resultado());