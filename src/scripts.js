const $ = window.$;
const mobile = window.matchMedia( "(max-width: 600px)" );

if (mobile.mataches){
    document.getElementsByClassName("tooltip").clickable="true";
    $(document).ready(function(){
        var vnShow = document.getElementById("vietnamese");

    if(vnShow.classList.contains("show")) {
       $("body").click( function(e){
           $("#vietnamese").removeClass("show");
       })
    }
    
    var canShow = document.getElementById("cantonese");

    if(vnShow.classList.contains("show")) {
       $("body").click( function(e){
           $("#cantonese").removeClass("show");
       })
    }
    
    var cnShow = document.getElementById("mandarin");

    if(vnShow.classList.contains("show")) {
       $("body").click( function(e){
           $("#mandarin").removeClass("show");
       })
    }
    
    var enShow = document.getElementById("english");

    if(vnShow.classList.contains("show")) {
       $("body").click(function(e){
           $("#english").removeClass("show");
       })
    }
    
    var aslShow = document.getElementById("asl");

    if(vnShow.classList.contains("show")) {
       $("body").click( function(e){
           $("#asl").removeClass("show");
       })
    }
    })
    
    
}