"use strict";

let xmlhttp = new XMLHttpRequest();
let url = "data.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myParse(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myParse(arr) {
    let out = '<ul>';
    for (let i = 0; i < arr.length; i++) {
        out += '<li>' + '<a href="' + arr[i].url + '">' +
            arr[i].location + '</a>' + " = " + arr[i].zipcode + '</li>';
    }
    out += '</ul>';
    document.querySelector('#output').innerHTML = out;
}