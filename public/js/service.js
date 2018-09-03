/**
 * Common services used by all the other scripts
 * All these are generic functions
 *  
*/

// To toggle between different views
function showForm (id) {
    // Hide all views
    $("#addInfo").addClass("hide");
    $("#showInfo").addClass("hide");

    // Show the view user had clicked
    $(id).removeClass("hide");
}

// Validate Email based upon pattern
function validateEmail (email) {
    if ( email && email.match(/^([A-z0-9_.]{2,})([@]{1})([A-z]{1,})([.]{1})([A-z.]{1,})*$/) ) {
        return true;
    }
    return false;
}

// Validate First Name based upon pattern
function validateFname (fName) {
    if ( fName && fName.match(/^([A-z]{2,})*$/) ) {
        return true;
    }
    return false;
}

// Validate Last Name based upon pattern
function validateLname (lName) {
    if ( lName && lName.match(/^([A-z]{2,})*$/) ) {
        return true;
    }
    return false;
}

// Validate Phone based upon pattern
function validatePhone (phone) {
    if ( phone && phone.match(/^([0-9]{10})*$/) ) {
        return true;
    }
    return false;
}

// Validate Gender based upon pattern
function validateGender (gender) {
    if ( gender && gender.match(/^([A-z]{4,6})*$/) && (gender === "male" || gender === "female") ) {
        return true;
    }
    return false;
}