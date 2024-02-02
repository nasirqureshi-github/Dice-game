
var randomNumber1=Math.floor (Math.random()*6)+1; // random nbr 1-6
//slect dic1.png-dic6.png
var randomDiceimage="dice" +randomNumber1+ ".png";
// select source of images  images/dice1.png-images/dice6.png  
var randomImageSource="images/"+randomDiceimage;
//to slect all images tag AND then [0]  spacify 0 index of array
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//to slect all images tag AND then [1] spacify 1 index of array
var randomNumber2=Math.floor (Math.random()*6)+1; 
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//condition apply
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Match Draw";
        }
    
   