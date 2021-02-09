function resultado() {
    let nroVestidos = 4;
    let nroConjuntos = 5;
    let cont = 0;

    for (let index = 0; index < nroVestidos; index++) {
        console.log(cont, "Numero de vestido", index +1);  
        cont++; 
    }

    for (let index = 0; index < nroConjuntos; index++) {
        console.log(cont, "Numero de conjunto deportivo", index +1);   
        cont++;
    }
    
}

console.log(resultado());