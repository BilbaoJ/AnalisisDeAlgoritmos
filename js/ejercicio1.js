/**
 * Crear un vector aleatorio y ordenarlo de mayor a menor
 */
const crearVector= () => {
    let vector = [];
    let tam = 25;
    for (let i = 0; i < tam; i++) {
        let random = Math.random()*1000;
        vector.push(Math.round(random));   
    }
    for (let i = 0; i < vector.length; i++) {
        for (let j = 0; j < vector.length-1; j++) {
            if(vector[j]<vector[j+1]){
                let num = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = num;
            }   
        }  
    }
    return vector;
};

let vector_numeros = crearVector();
console.log(vector_numeros);