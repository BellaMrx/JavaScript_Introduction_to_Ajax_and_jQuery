$(document).ready(function() {
    $("#btn01").click(function() {
        $("div").hide(1000, function() {
            alert("The element is now hidden")
        });
    });
    $("#btn02").click(function() {
        $("div").show(1000);
    });
    $("#btn03").click(function() {
        $("div").toggle(1000);
    });
});