let homeScore = 0 ;
let guestScore = 0 ;


function addScoreToHome(toAdd){
    homeScore += toAdd;
    document.getElementsByClassName("homescore").innerHTML = homeScore;
}