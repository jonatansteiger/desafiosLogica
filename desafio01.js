let nomeHeroi = "Silvinho";
let xp = 10000;
let nivelHeroi = rankHeroi(xp);
console.log (`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);

/**
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
 */

function rankHeroi(xp){

//o xp deve ser menor que 1000
if (xp <= 1000){
    return "Ferro";

//o xp deve ser maior que 1.001 e menor que 2.000
} else if (xp >= 1001 && xp <= 2000){
    return "Bronze";

//o xp deve ser maior que 2.001 e menor que 5.000    
} else if (xp >= 2001 && xp <= 5000){
    return "Prata";

//o xp deve ser maior que 5.001 e menor que 7.000    
} else if (xp >= 5001 && xp <= 7000){
    return "Ouro";

    //o xp deve ser maior que 7.001 e menor que 8.000   
} else if  (xp >= 7001 && xp <= 8000){
    return "Platina";

//o xp deve ser maior que 8.001 e menor que 9.000, ascendente
} else if (xp >= 8001 && xp <= 9000){
    return "Ascendente";

//o xp deve ser maior que 9.001 e menor que 10.000, Imortal
} else if (xp >= 9001 && xp <= 10000){
    return "Imortal";

//o xp deve ser maior ou igual a 10001, Radiante
} else {
   return "Radiante";
}
}

