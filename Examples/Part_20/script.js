$(document).ready(function() {
    $("#btn01").click(function() {
        $("#ball").animate({
            left: "300px"
        }, 1000);
        $("#ball").animate({
            width: "1px"
        }, 2000);
        $("#ball").animate({
            opacity: "0.0"
        }, 1000);
        $("#ball").animate({
            left: "0px",
            width: "100px",
            opacity: "1.0"
        }, 2000);
    });
});