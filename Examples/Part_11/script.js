$(document).ready(function() {

    $("#btn01").click(function() {
        $(".frame").append("<p>Paragraph with append()</p>");
    });
    $("#btn02").click(function() {
        $(".frame").prepend("<p>Paragraph with prepend()</p>");
    });
    $("#btn03").click(function() {
        $(".frame").after("<p>Paragraph with after()</p>");
    });
    $("#btn04").click(function() {
        $(".frame").before("<p>Paragraph with before()</p>");
    });

});