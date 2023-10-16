$(document).ready(function() {
    $("#btn01").click(function() {
        $("#cloud").fadeOut(4000, function() {
            alert("The element was hidden")
        });
    });
    $("#btn02").click(function() {
        $("#cloud").fadeIn(4000);
    });
    $("#btn03").click(function() {
        $("#cloud").fadeToggle("slow");
    });
});