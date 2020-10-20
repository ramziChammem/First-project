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
        $("#logIn").fadeIn(1000)
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
        document.querySelector("#GL").innerHTML="💖Player One Wins!💖"
        
        
    }
    else if (randomNumberOne < randomNumberTwo){
        document.querySelector("#GL").innerHTML="💖Player Two Wins!💖"

    }
    else {
        document.querySelector("#GL").innerHTML= "😜Draw!😜"
    }
}
document.querySelector(".butn").addEventListener("click", playGame)

function valid2(){
    $("#otherPageDice").fadeOut(1000)
    setTimeout(function(){
        $("#otherPage1").fadeIn(1000)
    }, 1000)
    
}
function valid3(){
    $("#otherPage1").fadeOut(1000)
    setTimeout(function(){
        $(".flipCardGame").fadeIn(1000)
    }, 1000)
}
$(".card").append("<img></img>")

var clickedCard = null;
var preventClick = false;
function clickCard(event) {
    var target = event.currentTarget;
    if ( preventClick || target === clickedCard || target.className.includes("done")) {
        return;
    }
    target.className = target.className.replace("color-hidden", '').trim();
    target.className += " done";
    if (!clickedCard) {
        
        clickedCard = target;
    }
    else if (clickedCard) {
       
        if(clickedCard.getAttribute("data-color") !== target.getAttribute("data-color")
        ) {
            preventClick = true;

            setTimeout(() => {
                clickedCard.className =
                 clickedCard.className.replace("done", "").trim() + " color-hidden";
                target.className =
                 target.className.replace("done", "").trim() + " color-hidden";
                 clickedCard = null;
                 preventClick = false;
                 
            }, 500);
            
        }
        else {
            clickedCard = null;
            
        }   
    }

}



$("#ttt").css("display", "none");
$("#otherPage1").append("<img id= 'tic'>");
$("#tic").attr("src", "https://lh3.googleusercontent.com/7k1wSfnstoNib_lmlfIfFTcHOE4oypb-mmuzvhPLpfFRz55CnNJFagyd6u6G4fFrlDI");
$("#tic").css("display", "flex");
$("#tic").css("width", "25rem");
$("#tic").css("height", "18rem");
$("#tic").css("align-items", "center");
$("#tic").css("margin-left", "34rem");
$("#tic").css("margin-top", "5rem");
$("#otherPage1").append("<button id='ticBtn'>Tic Tie Toe</button>");
$("#otherPage1").append("<button id = 'BK'>Back</button>");

$('#BK').on("click", function(){
    $("#otherPage1").fadeOut(1000)
    setTimeout(function(){
        $("#logIn").fadeIn(1000)
    }, 1000)
})
$("#ticBtn").on("click", function(){
    $("#otherPage1").fadeOut(1000)
    setTimeout(function(){
        $("#ttt").fadeIn(1000)
    }, 1000)
});
$("table").css("border-collapse", "collapse");
$("table").css("border-spacing", "0");
$("table").css("margin", "10px auto");
$("table").css("background-color", "#272727");

