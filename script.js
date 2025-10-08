//navbar script
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");

        }
    })
});

//animation typing script
var typed = new Typed(".typing", {
    strings: ["Coach", "Programmer", "Developer"],
    typeSpeed: 65,
    backSpeed: 35,
    loop: true
});