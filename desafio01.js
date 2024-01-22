let nomeHeroi = "Silvinho";
let xp = 10001;
let nivelHeroi = "";

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

//o xp deve ser menor que 1000
if (xp <= 1000){
    nivelHeroi = "Ferro";
    console.log (`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
//o xp deve ser maior que 1.001 e menor que 2.000
} else if (xp >= 1001 && xp <= 2000){
    nivelHeroi = "Bronze";
    console.log (`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`); 
//o xp deve ser maior que 2.001 e menor que 5.000    
} else if (xp >= 2001 && xp <= 5000){
    nivelHeroi = "Prata";
    console.log (`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
//o xp deve ser maior que 5.001 e menor que 7.000    
} else if (xp >= 5001 && xp <= 7000){
    nivelHeroi = "Ouro";
    console.log (`O Heroi de nome **${nomeHeroi}** esta no nivel de **${nivelHeroi}**`);
//o xp deve ser maior que 7.001 e menor que 8.000    
} else if  (xp >= 7001 && xp <= 8000){
    nivelHeroi = "Platina";
    console.log (`O Heroi de nome **${nomeHeroi}** esta no nivel de **${nivelHeroi}**`);
//o xp deve ser maior que 8.001 e menor que 9.000, ascendente
} else if (xp >= 8001 && xp <= 9000){
    nivelHeroi = "Ascendente";
    console.log (`O Heroi de nome **${nomeHeroi}** esta no nivel de **${nivelHeroi}**`);
//o xp deve ser maior que 9.001 e menor que 10.000, Imortal
} else if (xp >= 9001 && xp <= 10000){
    nivelHeroi = "Imortal";
    console.log (`O Heroi de nome **${nomeHeroi}** esta no nivel de **${nivelHeroi}**`);
//o xp deve ser maior ou igual a 10001, Radiante
} else if (xp >= 10001){
    nivelHeroi = "Radiante";
    console.log (`O Heroi de nome **${nomeHeroi}** esta no nivel de **${nivelHeroi}**`);
}


