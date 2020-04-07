var number1 = Math.floor(Math.random()*6+1);
var randomImage1 = "dice" + number1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var number2 = Math.floor(Math.random()*6+1);
var randomImage2 = "dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2)

if (randomImage1>randomImage2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins !!!"
}
else if (randomImage1<randomImage2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins !!!"
}
else
{
    document.querySelector("h1").innerHTML="Match Draw !!!"
}
document.querySelectorAll(".dice")[0].setAttribute("src","dice2.png");