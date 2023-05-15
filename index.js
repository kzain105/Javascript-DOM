// DOM manulpation //

document.getElementsByTagName("h1")[0].innerHTML = "Refersh the page to Start!"
document.getElementsByTagName("h1")[0].style.fontStyle = "Italic"
document.getElementsByTagName("h1")[0].style.textAlign = "center"
document.getElementsByTagName("h1")[0].style.fontSize = "6rem"
document.getElementsByTagName("h1")[0].style.color = "green"

// Genrating Random Number //

let randNum1 = Math.floor(Math.random() * 6) + 1;
let randDiceImage1 = "dice" + randNum1 + ".png";
let randImageSource1 = "img/" + randDiceImage1;
document.getElementsByTagName("img")[0].setAttribute("src", randImageSource1);

let randNum2 = Math.floor(Math.random() * 6) + 1;
let randDiceImage2 = "dice" + randNum2 + ".png";
let randImageSource2 = "img/" + randDiceImage2;
document.getElementsByTagName("img")[1].setAttribute("src", randImageSource2);