"use strict";

let dictionary = [
    { "location": "Amsterdam", "zipcode": 1234 },
    { "location": "Tokyo", "zipcode": 2468 },
    { "location": "Cairo", "zipcode": 1357 }
];

document.querySelector('#output').innerHTML = "<ul>" +
    "<li>" + dictionary[0].location + " = " + dictionary[0].zipcode + "</li>" +
    "<li>" + dictionary[1].location + " = " + dictionary[1].zipcode + "</li>" +
    "<li>" + dictionary[2].location + " = " + dictionary[2].zipcode + "</li></ul>";

/*var txt = "<ul>";  
for(var i = 0; i<dictionary.length; i++) {
  txt += "<li>" + dictionary[i].location + " = " + dictionary[i].zipcode + "</li>";
}
txt += "</ul>";
document.querySelector('#output').innerHTML = txt;*/