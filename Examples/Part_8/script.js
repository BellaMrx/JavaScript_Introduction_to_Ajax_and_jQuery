$(document).ready(function() {

    $("#btn01").click(function() {
        let txt = $("#p01").text();
        let htm = $("#p01").html();
        console.log(txt + '\n' + htm);
        //alert(txt + '\n' + htm);
    });

});