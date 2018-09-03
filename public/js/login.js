function submit() {
    // JavaScript uses `id` to fetch value
    let email               = $("#email1").val(),
        password            = $("#password1").val();

    let emailError          = false,
        passwordError       = false;

    // Regex for email validation
    let emailRegex          = /^([A-z0-9_.]{2,})([@]{1})([A-z]{1,})([.]{1})([A-z.]{1,})*$/;

    // Check for email
    if ( !email ) {
        emailError          = true;
    } else if ( !email.match(emailRegex) ) {
        emailError          = true;
    }

    // Check for password
    if ( !password ) {
        passwordError       = true;
    }

    // Show error `span` when email is invalid
    if (emailError) {
        $("#emailError").removeClass("hide");
    } else {
        $("#emailError").addClass("hide");
    }

    // Show error `span` when password is invalid
    if (passwordError) {
        $("#passwordError").removeClass("hide");
    } else {
        $("#passwordError").addClass("hide");
    }

    // When all is fine `submit` `form`
    if ( !emailError && !passwordError) {
        $("#loginForm").submit();
    }
    return;
}