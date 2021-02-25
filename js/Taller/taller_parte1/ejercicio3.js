/**
 * En tres mercados de una ciudad se venden arroz por bulto; en el primer mercado hay
 * disponibles seis tiendas, en el segundo cuatro y en el tercer mercado cinco tiendas. ¿De
 * cuántas maneras puede realizarse la compra de un bulto de arroz?
 * (Principio de adición)
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

console.time("ejercicio3");
resultado();
console.timeEnd("ejercicio3");