function fibonacci(n) {

    let a = 1;
    let b = 1;
    let c = 1;
    //console.log(`${a}, ${b}`);
    for (let i = 1; i < n; i++) {
        console.log(`${c}`);
        a = b;
        b = c;
        c = a + b;
    }
    
}
console.log(fibonacci(10));