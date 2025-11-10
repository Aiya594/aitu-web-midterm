$(document).ready(function () {
    let bookings = [];

    //add booking to table on form submit
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

        if (!valid) {
            $("#bookingFeedback").text("Please check the fields and try again.").css("color", "red").fadeIn().delay(3000).fadeOut();
            return;
        }

        //create booking object
        const booking = {
            name: $("#name").val(),
            phone: $("#phone").val(),
            people: $("#people").val(),
            date: $("#date").val(),
            time: $("#time").val()
        };
        bookings.push(booking);

        //add to table
        const row = `<tr>
            <td>${booking.name}</td>
            <td>${booking.phone}</td>
            <td>${booking.people}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>
                <button class="btn btn-sm btn-info editBtn">Edit</button>
                <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
            </td>
        </tr>`;
        $("#bookingTable tbody").append($(row));

        $("#bookingFeedback").text("Your table has been successfully booked!").css("color", "green").fadeIn().delay(3000).fadeOut();
        $("#bookingForm")[0].reset();
    });

    //delete booking
    $("#bookingTable").on("click", ".deleteBtn", function () {
        if (confirm("Are you sure you want to delete this booking?")) {
            $(this).closest("tr").fadeOut(500, function () { $(this).remove(); });
        }
    });

    //edit booking (simple inline editing)
    $("#bookingTable").on("click", ".editBtn", function () {
        const row = $(this).closest("tr");
        row.find("td:not(:last)").each(function () {
            const val = $(this).text();
            $(this).html(`<input type="text" class="form-control" value="${val}" />`);
        });
        $(this).removeClass("editBtn btn-info").addClass("saveBtn btn-success").text("Save");
    });

    //save edited booking
    $("#bookingTable").on("click", ".saveBtn", function () {
        const row = $(this).closest("tr");
        row.find("td:not(:last)").each(function () {
            const val = $(this).find("input").val();
            $(this).text(val);
        });
        $(this).removeClass("saveBtn btn-success").addClass("editBtn btn-info").text("Edit");
    });

});
