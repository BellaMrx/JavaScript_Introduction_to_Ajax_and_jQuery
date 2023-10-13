"use strict";

function changeContent() {
    let xmlhttp = null;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    if (xmlhttp == null) {
        console.log("Error while creating an XMLHttpRequest object");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.querySelector('#refreshtime').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "php/server-time.php", false);
    xmlhttp.send();
}

function timestamp() {
    let today = new Date();
    document.querySelector('#timestamp').innerHTML = today;
}