let n, pares, impares;

n = Number(prompt("Insira o número desejado:"));
if (n % 2 == 0) {
    impares = n / 2;
    pares = impares + 1;
}
if (n % 2 == 1) {
    impares = Math.ceil(n / 2);
    pares = impares;
}
alert(`Total de pares: ${pares}\nTotal de ímpares: ${impares}`);
