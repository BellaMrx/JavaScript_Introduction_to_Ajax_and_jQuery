$(document).ready(function() {
    $("#teaser").click(function() {
        $("#cloud").slideToggle(4000, function() {
            alert("The action is ready")
        });
    });
});