let homeScore = 0 ;
let guestScore = 0 ;
let homeEl = document.getElementsByClassName("homescore")[0];
let guestEl = document.getElementsByClassName("guestscore")[0];

function addScoreToHome(toAdd){
    homeScore += toAdd;
    homeEl.innerText = homeScore;
}
function addScoreToGuest(toAdd){
    guestScore += toAdd;
    guestEl.innerText = guestScore;
}