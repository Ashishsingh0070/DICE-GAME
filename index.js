

var randomNumber1 =Math.random()*6
randomNumber1=Math.floor(randomNumber1)+1


var randomNumber2 =Math.random()*6
randomNumber2=Math.floor(randomNumber2)+1


var diceno= "dice"+ randomNumber1 + ".png"
var changesrc= "images"+"/"+diceno

var diceno2= "dice"+ randomNumber2 + ".png"
var changesrc2= "images"+"/"+diceno2


var image2=document.querySelectorAll("img")[1]
var image1 =document.querySelectorAll("img")[0]

image1.setAttribute("src",changesrc)
image2.setAttribute("src",changesrc2)



if(randomNumber1 >randomNumber2 ){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS CONGRATS"
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="OH NO! ITS DRAW"
}

else{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS CONGRATS"
} 