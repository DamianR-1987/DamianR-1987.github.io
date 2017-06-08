$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $("nav").find(".sr-only").remove(".sr-only");
    $(this).append("<span class='sr-only'>(current)</span>");
});