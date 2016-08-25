// // form validation
// var validateName,
// 	validateEmail,
// 	validateSubject,
// 	validateMessage;

// function checkName(){
// 	var name = document.getElementById("name").value;
// 	if (name.match(/^(([a-zA-Z]*)\s([a-zA-Z]*))*$/) && name > "") {
// 		document.getElementById("feedback").style.display = "none";
// 		document.getElementById("name").className = "completed-input";
// 		validateName = true;
// 	}
// 	else {
// 		document.getElementById("feedback").style.display = "block";	
// 		document.getElementById("name").className = "wrong-input";
// 		validateName = false;
// 	}
// 	checkButton();
// };

// function checkEmail(){
// 	var email = document.getElementById("email").value;
// 	if (email.match(/(.*)@([a-z]*).([a-z]{2,3})$/)) {
// 		document.getElementById("feedback-email").style.display = "none";
// 		document.getElementById("email").className = "completed-input";
// 		validateEmail = true;
// 	}
// 	else {
// 		document.getElementById("feedback-email").style.display = "block";	
// 		document.getElementById("email").className = "wrong-input";
// 		validateEmail = false;
// 	}
// 	checkButton();
// };

// function checkSubject(){
// 	var subject = document.getElementById("subject").value;
// 	if (subject.match(/^(.*)$/) && subject > "") {
// 		document.getElementById("feedback-subject").style.display = "none";
// 		document.getElementById("subject").className = "completed-input";
// 		validateSubject = true;
// 	}
// 	else {
// 		document.getElementById("feedback-subject").style.display = "block";	
// 		document.getElementById("subject").className = "wrong-input";
// 		validateSubject = false;
// 	}
// 	checkButton();
// };

// function checkMessage(){
// 	var message = document.getElementById("message").value;
// 	if (message.match(/^(.*)$/) && message > "") {
// 		document.getElementById("feedback-message").style.display = "none";
// 		document.getElementById("message").className = "completed-input";
// 		validateMessage = true;
// 	}
// 	else {
// 		document.getElementById("feedback-message").style.display = "block";	
// 		document.getElementById("message").className = "wrong-input";
// 		validateMessage = false;
// 	}
// 	checkButton();
// };

// function checkButton(){
// 	if (validateName && validateEmail && validateSubject && validateMessage){
// 		document.getElementById("submit").disabled = false;
// 	}
// 	else{
// 		document.getElementById("submit").disabled = true;
// 	}
// };