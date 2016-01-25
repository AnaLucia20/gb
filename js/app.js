$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 50) {
        
    	$("#navbar-gb").css("background-color", "rgb(0, 188, 212)");
    	$(".nav.navbar-nav>li>a").css("color", "#fff");
    	$("#logo-gb").attr("src","logo-final-white.png");
    	$(".navbar-default").css("padding-top","0");
    } else {
       $("#navbar-gb").css("background-color", "transparent");
       $(".nav.navbar-nav>li>a").css("color", "black");
       $("#logo-gb").attr("src","logo-final.png");
       $(".navbar-default").css("padding-top","20px");
    }
});

$(window).resize(function() {
 // This will execute whenever the window is resized
 console.log("height: "+$(window).height()); // New height
 console.log("width: "+$(window).width()); // New width
});
