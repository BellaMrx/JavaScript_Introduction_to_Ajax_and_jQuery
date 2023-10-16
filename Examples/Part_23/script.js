$(document).ready(function() {
    $("#meter").keyup(function() {
        //$.get("calc.php?meter=" + $("#meter").val(), function(data, status) {
        $.post("calc.php", { meter: $("#meter").val() }, function(data, status) {
            if (status == "success") {
                var miles_response = data.querySelector("miles");
                var yards_response = data.querySelector("yards");
                $("#miles").val(miles_response.firstChild.nodeValue);
                $("#yards").val(yards_response.firstChild.nodeValue);
            } else {
                $("#miles").val(0);
                $("#yards").val(0);
            }
        });
    });
});