
var $progressBar = $(".progress-bar");
var pbc = $(".progress").length; //progressbar count
var pbw = $(".progress").width(); //progressbar width
var d = 4000; //duration per slides
var i = 0;

function current(){
    $(".nav a").on("click", function () {
        $("nav").find(".sr-only").remove(".sr-only");
        $(this).append("<span class='sr-only'>(current)</span>");
    });
}

function progressBar(){
    if(i==0){
        $progressBar.addClass("notransition");
        $progressBar.animate({width: 0},0);
    } else {
        $progressBar.removeClass("notransition");
    }
    $progressBar.eq(i).animate({"width":pbw},d);
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
                
        if(i == 0){
            $(".banner").removeClass("slide_4");
            $(".banner").addClass("slide_1");
        } else if(i == 1){
            $(".banner").removeClass("slide_1");
            $(".banner").addClass("slide_2");
        } else if(i == 2){
            $(".banner").removeClass("slide_2");
            $(".banner").addClass("slide_3");
        } else if(i == 3){
            $(".banner").removeClass("slide_3");
            $(".banner").addClass("slide_4");
        }
            
    },d);
}

function searchButton(){
    var $searchBtn = $("#searchBtn");
    $searchBtn.on("click", function(){
        $("#searchForm").fadeToggle();
    });
}

function showShoppingCartModal(){
    var $shoppingCartBtn = $("#shoppingCartBtn");
    
    $shoppingCartBtn.on("click", function(){
       $("#shoppingCartModal").modal(); 
    });
    
}

$(document).ready(function () {
    current();
    slider();
    searchButton();
    showShoppingCartModal();
});