$(document).ready(function() {

    $("#btn01").click(function() {
        $("#p01").text("Button was clicked");
    });
    $("#btn01").mouseenter(function() {
        $("#p01").text("Mouse over the button");
    });
    $("#btn01").mouseleave(function() {
        $("#p01").text("Mouse has left the button");
    });
    /* $("#btn01").hover( function() {
        $("#p01").text("Mouse over the button"); 
     },
     function() {
        $("#p01").text("Mouse has left the button"); 
     } );*/

});