var paint = (0, 0, 0);

function userId() {
    const xhttp = new XMLHttpRequest();
    var name = document.getElementsByName("userId")[0].value;
    xhttp.onload = function () {
        document.getElementById("user").style.display = "none";
        document.getElementById("application").style.display = "block";
    }
    xhttp.open("GET", "/setname?name=" + name);
    xhttp.send()
}

function setup() {
    createCanvas(850, 430);
}

function draw() {
    if (mouseIsPressed === true) {
        fill(paint);
        stroke(paint);
        ellipse(mouseX, mouseY, 10, 10);
    }
    if (mouseIsPressed === false) {
        fill(10, 10, 10);
    }
}

function colorSetter() {
    paint = document.getElementById("paint").value;
}

function colorEraser() {
    paint = (241, 241, 241);
}

function clearBoard() {
    clear();
}