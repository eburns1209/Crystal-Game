$(document).ready(function(){

	
	var crystals = ["assets/images/red.png", "assets/images/blue.png",
				"assets/images/yellow.png", "assets/images/green.png"];
	
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);

	newCrystals();
	newGame();

	function newCrystals (){
	//initialize an array
	var numbers = []
	//generate x random numbers into an array
		while (numbers.length < 4){
			//generate random number
				var randomnumber = Math.ceil(Math.random() * 12)
				//initialize boolean
				var found = false;
				for (var i =0; i < numbers.length; i++){
					//if the number exists in array then break from while loop
					if (numbers[i] === randomnumber){
							found === true; break
						}
				}
					//if the number is not found then add it to array
					if (!found)numbers[numbers.length]=randomnumber;
		}

		//collect numbers from array in console
		console.log(numbers);
		//generates a loop to add images to buttons
		for (i = 0; i < numbers.length; i++){
			var imageCrystal = $("<img>");
			imageCrystal.attr("data-num" , numbers[i]);
			imageCrystal.attr("src", crystals[i]);
			imageCrystal.attr("alt", "crystals");
			imageCrystal.addClass("crystalImage")
			$("#crystals").append(imageCrystal);
		}
	}

		function newGame(){

			counter = 0;
			$("#yourScore").text(counter);

			function getRandomInRange(min, max){
//this below function (for number to guess) is going to return a random integer in the range, and 
//include both min and max
				return Math.floor(Math.random() * (max-min+1))+min;
				}
			
			var numberToGuess = getRandomInRange(19,120);

			$(".value").text(numberToGuess);

			$(".crystalImage").on("click", function(){
				counter = counter + parseInt($(this).data("num"));

				$("#yourScore").text(counter);

				if (counter === numberToGuess){
					wins++;
					$("#win").text(wins);
					console.log(wins)
					$("#crystals").empty();
					newCrystals();
					newGame();
				}
				else if(counter > numberToGuess){
					losses++;
					$("#loss").text(losses);
					console.log(losses)
					$("#crystals").empty();
					newCrystals();
					newGame();
				}
			});
		}
});


  




