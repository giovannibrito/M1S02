var idade = Number(prompt("Insira a sua idade:"));
var faixaEtaria;

if (idade < 16) {
    faixaEtaria = "Jovem";
}

if (idade >= 16 && idade <= 64) {
    faixaEtaria = "Adulto";
}

if (idade > 64) {
    faixaEtaria = "Idoso";
}

alert(faixaEtaria);
