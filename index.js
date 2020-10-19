function validate(){
    var email = $("#mail").val();
    var password = $("#pass").val();
    if ( email === "" && password === ""){
        alert("Enter your inputs please!")
    
    }
     else if ( password.length < 8){
         alert("Your Password is too short!")
     }
    else if ( email === "ramzichammem125@gmail.com" && password !== "rebootkamp"){
        alert("Wrong password!")
    }
else if ( email !== "ramzichammem125@gmail.com" || password !== "rebootkamp"){
    alert("Wrong Inputs!")
}
    
    else if ( email === "ramzichammem125@gmail.com" && password === "rebootkamp"){
    
      
        $("#logIn").fadeOut(1000)
        setTimeout(function(){
            $("#otherPage1").fadeIn(1000)
        },1000)
    }
}
function valid(){
    $("#otherPage1").fadeOut(1000)
    setTimeout(function(){
        $("#login").fadeIn(1000)
    }, 1000)
}
function valid1(){
    $("#otherPage1").fadeOut(1000)
    setTimeout(function(){
        $("#otherPageDice").fadeIn(1000)
    }, 1000)
}
$("#stImage").attr("src", "https://vistapointe.net/images/dice-1.jpg")
$("#ndImage").attr("src", "https://www.auntannie.com/GamesToMake/MatchCards/MatchCardsPlay.gif")
function playGame(){
    var randomNumberOne = Math.floor(Math.random()*6)+1;
    var randomImageOnePath = "./diceImages/"+randomNumberOne+".png"


    var randomNumberTwo = Math.floor(Math.random()*6)+1;
    var randomImageTwoPath = "./diceImages/"+randomNumberTwo+".png"

    var image1 = document.getElementById("dice1");
    image1.src =  randomImageOnePath;
    var image2 = document.getElementById("dice2");
    image2.src =  randomImageTwoPath;
 
    if (randomNumberOne > randomNumberTwo){
        document.querySelector("#GL").innerHTML="Player One Wins!"
        
        
    }
    else if (randomNumberOne < randomNumberTwo){
        document.querySelector("#GL").innerHTML="Player Two Wins!"

    }
    else {
        document.querySelector("#GL").innerHTML= "Draw!"
    }
}
document.querySelector(".butn").addEventListener("click", playGame)

function valid2(){
    $("#otherPageDice").fadeOut(1000)
    setTimeout(function(){
        $("#otherPage1").fadeIn(1000)
    }, 1000)
    
}