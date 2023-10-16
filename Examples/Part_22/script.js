$(document).ready(function() {
    $("#time").click(function() {
        $("#dynamic01").load("server-time.php", 
        function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                // alert("External file loaded successfully")
                alert(responseTxt);
            }
            if (statusTxt == "error") {
                alert("Fehler:" + xhr.status + ":" + xhr.statusText);
            }
        });
    });
});