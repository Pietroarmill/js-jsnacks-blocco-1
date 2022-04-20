// creare una array vuota
const listNumber = [];
// chiedere per 6 volte all'utente un numero 
// controllare se è dispari
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("Dimmi un numero."));

    if (userNumber % 2 === 1) {
        listNumber.push(userNumber)
    }
}
console.log(listNumber);

