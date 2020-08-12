document.getElementById("Rand4").onclick = function() {

var min = 1;
var max = 6;
var rand1 = Math.floor(Math.random() * (max - min + 1) ) + min;
var rand2 = Math.floor(Math.random() * (max - min + 1) ) + min;
var otvet = rand1 + rand2;

 function getRndInteger(min, max) {
 rand1
 };
 function getRndInteger(min, max) {
 rand2
 };

console.log(rand1 + ":" + rand2 + " " + "=" + " " + otvet);
document.getElementById("Message").innerHTML = otvet ;

var styleLeft = getComputedStyle(document.getElementById("Player")).left;
var styleTop = getComputedStyle(document.getElementById("Player")).top;
var player = document.getElementById("Player");

if (parseInt(styleLeft) < 647 & parseInt(styleTop) < 647 ){
player.style.left = parseInt(styleLeft)  + (5 * 57) + "px";
};

if (parseInt(styleLeft) > 647 & parseInt(styleTop) < 647 ) {
    player.style.top  = parseInt(styleTop) + (5 * 57) + "px";
};

if ((parseInt(styleLeft) > 647 || parseInt(styleLeft) < 647) & parseInt (styleTop) > 647) {
    player.style.left = parseInt(styleLeft) - (5 * 57) + "px";
};

if ( parseInt(styleLeft) < 647 & (parseInt(styleTop) > 647 || parseInt (styleTop) < 647)) {
    player.style.top = parseInt (styleTop) - (5* 57) + "px";
};

};
