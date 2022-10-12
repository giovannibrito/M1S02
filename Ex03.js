let string = "";
let numero = Number(prompt("Insira o número para calcular a tabuada:"));

for (i = 0; i < 11; i++) {
    string = string + `${numero} x ${i} = ${numero * i}\n`;
}

alert(string);
