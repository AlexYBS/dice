var randomNumber1 = Math.round(Math.random()*5)+1;
document.getElementsByTagName("img")[0].setAttribute("src", './DiceImages/'+ 'dice'+randomNumber1+'.webp');

var randomNumber2 = Math.round(Math.random()*5)+1;
document.getElementsByTagName("img")[1].setAttribute("src", './DiceImages/'+ 'dice'+randomNumber2+'.webp');

 if(randomNumber1===randomNumber2){
document.querySelector("h1").textContent = "Draw 🚩";
document.querySelector("h1").style.color = "black";
}

else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 win 🫣"
    document.querySelector("h1").style.color = "blue";
    document.getElementsByTagName("p")[1].classList.add("hide");
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 win 😡";
    document.querySelector("h1").style.color = "red";
    document.getElementsByTagName("p")[0].classList.add("hide");
}