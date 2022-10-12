let hoje = new Date();
let dia = hoje.getDate();
let mes = hoje.getMonth() + 1; // O mes retornado pelo método é indexado começando em 0
let estacao;

if (mes == 1 || mes == 2) {
    estacao = "Verão";
}

if (mes == 4 || mes == 5) {
    estacao = "Outono";
}

if (mes == 7 || mes == 8) {
    estacao = "Inverno";
}

if (mes == 10 || mes == 11) {
    estacao = "Primavera";
}

if (mes == 3) {
    if (dia <= 21) estacao = "Verão";
    else estacao = "Outono";
}

if (mes == 6) {
    if (dia <= 21) estacao = "Outono";
    else estacao = "Inverno";
}

if (mes == 9) {
    if (dia <= 21) estacao = "Inverno";
    else estacao = "Primavera";
}

if (mes == 12) {
    if (dia <= 21) estacao = "Primavera";
    else estacao = "Verão";
}

alert(`Atualmente estamos na estação ${estacao} no hemisfério sul`);
