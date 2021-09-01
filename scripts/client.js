//JS handshake
console.log(`js`);

//JQ handshake
$( document ).ready( onReady );

/** onReady function sets up the JQuery to be ready for the button click
 * to validate the email and password.
 */
function onReady() {
    console.log(`JQ is ready`);

    //Button to validate username and password
    $( '#validateInput' ).on( 'click', checkInput );
}

/** checkInput calls the validation functions again email and password
 * and passes results to outputResult function
 */
function checkInput() {

    let email = $( '#email' ).val();
    let pwd = $( '#password' ).val();

    if ( email.length === 0 || pwd.length === 0 ) {
       outputResult( `Enter both email and password before hitting button.` );
    } else {
        if ( validateEmail( email ) === true && validatePwd( pwd ) === true ) {
            outputResult(`Cool, you did it!`);
        } else {
            outputResult(`Incorrect format for username and/or password.`);
        }
    }
}

/** elCheckResult takes the result of the email/pwd validation and outputs to DOM */
function outputResult( result ) {

    let elCheckResult = $( '#checkResult' );
    elCheckResult.empty();
    elCheckResult.append( result );

}

/** validateEmail checks for `@` and `.` in email address */  
function validateEmail( email ) {
    console.log(`in validateEmail:`);
    if ( email.includes(`@`) && email.includes(`.`) ) {
        return true;
    } else {
        return false;
    }
}

/** validatePwd checks for 3 things
 * 1- check that password is at least 8 characters long
 * 2- check that password has at least 1 number
 * 3- check that password has at least 1 uppercase character
 */
function validatePwd( password ) {
    console.log("in validatePwd")

    //Create regular expressions to validate against
    const regexNumber = /\d/;  //checks for number 
    const regexUpperCase = /[A-Z]/; //checks for uppercase letter

    if ( password.length >= 8  && 
         regexNumber.test( password ) &&
         regexUpperCase.test( password ) ) {
             return true;
    } else {
        return false;
    }

}

