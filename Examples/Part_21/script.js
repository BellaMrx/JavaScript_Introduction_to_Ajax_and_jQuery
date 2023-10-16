$(document).ready(function() {
    $("#btn01").click(function() {
        $("#text").animate({ left: "300px" }, 1000);
        $("#text").animate({ fontSize: "0.5em" }, 2000);
        $("#text").animate({ opacity: "0.0" }, 1000);
        $("#text").animate({
            left: "0px",
            fontSize: "1em",
            opacity: "1.0"
        }, 2000);
    });
    $("#btn02").click(function() {
        $("#text").stop();
    });
});