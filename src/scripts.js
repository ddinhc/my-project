const $ = window.$;
const mobile = window.matchMedia( "(max-width: 600px)" );

if (mobile.mataches){
    document.getElementsByClassName("tooltips").clickable="true";
  
        var vnShow = document.getElementById("vietnamese");

    if(vnShow.hasClass("show")) {
       $("*").onTouchStart( function(e){
           $("#vietnamese").removeClass('show');
       })
    }
    
    var canShow = document.getElementById("cantonese");
    if(canShow.classList.contains("show")) {
        $("*").parent().onTouchStart(function(e){
         
           $("#cantonese").removeClass('show');
                 })
       }
  
    
    var cnShow = document.getElementById("mandarin");

    if(cnShow.classList.contains("show")) {
       $("*").click( function(e){
           $("#mandarin").removeClass('show');
       })
    }
    
    var enShow = document.getElementById("english");

    if(enShow.classList.contains("show")) {
       $("*").click(function(e){
           $("#english").removeClass('show');
       })
    }
    
    var aslShow = document.getElementById("asl");

    if(aslShow.classList.contains("show")) {
       $("*").click( function(e){
           $("#asl").removeClass('show');
       })
    }

    
    
}