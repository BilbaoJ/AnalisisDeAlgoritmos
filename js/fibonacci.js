function fibonacci(n) {

    let a = 1;
    let b = 1;
    let c = 1;
    for (let i = 1; i < n; i++) {
        console.log(`${c}`);
        a = b;
        b = c;
        c = a + b;
    }
    
}
console.log(fibonacci(10));
