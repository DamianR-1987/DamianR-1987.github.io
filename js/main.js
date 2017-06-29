$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $("nav").find(".sr-only").remove(".sr-only");
    $(this).append("<span class='sr-only'>(current)</span>");
});

$(document).ready(function () {
    $(".progress-bar").eq(0).animate({width:"100%"},500);
    $(".progress-bar").eq(1).animate({width:"100%"},900);
    //console.log($(".progress-bar").eq(2));
    //console.log($(".progress-bar").eq(3));
});