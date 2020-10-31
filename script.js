var score1 = 0, score2 = 0;

var firstPlayerScore = document.querySelectorAll("h2")[0];
var secondPlayerScore = document.querySelectorAll("h2")[1];

firstPlayerScore.textContent = score1, secondPlayerScore.textContent = score2;

function userEntry()
{
	var letters = /^[A-Za-z]+$/;
	var player = prompt("Welcome pal ! Please enter your name:");

	if(player.length < 2)
	{
		alert("Stop being lazy and enter your name first to start the game:");
		return false;
	}
	else if(player.match(letters))
	{
		document.querySelectorAll(".container")[0].classList.add("hide");
		document.querySelectorAll(".container")[1].classList.remove("hide");

		var players = ["Chandler", "Joey", "Ross", "Monica", "Rachel", "Pheobe"];
		var randomSecondPlayer = Math.floor(Math.random() * players.length);
		var secondPlayer = document.querySelector("#player2").textContent = players[randomSecondPlayer];
		var firstPlayer = document.querySelector("#player1").textContent = player;
		return true;
	}
	else
	{
		alert("Your name must contain letters only!");
		return false; 
	} 
}

function play()
{
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var image_path1 = "images/dice" + String(randomNumber1) + ".png";
	document.querySelector("img.img1").setAttribute("src", image_path1);

	setTimeout(function(){
		var randomNumber2 = Math.floor(Math.random() * 6) + 1;
		var image_path2 = "images/dice" + String(randomNumber2) + ".png";
		document.querySelector("img.img2").setAttribute("src", image_path2);

		if(randomNumber1 > randomNumber2)
		{
			document.querySelectorAll('h1')[1].textContent="🎉 " + document.querySelector("#player1").textContent + " Wins! 🎊";
			firstPlayerScore.textContent = ++score1;
		}
		else if(randomNumber1 < randomNumber2)
		{
			document.querySelectorAll('h1')[1].textContent="🎊 " + document.querySelector("#player2").textContent + " Wins! 🎉";
			secondPlayerScore.textContent = ++score2;
		}
		else
		{
			document.querySelectorAll('h1')[1].textContent="🎭 It's a Draw! 🎭";
		}
	}, 400);
}

function reset()
{
	document.querySelectorAll('h1')[1].textContent="";

	firstPlayerScore.textContent = 0;

	secondPlayerScore.textContent = 0;

	document.querySelector("img.img1").setAttribute("src", "images/dice6.png");

	document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}