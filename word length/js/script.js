const firstWord = prompt("Dimmi una parola?");
const secondWord = prompt("Dimmi un'altra parola?");

const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

let result;
if (firstWordLength > secondWordLength) {
    result = `${secondWord} ${firstWord}`;

}   else if (secondWordLength > firstWordLength) {
    result = `${firstWord} ${secondWord}`;
}   else {
    result = `${firstWord} ${secondWord}`;
}

console.log(result);