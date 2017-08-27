
var number
var chance = 5
var clicks = 0
var msggennum
gennum()

function gennum() {
	msggennum = Math.floor(Math.random()*100)
	number = msggennum
	document.getElementById("output001").innerHTML = 'The number has been Generated! Start Guessing!';
}

function resetchance(){
	chance = 5
}


function guessnum() {
	var guess = document.getElementById("input002").value;
	
	
	if (guess == ''){
		document.getElementById("output002").innerHTML = 'Please enter a value '
		document.getElementById("output001").innerHTML = '';
	}
	else{
	chance --;
	console.log(chance)
	if (chance == 0) {
			remainresult = 'Remaining guess : ' + chance
			document.getElementById("output002").innerHTML = 'You Lose! The right number is ' + msggennum + '<br>' + 'Try Again!';
			document.getElementById("output003").innerHTML = remainresult;
			document.getElementById("output001").innerHTML = '';
			chance = 5
	}
	else{ 
	
	if(parseInt(guess) == number){
		msgresult = 'Gratz!'
	}
	else if(parseInt(guess) > number){
		msgresult = 'Sorry! Your guessing is too High '
		remainresult = 'Remaining guess : ' + chance
			
	}
	else {
		msgresult = 'Sorry! Your guessing is too Low '
		remainresult = 'Remaining guess : ' + chance
	}
	document.getElementById("output002").innerHTML = msgresult;
	document.getElementById("output003").innerHTML = remainresult;
	document.getElementById("output001").innerHTML = '';
	}
}
}

function reviewnum() {
	var reviewnum = msggennum
	alert(reviewnum);
	
}









