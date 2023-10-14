"use strict";

let xmlhttp = null;

function recalculate(str) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    if (xmlhttp == null) {
        console.log("Error while creating an XMLHttpRequest object");
    }
    xmlhttp.open("GET", "calc.php?meter=" + str, true);
    xmlhttp.onreadystatechange = parseRecalculate;
    xmlhttp.send();
}

function parseRecalculate() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let xml = xmlhttp.responseXML;
        let miles_response = xml.querySelector('miles');
        let yards_response = xml.querySelector('yards');

        document.querySelector('#miles').value = miles_response.firstChild.nodeValue;
        document.querySelector('#yards').value = yards_response.firstChild.nodeValue;
    } else {
        document.querySelector('#miles').value = 0;
        document.querySelector('#yards').value = 0;
    }
}