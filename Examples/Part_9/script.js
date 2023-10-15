$(document).ready(function() {

    $("#btn01").click(function() {
        let inp = "Your input: <b>";
        inp += $("#inp01").val() + "</b>";
        $("#txt").text(inp);
        $("#htm").html(inp);
        $("#inp01").val("Thanks");
    });

});