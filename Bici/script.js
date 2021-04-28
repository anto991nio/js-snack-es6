/* Creo un Array con delle bici da corsa */



const biciCorsa = [{ nome: "speedcycle", peso: 18 },
{ nome: "biciflash", peso: 4 },
{ nome: "bicicorre", peso: 3 },
{ nome: "davveroveloce", peso: 10 },
{ nome: "velocebici", peso: 5},
{ nome: "fastichella", peso: 8 }]

//Ora con un ciclo for confrontiamo i pesi delle bici in modo da poter selezionare quella più leggera
var biciLeggera={}
var pesoMinore = biciCorsa[0].peso

for( var i=1 ; i < biciCorsa.length; i++){
    var pesoBici = biciCorsa[i].peso
    if(pesoBici < pesoMinore){
        biciLeggera=biciCorsa[i]
        pesoMinore=biciLeggera.peso
    }
    
    
}

// ora scriviamo in console la più leggera
const {nome, peso }= biciLeggera;
console.log(`La bici più leggera è la ${nome} e pesa ${peso}` );