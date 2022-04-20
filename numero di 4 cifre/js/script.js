const userNumber = parseInt(prompt("dimmi un numero di 4 cifre"));

const userNumberText = String(userNumber);
// console.log(userNumberText, typeof(userNumberText));
// console.log(userNumberText.length);

if (!isNaN(userNumber) && userNumberText.length === 4 ) {
    const cifra1 = Number(userNumberText[0])
    const cifra2 = Number(userNumberText[1])
    const cifra3 = Number(userNumberText[2])
    const cifra4 = Number(userNumberText[3])

    console.log(cifra1 + cifra2 + cifra3 + cifra4);
} else {
    alert("inserire un numero di 4 cifre")
}
