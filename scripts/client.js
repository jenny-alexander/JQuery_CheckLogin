console.log(`js`);

//JQ handshake
$( document ).ready( onReady );

function onReady() {
    console.log(`JQ is ready`);

    //Button to validate username and password
    $( '#validateInput' ).on( 'click', checkInput );
}

function checkInput() {

    let email = $( '#email' ).val();
    console.log(`email:`,email);
    let pwd = $( '#password' ).val();
    console.log(`password:`,pwd);

    let result = "Great! you can enter.";
    outputResult( result );
}

function outputResult( result ) {

    console.log(result);
    let elCheckResult = $( '#checkResult' );
    elCheckResult.empty();
    elCheckResult.append( result );

}

