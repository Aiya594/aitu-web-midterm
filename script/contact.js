$(document).ready(function () {
    //form validation
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        let valid = true;

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const pass = $("#password").val().trim();
        const confirmPass = $("#confirmPassword").val().trim();
        const message = $("#message").val().trim();

        //reset feedback
        $(".invalid-feedback").remove();
        $("input, textarea").removeClass("is-invalid is-valid");

        //check name
        if (name === "") {
            $("#name").addClass("is-invalid").after('<div class="invalid-feedback">Name is required.</div>');
            valid = false;
        } else {
            $("#name").addClass("is-valid");
        }

        //check email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#email").addClass("is-invalid").after('<div class="invalid-feedback">Enter a valid email.</div>');
            valid = false;
        } else {
            $("#email").addClass("is-valid");
        }

        if (pass === "") {
            $("#password").addClass("is-invalid").after('<div class="invalid-feedback">Password required.</div>');
            valid = false;
        } else {
            $("#password").addClass("is-valid");
        }

        //confirming password
        if (confirmPass !== pass) {
            $("#confirmPassword").addClass("is-invalid").after('<div class="invalid-feedback">Passwords dont match.</div>');
            valid = false;
        } else if (confirmPass) {
            $("#confirmPassword").addClass("is-valid");
        }

        //message 
        if ($("#message").length && message === "") {
            $("#message").addClass("is-invalid").after('<div class="invalid-feedback">Message cannot be empty.</div>');
            valid = false;
        } else {
            $("#message").addClass("is-valid");
        }

        if (valid) {
            alert("Form submitted successfully!");
            $(this).trigger("reset");
            $(".is-valid").removeClass("is-valid");
        }


    });

});