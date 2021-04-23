

//Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchine =[{

    varietà : "tipo1",
    peso: 3,
    lunghezza: 25,
},

{

    varietà : "tipo2",
    peso: 5,
    lunghezza: 17,
},{

    varietà : "tipo3",
    peso: 4,
    lunghezza: 4,
},{

    varietà : "tipo4",
    peso: 1,
    lunghezza: 12,
},{

    varietà : "tipo5",
    peso: 10,
    lunghezza: 16,
},{

    varietà : "tipo6",
    peso: 5,
    lunghezza: 19,
},{

    varietà : "tipo7",
    peso: 7,
    lunghezza: 15,
},{

    varietà : "tipo8",
    peso: 8,
    lunghezza: 22,
},{

    varietà : "tipo9",
    peso: 11,
    lunghezza: 9,
},{

    varietà : "tipo10",
    peso: 7,
    lunghezza: 10,
}];


var totalePeso= 0;


//Dividi in due array separati le zucchine che misurano meno o più di 15cm.Infine stampa separatamente quanto pesano i due gruppi di zucchine.

for( var i=0 ; i<zucchine.length; i++){
    var elementoPeso = zucchine[i].peso

    totalePeso+=elementoPeso;
}

console.log("Le zucchine pesano complessivamente",totalePeso);


var zucchineGrandi = [];
var zucchinePiccole = [];

for( var i=0 ; i<zucchine.length; i++){
    var elementoLunghezza = zucchine[i].lunghezza
    if(elementoLunghezza > 15){
        zucchineGrandi.push(zucchine[i]);
    }else{
        zucchinePiccole.push(zucchine[i])
    }

}

console.log("Queste sono le zucchine grandi :",zucchineGrandi);
console.log("Queste sono le zucchine piccole :" , zucchinePiccole);

var tototalePesoZucchineGrandi=0;
for( var i=0 ; i<zucchineGrandi.length; i++){
    var zucchineGrandiPeso = zucchineGrandi[i].peso

    tototalePesoZucchineGrandi+=zucchineGrandiPeso;
}

var tototalePesoZucchinePiccole=0;

for( var i=0 ; i<zucchinePiccole.length; i++){
    var zucchinePiccolePeso = zucchinePiccole[i].peso

    tototalePesoZucchinePiccole+=zucchinePiccolePeso;
}


console.log("Le zucchine grandi pesano :" + " " ,tototalePesoZucchineGrandi, "kg");
console.log("Le zucchine piccole pesano :" + " " ,tototalePesoZucchinePiccole,"kg");





