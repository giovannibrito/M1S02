let contador = 0;

function checaPrimo(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

for (j = 2; j < 1000; j++) {
    if (checaPrimo(j)) {
        contador++;
        console.log(j);
    }
}

console.log(`O total de números primos entre 0 e 1000 é: ${contador}`);
