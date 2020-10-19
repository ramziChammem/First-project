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
$("#stImage").attr("src", "https://vistapointe.net/images/dice-1.jpg")
$("#ndImage").attr("src", "https://www.auntannie.com/GamesToMake/MatchCards/MatchCardsPlay.gif")
