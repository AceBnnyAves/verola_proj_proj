function Log() {
	//retrieves the text box values
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	var x = 0;
	var y = 0;

	//checks if theres any value in it
	if (user == "") {
		x = x + 1;
	}else{y = y + 1;}
	if (pass =="") {
		x = x + 2;
	}else{y = y + 1;}

	//displays the error output
	switch(x) {
	    case 1:
	    	document.getElementById("warn").style.fontSize = "20px";
	    	document.getElementById("warn").style.textDecoration = "underline";
	    	document.getElementById("warn").innerHTML = "Please enter username";
	    	break;
	    case 2:
	    	document.getElementById("warn").style.fontSize = "20px";
	    	document.getElementById("warn").textDecoration = "underline";
	    	document.getElementById("warn").innerHTML = "Please enter password";
	    	break;
	    case 3:
	    	document.getElementById("warn").style.fontSize = "20px";
	    	document.getElementById("warn").style.textDecoration = "underline";
	    	document.getElementById("warn").innerHTML = "Please enter username & password";
	    	break;
	}

	//Moves on if all conditions are satisfied
	if (y === 2){
		window.location.href = "game_page/game.html";
	}
}

function Stat() { //Randomizes the stats
	//Generates the random stats
	var str = Math.trunc((Math.random()*20)+1);
	var dex = Math.trunc((Math.random()*20)+1);
	var int = Math.trunc((Math.random()*20)+1);

	//Displays the random stats
	document.getElementById("str").innerHTML = str;
	document.getElementById("dex").innerHTML = dex;
	document.getElementById("int").innerHTML = int;

	//Displays the scene generator button
	document.getElementById("scene_button").style.display = "block";
}

function Scene() { //Generates the scenes
	//Randomizes the scene and also takes the given stats
	var scene = Math.trunc((Math.random()*15)+1);
	var str = Number(document.getElementById("str").innerHTML);
	var dex = Number(document.getElementById("dex").innerHTML);
	var int = Number(document.getElementById("int").innerHTML);

	//Displays the randomized scene and judges the given stat to display the results
	switch(scene) {
	    case 1:
	    	document.getElementById("situation").innerHTML = "You enrolled in a prestigious magic school!";
	    	if (int >= 15) {
	    		document.getElementById("result").innerHTML = "You passed the test in flying colors! You are now a prodigy Mage";
	    	} else {
	    		document.getElementById("result").innerHTML = "You failed... ummm you can get it next time?";
	    	}
	    	break;
	    case 2:
	    	document.getElementById("situation").innerHTML = "OH NO! A big boulder is rolling down towards to your direction!";
	    	if (dex >= 12) {
	    		document.getElementById("result").innerHTML = "You quickly dodged the fast rolling boulder!";
	    	} else if (str >= 19){
	    		document.getElementById("result").innerHTML = "WOAH! you punched it and it crumbled";
	    	} else {
	    		document.getElementById("result").innerHTML = "Uh... you got squahed and died";
	    	}
	    	break;
	    case 3:
	    	document.getElementById("situation").innerHTML = "The bridge is broken, and the only way to cross the river is through this very mossy log.";
	    	if (dex >= 17) {
	    		document.getElementById("result").innerHTML = "You swiftly crossed the log in ease!";
	    	} else if (int >= 10){
	    		document.getElementById("result").innerHTML = "You have common sense. you didnt cross it";
	    	} else {
	    		document.getElementById("result").innerHTML = "You fell into the river oops";
	    	}
	    	break;
	    case 4:
	    	document.getElementById("situation").innerHTML = "You are trying to bargain with a merchant, but he kept insisting on the price.";
	    	if (int >= 17) {
	    		document.getElementById("result").innerHTML = "You successfuly pursuaded the merchant, you know have the item!";
	    	} else if (dex >= 15){
	    		document.getElementById("result").innerHTML = "Sly fox, you stole it without the merchant noticing it";
	    	} else {
	    		document.getElementById("result").innerHTML = "Ouch, the merchant didnt budge and you are forced to buy it";
	    	}
	    	break;
	    case 5:
	    	document.getElementById("situation").innerHTML = "A SUDDEN THIEF TRIES TO STAB YOU!";
	    	if (dex >= 15) {
	    		document.getElementById("result").innerHTML = "You dodged and swiftly subdued the thief!";
	    	} else if (str >= 20){
	    		document.getElementById("result").innerHTML = "... You are very strong and is immune to the stab... that thief is dead";
	    	} else {
	    		document.getElementById("result").innerHTML = "DAMMIT! your items got stolen and you're bleeding to death";
	    	}
	    	break;
	    case 6:
	    	document.getElementById("situation").innerHTML = "You found the legendary tome of Yolor, it radiates deep energy…";
	    	if (int >= 20) {
	    		document.getElementById("result").innerHTML = "You deciphered the entire book... you are now omnipotent...";
	    	} else if (int >= 14){
	    		document.getElementById("result").innerHTML = "You barely understant the book, but you got some decent spells out of it.";
	    	} else {
	    		document.getElementById("result").innerHTML = "You opened the book, its full of random giberish";
	    	}
	    	break;
	    case 7:
	    	document.getElementById("situation").innerHTML = "You’re trying to sneak by a troll guard";
	    	if (dex >= 12) {
	    		document.getElementById("result").innerHTML = "You passed the guard without it noticing!";
	    	} else if (str >= 9){
	    		document.getElementById("result").innerHTML = "eh... You just knocked it out since it was weak";
	    	} else {
	    		document.getElementById("result").innerHTML = "??? You got defeated by a weak troll?";
	    	}
	    	break;
	    case 8:
	    	document.getElementById("situation").innerHTML = "You are in Pisay… (bad)";
	    	if (int >= 20) {
	    		document.getElementById("result").innerHTML = "GWA: 1.25 (what a nerd)";
	    	} else if (int >= 16){
	    		document.getElementById("result").innerHTML = "GWA: 1.5 (DL moment)";
	    	} else if (int >=11){
	    		document.getElementById("result").innerHTML = "GWA: 1.75 (atleast its ok :'D)";
	    	} else {
	    		document.getElementById("result").innerHTML = "You are crying, pisay so scary";
	    	}
	    	break;
	    case 9:
	    	document.getElementById("situation").innerHTML = "Your clumsy teammate drops the cursed clay doll that you’ve recently stolen.";
	    	if (dex >= 14) {
	    		document.getElementById("result").innerHTML = "You quickly catched it! phew what a close one";
	    	} else {
	    		document.getElementById("result").innerHTML = "Uh oh... A curse now plague your entire party";
	    	}
	    	break;
	    case 10:
	    	document.getElementById("situation").innerHTML = "DRAGON!";
	    	if (str >= 16) {
	    		document.getElementById("result").innerHTML = "You defeated the dragon with your powerful strength!";
	    	} else if (dex >= 16){
	    		document.getElementById("result").innerHTML = "You defeated the dragon with your agile movesets!";
	    	} else if (int >=16){
	    		document.getElementById("result").innerHTML = "You defeated the dragon with your clever spells!";
	    	} else {
	    		document.getElementById("result").innerHTML = "You got defeated... you can do it next time!";
	    	}
	    	break;
	    case 11:
	    	document.getElementById("situation").innerHTML = "You’re hungry and lost in an enchanted forest, but you found some berry bushes.";
	    	if (int >= 15) {
	    		document.getElementById("result").innerHTML = "With your knowledge, you safely picked the right berries!";
	    	} else if (dex >= 20){
	    		document.getElementById("result").innerHTML = "frustrated, you climbed up the VERY tall trees to find the right way out!";
	    	} else {
	    		document.getElementById("result").innerHTML = "What? you got poisoned and cursed from the berries?!";
	    	}
	    	break;
	    case 12:
	    	document.getElementById("situation").innerHTML = "A handsome mysterious trader tries to sell you this “magical gem” that holds great power.";
	    	if (int >= 10) {
	    		document.getElementById("result").innerHTML = "With common sense, its obviously a scam so you refused";
	    	} else if (dex >= 20){
	    		document.getElementById("result").innerHTML = "You flirted?? and he flirted back??? well good for you";
	    	} else {
	    		document.getElementById("result").innerHTML = "You got scammed! it was just rock candy...";
	    	}
	    	break;
	    case 13:
	    	document.getElementById("situation").innerHTML = "A big stone door stops your party from entering the infamous Calakzor dungeon.";
	    	if (str >= 17) {
	    		document.getElementById("result").innerHTML = "You opened it! WOAH";
	    	} else if (int >= 13){
	    		document.getElementById("result").innerHTML = "Its just stone... you just instructed your party to bomb it up";
	    	} else {
	    		document.getElementById("result").innerHTML = "Well... you guys are stuck";
	    	}
	    	break;
	    case 14:
	    	document.getElementById("situation").innerHTML = "You suddenly woke up in the middle of the night to somebody trying to choke you.";
	    	if (dex >= 13) {
	    		document.getElementById("result").innerHTML = "You quickly broke out of the choking! you are know chasing the intruder";
	    	} else if (str >= 13){
	    		document.getElementById("result").innerHTML = "You punched the intruder! a fight ensue!!";
	    	} else {
	    		document.getElementById("result").innerHTML = "you died in your sleep";
	    	}
	    	break;
	    case 15:
	    	document.getElementById("situation").innerHTML = "A female Succubus is trying to seduce you";
	    	document.getElementById("result").innerHTML = "well you're gay... she was embarrassed and just moved on";
	    	break;
	}
}