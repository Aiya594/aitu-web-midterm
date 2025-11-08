$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        let valid = true;

        $(this).find("input, textarea").each(function () {
            if (!$(this).val().trim()) {
                $(this).css("border-color", "red");
                valid = false;
            } else {
                $(this).css("border-color", "#868859");
            }
        });

        const email = $("#email").val();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            $("#email").css("border-color", "red");
            valid = false;
        }

        if (valid) {
            $("#feedback")
                .text("Thank you! Your message has been sent successfully.")
                .css("color", "green")
                .fadeIn()
                .delay(2000)
                .fadeOut();
            $("#contactForm")[0].reset();
        } else {
            $("#feedback")
                .text("Please fill all fields correctly.")
                .css("color", "red")
                .fadeIn()
                .delay(2000)
                .fadeOut();
        }
    });
});