/**
 * TALLER
1.	Cantidad total de población en hogares particulares
2.	Cantidad total de población LEA
3.	Cantidad población total
4.	Cantidad total de población en hogares particulares por departamento
5.	Cantidad total de población LEA por departamento
6.	Cantidad población total por departamento
7.	Promedio de población 
8.	Capturar el código de cada departamento (Los dos primero números del id)
9.	Imprimir las capitales de los departamentos.

 */

const DATA = require("./info.json");

const ejercicio1 = () => {

    let totalParticulares = 0;
    for (let element of DATA) {
        totalParticulares += parseFloat(element.particulares);
    }
    console.log("Total particulares: " + totalParticulares);
}

const ejercicio2 = () => {

    let totalLEA = 0;
    for (let element of DATA) {
        totalLEA += parseFloat(element.lea);
    }
    console.log("Total de población LEA: " + totalLEA)
}

const ejercicio3 = () => {

    let totalPoblacion = 0;
    for (let element of DATA) {
        totalPoblacion += parseFloat(element.total);
    }
    console.log("Total de población total: " + totalPoblacion)
}

const ejercicio4 = () => {

    for (let element of DATA) {
        let dep = element.departamento;
        let acum = 0;
        for (let k of DATA) {
            if (k.departamento == dep) {
                acum += parseFloat(k.particulares);
            } else {
                element = k;
                break;
            }
        }
        console.log("El departamento: " + dep + " tiene: " + acum);
    }
}




ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();