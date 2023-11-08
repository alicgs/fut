let homeCount = 0;
let guestCount = 0;

let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");

scoreHomeEl.textContent = homeCount;
scoreGuestEl.textContent = guestCount;

let remowGuest1 = document.getElementById("remowGuest");
let remowHome1 = document.getElementById("remowHome");

function remowHomeClick(){
	remowHome1.textContent = prompt("Takım adı giriniz");

}

function remowGuestClick(){
	remowGuest1.textContent=prompt("Takım adı giriniz");
}

function addOneHome() {
	homeCount += 1;
	scoreHomeEl.textContent = homeCount;
  }

  function addOneGuest() {
	guestCount += 1;
	scoreGuestEl.textContent = guestCount;
}

function setGoalScore(){
	let score = prompt("Sayı giriniz"); 
	score = Number(score);
	if (isNaN(score)){
		alert("lütfen sayı giriniz!")
		return
	}
	homeCount = score;
	scoreHomeEl.textContent = homeCount;
	
}
function setGoalScoreS(){
	let score = prompt("Sayı giriniz"); 
	score = Number(score);
	if (isNaN(score)){
		alert("lütfen sayı giriniz!")
		return
	}
	guestCount= score;
	scoreGuestEl.textContent = guestCount;	
}

function remowHome() {
	homeCount -= 1;
	if(homeCount<0){
		homeCount=0
	}
	scoreHomeEl.textContent = homeCount;
}

function remowGuest() {
	guestCount -= 1;
	if(guestCount<0){
		guestCount=0
	}
	scoreGuestEl.textContent = guestCount;
}

