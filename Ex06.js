let operacao = prompt("Insira a operação desejada (+, -, /, *):");
let numero1 = Number(prompt("Insira o primeiro número:"));
let numero2 = Number(prompt("Insira o segundo número:"));
let resultado;

if (operacao === "+") {
    resultado = numero1 + numero2;
}

if (operacao === "-") {
    resultado = numero1 - numero2;
}

if (operacao === "/") {
    resultado = numero1 / numero2;
}

if (operacao === "*") {
    resultado = numero1 * numero2;
}

alert(`O resultado do seu cálculo é: ${resultado}`);
