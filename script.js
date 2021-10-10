var images = [
    "images/life1.png",
    "images/life2.png",
    "images/life3.png",
    "images/life4.png",
    "images/life5.png",
    "images/life6.png",
];
var i = 0;

function slides() {
    document.getElementById("slide").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else
        i = 0;
}
setInterval(slides, 2000);