
var canvasWidth = 500;
var canvasHeight = 500;


var srcx;
var srcy;

var sheetWidth = 300;
var sheetHeight = 150;

var cols = 2;

var width = sheetWidth / cols;
var height = sheetHeight;

var currentframe = 0;

var character = new Image();
character.src = "lockout.png";

var character2 = new Image();
character2.src = "selector.png";

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');

function updateFrame(){
    currentFrame = ++currentframe % cols;
    srcx = currentFrame * width;
    srcy = 0;

    ctx.clearRect(0,0, width, height);
    ctx.clearRect(300,0, width, height);
}

function drawImage(){
    updateFrame();
    ctx.drawImage(character,srcx,srcy, width, height, 0, 0, width, height);
    ctx.drawImage(character2,srcx,srcy, width, height, 300, 0, width, height);

}


setInterval(function(){
    drawImage();
}, 200);



