$(document).ready(function () {

    $("body").css("display", "none").fadeIn(1000);

    $(".btn").hover(
        function () {
            $(this).animate({ paddingLeft: "25px" }, 200);
        },
        function () {
            $(this).animate({ paddingLeft: "15px" }, 200);
        }
    );

    $(".nav-list a").on("click", function () {
        $(".nav-list a").removeClass("active");
        $(this).addClass("active");
    });

});
