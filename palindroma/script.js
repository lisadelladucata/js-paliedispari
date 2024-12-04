// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord= prompt("Inserisci una parola")

function wordReverse (userWord){
    let Reversed='';
    for(let i = userWord.length - 1; i>=0; i--){
        Reversed = Reversed + userWord[i];
    }
    return Reversed;
}
console.log(wordReverse(userWord)) 

function isPalindrome(userWord){
    const Reversed = wordReverse(userWord);
    if(Reversed === userWord){
        return true;
    } else {
        return false;
    }
}

if(isPalindrome (userWord)){
    alert('La parola è palindroma')
} else {
    alert('La parola non è palindroma')
}