$(document).ready(function() {

    $("#btn01").click(function() {
        let backup = "Old link: " + $("a").attr("href");
        $("a").attr("href", $("#inp01").val());
        backup += "\nNew link: " + $("a").attr("href");
        // alert(backup);
        console.log(backup);
    });

});