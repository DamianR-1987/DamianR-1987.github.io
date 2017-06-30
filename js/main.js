$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $("nav").find(".sr-only").remove(".sr-only");
    $(this).append("<span class='sr-only'>(current)</span>");
});

$(document).ready(function () {
    
function Slider(){
    $(".banner").css({'background-image': 'linear-gradient(to bottom, rgba(252,227,138,0.3) 0%,rgba(252,227,138,0.5) 51%,rgba(252,227,138,1) 100%), url("./img/slide_1.png")'});
    $(".progress-bar").eq(0).animate({width:"100%"},3000, function(){
        $(".banner").css({'background-image': 'linear-gradient(to bottom, rgba(252,227,138,0.3) 0%,rgba(252,227,138,0.5) 51%,rgba(252,227,138,1) 100%), url("./img/slide_2.jpg")'});
        $(".progress-bar").eq(1).animate({width:"100%"},3000, function(){
            $(".banner").css({'background-image': 'linear-gradient(to bottom, rgba(252,227,138,0.3) 0%,rgba(252,227,138,0.5) 51%,rgba(252,227,138,1) 100%), url("./img/slide_3.jpg")'});
            $(".progress-bar").eq(2).animate({width:"100%"},3000, function(){
                $(".banner").css({'background-image': 'linear-gradient(to bottom, rgba(252,227,138,0.3) 0%,rgba(252,227,138,0.5) 51%,rgba(252,227,138,1) 100%), url("./img/slide_4.jpg")'});
                $(".progress-bar").eq(3).animate({width:"100%"},3000, function(){
                    $(".banner").css({'background-image': 'linear-gradient(to bottom, rgba(252,227,138,0.3) 0%,rgba(252,227,138,0.5) 51%,rgba(252,227,138,1) 100%), url("./img/slide_5.jpg")'});
                });
            });
        });
    });
    //Slider(); funkcja nie może powtarzać się sama w sobie
}

});