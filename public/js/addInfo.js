function addInfo() {
    // JavaScript uses `id` to fetch value
    let email               = $("#addEmail").val(),
        fName               = $("#addFname").val(),
        lName               = $("#addLname").val(),
        phone               = $("#addPhone").val(),
        gender              = $("#addGender").val();

    // Show error `span` when email is invalid
    if ( validateEmail(email) ) {
        $("#addEmailError").addClass("hide");
    } else {
        $("#addEmailError").removeClass("hide");
        return;
    }

    // Show error `span` when First Name is invalid
    if ( validateFname(fName) ) {
        $("#addFnameError").addClass("hide");
    } else {
        $("#addFnameError").removeClass("hide");
        return;
    }

    // Show error `span` when Last Name is invalid
    if ( validateLname(lName) ) {
        $("#addLnameError").addClass("hide");
    } else {
        $("#addLnameError").removeClass("hide");
        return;
    }

    // Show error `span` when Phone is invalid
    if ( validatePhone(phone) ) {
        $("#addPhoneError").addClass("hide");
    } else {
        $("#addPhoneError").removeClass("hide");
        return;
    }

    // Show error `span` when Gender is invalid
    if ( validateGender(gender) ) {
        $("#addGenderError").addClass("hide");
    } else {
        $("#addGenderError").removeClass("hide");
        return;
    }

    // Calling local API to set authentication
    // Everything in public is visible for hackers
    // Thus to hide auth calling local backend
    $.ajax({
        "url": "/v1/detail",
        "method": "POST",
        "data": {email, fName, lName, phone, gender}
    })
    .then( result => {
        // On success empty all the input fields.
        $("#addEmail").val('');
        $("#addFname").val('');
        $("#addLname").val('');
        $("#addPhone").val('');
        $("#addGender").val("");

        // Message to notify success submition
        alert("Successfully added user.");
        return;
    })
    .catch( err => {
        // Notify in case some error occured
        alert("An error occured.");
        return;
    });
}