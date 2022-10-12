let valorInicial = Number(prompt("Insira o valor inicial:"));
let raiz = Number(prompt("Insira a raíz:"));
let string = `P.A. = ${valorInicial}`;

for (i = 1; i < 10; i++) {
    let termo = valorInicial + i * raiz;
    string = string + `, ${termo}`;
}

alert(string);
