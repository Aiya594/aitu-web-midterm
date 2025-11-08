$(document).ready(function () {
    $("#bookingForm").on("submit", function (e) {
        e.preventDefault();
        let valid = true;

        $(this).find("input, select").each(function () {
            if (!$(this).val()) {
                $(this).css("border-color", "red");
                valid = false;
            } else {
                $(this).css("border-color", "#868859");
            }
        });

        const selectedDate = new Date($("#date").val());
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            $("#date").css("border-color", "red");
            valid = false;
        }

        if (valid) {
            $("#bookingFeedback")
                .text("Your table has been successfully booked!")
                .css("color", "green")
                .fadeIn()
                .delay(3000)
                .fadeOut();
            $("#bookingForm")[0].reset();
        } else {
            $("#bookingFeedback")
                .text("Please check the fields and try again.")
                .css("color", "red")
                .fadeIn()
                .delay(3000)
                .fadeOut();
        }
    });
});