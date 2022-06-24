// document.querySelector("h1").style.color="red";
var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randomdiceimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomdiceimage;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);
// image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;//1-6
var randomimagesource2="images/dice"+randomNumber2+".png";
/// var randomimagesource2="images/"+randomdiceimage2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins🚩";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
