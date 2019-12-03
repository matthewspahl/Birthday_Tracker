$("button[name='signup']").click(function(event) {   

    if (document.getElementById("formErrors2").value === "verified"){

    // Create a credential object from the form fields
    let credentials = {
       username: $("input[name='usrSignUp']").val(),
       password: $("input[name='pwdSignUp']").val()
    };
    // POST a request with the user credentials to the Server API
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/signup",
        data: credentials
    }).done(function(data) {
        //Store the jwt token for later use
        sessionStorage.setItem('token', data.token);
        //redirect to the Fridge
        window.location.href = "myFridge.html";
    }).fail(function(jqXHR) {
        $("#error").html("The user could not be registered.");
    });
}
});