// informações do herói

let nomeDoHeroi = "naiala"
let xpDoHeroi = 10500
let ranking = ""

// nivél de ranking do herói

if (xpDoHeroi == 1000) {
    ranking = "Ferro"
}

else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    ranking = "Bronze"
}

else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    ranking = "Prata"
}

else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
    ranking = "Ouro"
}

else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    ranking = "Platina"
}

else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    ranking = "Ascendente"
}

else if (xpDoHeroi >= 9001 && xpDoHeroi <=10000 ){
    ranking = "Imortal"
}

else if (xpDoHeroi >= 10001){
    ranking = "Radiante"
}

else {
    ranking = "Iniciante"
}

console.log("Olá " + nomeDoHeroi + " o seu nivél é " + ranking)