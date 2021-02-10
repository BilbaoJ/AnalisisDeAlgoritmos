/**
 * En tres mercados de una ciudad se venden arroz por bulto; en el primer mercado hay disponibles
 * 6 tiendas, en el segundo 4 y en el tercer mercado 5 tiendas. ¿De cuántas maneras puede realizarse 
 * la compra de un bulto de arroz?
 */

function resultado() {
    let nroTiendasA = 6;
    let nroTiendasB = 4;
    let nroTiendasC = 5;
    let cont = 1;

    for (let i = 0; i < nroTiendasA; i++) {
        console.log(cont, "Tienda ", i+1, "Primer mercado");
        cont++;
    }

    for (let i = 0; i < nroTiendasB; i++) {
        console.log(cont, "Tienda ", i+1, "Segundo mercado");
        cont++;
    }

    for (let i = 0; i < nroTiendasC; i++) {
        console.log(cont, "Tienda ", i+1, "Tercer mercado");
        cont++;
    }
}

console.log(resultado());