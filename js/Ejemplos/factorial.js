function factorial(n) {

    let total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;   
    }
    return total;
}
console.log(factorial(0));

function factorial_recursivo(n) {

    if(n == 0){
        return 1;
    }else{
        return n * factorial_recursivo(n-1);
    }
}

console.log(factorial(5));