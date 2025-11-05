$(document).ready(function () {
    //Page fade-in animation
    $("body").css("display", "none").fadeIn(1000);

    //Animate buttons on hover 
    $(".btn").hover(
        function () {
            $(this).animate({ paddingLeft: "25px" }, 200);
        },
        function () {
            $(this).animate({ paddingLeft: "15px" }, 200);
        }
    );

    //Highlight active navigation link 
    $(".nav-list a").on("click", function () {
        $(".nav-list a").removeClass("active");
        $(this).addClass("active");
    });

});
