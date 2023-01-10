
/* EJERCICIO 1
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentenceA = 'Hola soy Edu Feliz Navidad';

function noVowels(str) {
    let noVowels = str.replace(/[aeiouAEIOU]/g, '');
    return noVowels;
}

console.log(noVowels(sentenceA));


/* EJERICIO 2
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/


let Odd = "Homer";
let Even = "Maggie";

function middleCharacter(characters) {  
    let middle =  (characters.length/2)
    
    if (characters.length % 2 === 0) {
        return characters.slice(middle-1,middle+1);
    
    } else {
        return characters.slice(middle,middle+1);
    }
}

console.log(middleCharacter(Odd));
console.log(middleCharacter(Even));

/* EJERCICIO 3
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(characters){
    return characters.slice (1,-1);
}

console.log(deleteFirsLast(sentence));

/* EJERCICIO 4
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];


function sumList(list){
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

/*
    for (i in numberList) {
        sum += list[i];
} 
*/
    return sum;

}

console.log(sumList(numberList));


/* EJERCICIO 5
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500},
    {name: 'Bale', score: 400},
    {name: 'Mbappe', score: 250},
];
//console.log(playerList[2].score);

function winner(list){
    
    playerList.sort(function(a, b){return b.score - a.score;});
    return maxScore = playerList[0].name;
   }

console.log(winner(playerList));

/* Ejercicio 6
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
    let totalAnimals = rebano1.concat(rebano2);
    nVacas = 0;
    nOvejas = 0;

    for (let i = 0; i < totalAnimals.length; i++) {
        
        if (totalAnimals[i] === "o") {
            nOvejas+=1
        }
        else { (i !="o")
            nVacas+=1
        }
    }

    return {Ovejas: nOvejas, Vacas: nVacas};


    

}

console.log(counter(rebano1, rebano2));
