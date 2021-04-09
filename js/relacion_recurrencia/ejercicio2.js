
function solucionRecursiva(n) {
    if(n == 1){
        return 1;
    }else{
        return solucionRecursiva(n-1) + 5;
    }   
};

function solucionEcuacion(n) {
    return 5 * n - 4;  
};

console.log(solucionRecursiva(12500));
console.log(solucionEcuacion(12500));
