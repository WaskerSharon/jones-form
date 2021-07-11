

export default function validateInfo(values) {
    let errors = {};

    if ( !values.firstName.trim() ) {
        errors.firstName = "First name required";
    } else if ( !values.firstName.length > 1) {
        errors.firstName = "First name needs to be more than 1 caracter";
    }


    if ( !values.lastName.trim() ) {
        errors.lastName = "Last name required";
    } else if ( !values.lastName.length > 1) {
        errors.firstName = "Last name needs to be more than 1 caracter";
    }

    if ( !values.email ) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if ( !values.phoneNumber ) {
        errors.phoneNumber = "Phone number required";
    // } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im(values.phoneNumber)) {
    } else if ( values.phoneNumber.length < 11 ) {
        errors.phoneNumber = "Phone number needs to be 10 caracters";
    }

    return errors;
};