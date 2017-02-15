// problem: hints are shown when form is valid
// solution: hide and show at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");
// hide hints
$("form span").hide();

function isUsernamePresent() {
	return $username.val().length > 0;
}

function isPasswordValid() {
	return $password.val().length > 8;
}

function arePasswordsMatching() {
	return $password.val() === $confirmPassword.val();
}

function canSubmit() {
	return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
	// find out if password is valid
	if(isPasswordValid()) {
		// hide hint if valid
		$password.next().hide();
	} else {
		// else show hint		
		$password.next().show();
	}
}

function confirmPasswordEvent() {
	// find out if password and confirmation match
	if(arePasswordsMatching()) {
		// hide hint if match
		$confirmPassword.next().hide();		
	} else {
		// else show hint
		$confirmPassword.next().show();		
	}
}

function enableSubmitEvent() {
	$("#submit").prop("disabled", !canSubmit());
}

// when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


// when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();





















