$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $("nav").find(".sr-only").remove(".sr-only");
    $(this).append("<span class='sr-only'>(current)</span>");
});

$(document).ready(function () {


function makeProgress(){
    $(".progress-bar").each(function(){
        if($(this).is("active") == true){
            var i = 0;
            while(i < 100){
            i = i + 1;
            $(this).css("width", i + "%");
            }
        }
        $(this).removeClass("active");
       });
}
});
    
/*
$(".progress-bar.active").each(function(i,e){
console.log($(this).next(".progress-bar"));
});

$(".progress-bar[active=yes]").attr("active","no");
console.log($(".progress-bar[active=yes]").next(".progress-bar[active=no]"));
    
for(j=0;j<3;j++){
    makeProgress();
}
*/