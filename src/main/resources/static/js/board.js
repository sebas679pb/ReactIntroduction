var paint = (0, 0, 0);
var stomp;

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
    stomp();
}

function draw() {
    if (mouseIsPressed === true) {
        fill(paint);
        stroke(paint);
        ellipse(mouseX, mouseY, 10, 10);
        var json = {
            xPos: mouseX,
            yPos: mouseY,
            colors: paint,
            eraser: false,
        }
        refresh(json);
    }
}

function stomp() {
    var socket = new SockJS("/stompEndpoint");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe("/topic/board", function (event) {
            var json = JSON.parse(event.body);
            if(!json.eraser){
                fill(json.colors);
                stroke(json.colors);
                ellipse(json.xPos, json.yPos, 10, 10);
            }else{
                clear();
            }
        });
    });
}

function colorSetter() {
    paint = document.getElementById("paint").value;
}

function colorEraser() {
    paint = (241, 241, 241);
}

function clearBoard() {
    clear();
    var json = {
        eraser: true,
    }
    refresh(json);
}

function refresh(json) {
    stompClient.send("/topic/board", {}, JSON.stringify(json));
}