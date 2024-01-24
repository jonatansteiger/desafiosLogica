let saldoVitorias = 200;
let saldoDerrotas = 109;
let nivel = rankedHeroi(saldoVitorias, saldoDerrotas);

//Saída
console.log(
  `O Herói tem **${saldoVitorias}** vitórias e está no nível de **${nivel}**`
);

/** 
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal 
*/

function rankedHeroi(vitorias, derrotas) {
  let saldo = vitorias - derrotas;

  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo >= 11 && saldo <= 20) {
    return "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    return "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    return "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    return "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    return "Lendario";
  } else {
    return "Imortal";
  }
}
