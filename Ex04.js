let numero = 0;
let soma = 0;

while (true) {
    numero = Number(prompt("Insira o número a ser somado:"));
    if (numero === -1) {
        alert(soma);
        break;
    }
    soma = soma + numero;
}
