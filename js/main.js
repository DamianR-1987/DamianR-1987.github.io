$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $("nav").find(".sr-only").remove(".sr-only");
    $(this).append("<span class='sr-only'>(current)</span>");
});

$(document).ready(function () {
var j = 0;
function makeProgress(){
    var i = 0;
    while(i < 100){
        i = i + 1;
        $(".progress-bar.active").css("width", i + "%");
    }
    console.log($(".progress-bar.active").next("progress-bar"));
    /*$(".progress-bar[active=yes]").attr("active","no");
    console.log($(".progress-bar[active=yes]").next(".progress-bar[active=no]"));*/
}
/*for(j=0;j<3;j++){
    makeProgress();
}*/
    makeProgress();
});