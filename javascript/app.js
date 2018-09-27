	
	$("#startButton").toggle(true);
	$("#begin").show();
	$("#question-container").toggle(false);
	$("#quiz").toggle(false);
	$("finalDiv").toggle(false);
		

	//create event to activate start button and display quiz
	$("#startButton").on("click", function(){
		timeOut();
		$("#question-container").toggle(true);
		$("#quiz").toggle(true);
		$("#timer").show();
		$("#submitButton").show();
		$("#startButton").toggle(false);
		$(".panel-body").show();
		$("finalDiv").toggle(false);
	});
  

		// Sound:
		new Audio('./assets/audio/My-Shot.mp3').play();

  		//global variables
		var correctAnswers = 0;
		var wrongAnswers = 0;
		var unanswered = 0;
		var userAnswer = [];
		var questionAnswer = [];

		var intervalId;

		var isRadio = $("input[type = 'radio']");
		 	console.log(isRadio);

		var trivia = [
			{
				question: "",
				answers: [""],
				rightAnswer: 4,
			},

			{
				question: "",
				answers: [""],
				rightAnswer: 3,
			},

			{
				question: "",
				answers: [""],
				rightAnswer: 3,
			},

			{
				question: "",
				answers: [""],
				rightAnswer: 2,
			},

			{
				question: "",
				answers: [""],
				rightAnswer: 1,
			},

		];


		//target the correct answers 
		for (i = 0; i < trivia.length; i++){
			var choiceArray = trivia[i].question;
			questionAnswer.push(trivia[i].rightAnswer);
			
		}
		console.log(questionAnswer);


		//30 seconds on the clock
		function timeOut(){

			setTimeout(tenSeconds, 20000);
			var timeUpvar = setTimeout(timeUp, 30000);
			timeUpvar;
			stopTimeout();
		}

		function stopTimeout(){
			clearTimeout(intervalId);
		}
		


		// tell user they have 10 secs left
		function tenSeconds(){
			$("#timer").show();
			$("#timer").html("<h3>10 seconds left!</h3>");
			console.log("10 seconds left!");

		}

		function timeUp(){
			$("#finalDiv").html("<h4>Great Job!</h4");
			
			console.log("over");
			for (i = 0; i < isRadio.length; i++){

				//get user input value from radio buttons
				if (isRadio[i].checked === true){
					var int = parseInt(isRadio[i].value);
					userAnswer.push(int);

				}
			stopTimeout();
			}

			console.log(userAnswer);

		$("#question-container").hide();
		$("#quiz").hide();
		$("#begin").hide();
		$("#submitButton").hide();
		$("#submit").hide();
		$("#startButton").hide();
		$(".panel-body").hide();
		$("finalDiv").show();
		$("finalDiv").text("<h3>Finished!</h3><p>Your Score</p><p>Right: " + correctAnswers + "</p><p>Wrong: "+ wrongAnswers +"</p>");

		}

		//create radio buttons with answers attached. they need the same name and type so only one can be checked at a time
		//they each have their own value to be used to compare correct answer to user answer
		function radioButtons(name, text) {

			var form = document.createElement("form");
			radio = document.createElement("input");
			radio.type = "radio";
			radio.name = "b";
			radio.value = 1;
			form.appendChild(radio);
			form.appendChild(document.createTextNode(text[0]));
			
			var radioTwo = document.createElement("input");
			radioTwo.type = "radio";
			radioTwo.name = "b";
			radioTwo.value = 2;
			form.appendChild(radioTwo);
			form.appendChild(document.createTextNode(text[1]));

			var radioThree = document.createElement("input");
			radioThree.type = "radio";
			radioThree.name = "b";
			radioThree.value = 3;
			form.appendChild(radioThree);
			form.appendChild(document.createTextNode(text[2]));

			var radioFour = document.createElement("input");
			radioFour.type = "radio";
			radioFour.name = "b";
			radioFour.value = 4;
			form.appendChild(radioFour);
			form.appendChild(document.createTextNode(text[3]));

			return form;
		};

		//put the questions, answers and radio buttons on the page
		for (i = 0; i < trivia.length; i++) {

			var list = trivia[i].answers;

			$("#quiz").append("<p>" + trivia[i].question + "</p>");
			
			var button = radioButtons("button", list);
			$("#quiz").append(button);
			
		}

		//testing if radio buttons work
		$(".radioButton").on("click", function(){
			console.log($(this));
		});

		//target the user answers this doesnt work yet
		for (i = 0; i < trivia.length; i++){
			var userArray = trivia[i].question;
			userAnswer.push(trivia[i].userAnswer);
			
		}
		console.log(userAnswer);

		//create event to submit user answers and stop timer 
		$("#submitButton").on("click", function(){

			//compare user input with correct answers  this is not working, need for loop generating user answer array
			//need to generate array of user answers and compare it to correct answers
			for (i = 0; i < questionAnswer.length; i++){
				if (userAnswer[i] === questionAnswer[i]){
					correctAnswers++;
				}

				if (userAnswer[i] !== questionAnswer[i]){
					wrongAnswers++;
				} 
			}

			timeUp();
			stopTimeout();
			
			for(i = 0; i < isRadio.length; i++){
			 	if(isRadio[i].checked === true){
			 		var int = parseInt(isRadio[i].value);
			 		userAnswer.push(int);
			 	}

			console.log("right  " + correctAnswers);
			console.log("wrong  " + wrongAnswers);

		
			 };

			 

		$("#quiz").toggle(false);
		$("#begin").hide();
		$("#timer").hide();
		$("#submitButton").hide();
		$("#submit").hide();
		$("#startButton").toggle(true);
		$(".panel-body").show();
		$("finalDiv").toggle(true);
		$("finalDiv").html("<h3>Finished!</h3><p>Your Score</p><p>Right: " + correctAnswers + "</p><p>Wrong: "+ wrongAnswers +"</p>");
		$("finalDiv").html('')
		

		console.log("right  " + correctAnswers);
		console.log("wrong  " + wrongAnswers);
		})

	
