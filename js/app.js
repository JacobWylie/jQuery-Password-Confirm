// problem: hints are shown when form is valid
// solution: hide and show at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
// hide hints
$("form span").hide();

function passwordEvent(){
	// find out if password is valid
	if($password.val().length > 8) {
		// hide hint if valid
		$password.next().hide();
	} else {
		// else show hint		
		$password.next().show();
	}
}

function confirmPasswordEvent() {
	// find out if password and confirmation match
	if ($password.val() === $confirmPassword.val()) {
		// hide hint if match
		$confirmPassword.next().hide();		
	} else {
		// else show hint
		$confirmPassword.next().show();		
	}
}

// when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


// when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
