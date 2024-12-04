// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userNUm= parseInt(prompt('scegli un numero da 1 a 5'))
let userChoose= prompt(` 'Pari' o 'dispari'?` )
let cpuNum= chooseCpuNum()

function chooseCpuNum(){
    return Math.floor(Math.random() * 5) + 1
}
function sum(num1 , num2){
    return num1 + num2;
}

let result = sum(userNUm , cpuNum)

if(sum % 2 === 0){
    result='pari'
} else{
    result= 'dispari'
}

console.log(cpuNum , sum, result)

if((userChoose === 'pari' && result === 'pari') || (userChoose === 'dispari' && result === 'dispari')){
    alert('Hai vinto!')
} else{
    alert('hai perso')
}

