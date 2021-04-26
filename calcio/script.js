const squadreCalcio =[{nome : "Napoli", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Juventus", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Milan", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Inter", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Roma", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Atalanta", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Lazio", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Genoa", puntiFatti: 0 ,falliSubiti: 0 },
{nome : "Sassuolo", puntiFatti: 0 ,falliSubiti: 0 },
]


for(var i=0 ; i < squadreCalcio.length; i++){
    squadreCalcio[i].puntiFatti=generateRandomNumbers(1, 70);
    squadreCalcio[i].falliSubiti=generateRandomNumbers(1, 70);

}


function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min

}

