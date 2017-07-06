/*
var $progressBar = $(".progress-bar");
var pbc = $(".progress").length; //progressbar count
var pbw = $(".progress").width(); //progressbar width
var d = 4000; //duration per slides
var i = 0;
    
function progressBar(){
    if(i==0){
        $progressBar.addClass("notransition");
        $progressBar.animate({width: 0},0);
    } else {
        $progressBar.removeClass("notransition");
    }
    $progressBar.eq(i).animate({"width":pbw},d);
}

function prevSlide(){
    $prevSlide = $(".prevSlide");
    $prevSlide.on("click", function(){
        console.log("jestem tu, i = "+i);
        if(i == 0){
            $progressBar.animate({"width":pbw},0);
            i = 3;
        } else {
            i--;
            $(".progress-bar:gt("+i+")").animate({"width":0},0);
        }
    });
}

function nextSlide(){
    $nextSlide = $(".nextSlide");
    $nextSlide.on("click", function(){
        if(i == 3){
            i = 0;
        } else {
            i++;
        }
    });
}

function slider(){
    progressBar();
        
    setInterval(function(){
       if(i == pbc - 1){
           i = 0;
       } else {
           i++;
       }
        progressBar();
        
        prevSlide();
        nextSlide();
        
        if(i == 0){
            $("section").removeClass("slide_4");
            $("section").addClass("slide_1");
        } else if(i == 1){
            $("section").removeClass("slide_1");
            $("section").addClass("slide_2");
        } else if(i == 2){
            $("section").removeClass("slide_2");
            $("section").addClass("slide_3");
        } else if(i == 3){
            $("section").removeClass("slide_3");
            $("section").addClass("slide_4");
        }
            
    },d);
}
*/

function current(){
    $(".nav a").on("click", function () {
        $("nav").find(".sr-only").remove(".sr-only");
        $(this).append("<span class='sr-only'>(current)</span>");
    });
}

$(document).ready(function () {
    current();
});