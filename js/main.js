
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