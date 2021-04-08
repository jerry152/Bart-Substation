var canvasWidth = 500;
var canvasHeight = 500;

var srcx;
var srcx2;
var srcy;

var sheetWidth = 300;
var sheetHeight = 150;

var cols = 2;
var cols2 = 3;

var width = sheetWidth / cols;
var height = sheetHeight;

var currentframe = 0;
var currentframe2 = 0;

var character = new Image();
character.src = "lockout.png";

var character2 = new Image();
character2.src = "selector.png";

var character3 = new Image();
character3.src = "breaker.png";

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');

function updateFrame(){
    currentFrame = ++currentframe % cols;
    currentframe2 = ++currentframe2 % cols2;

    srcx = currentFrame * width;
    srcx2 = currentframe2 * 344;

    srcy = 0;

    ctx.clearRect(0,0, width, height);
    ctx.clearRect(300,0, width, height);
    ctx.clearRect(150,150, 347, 364);
}
function display(){
    ctx.drawImage(character,0,0, width, height, 0, 0, width, height);
    ctx.drawImage(character2,0,0, width, height, 300, 0, width, height);
    ctx.drawImage(character3,0,0, 347, 364, 150, 150, 347, 364);
}
function drawImage(){
    updateFrame();
    ctx.drawImage(character,srcx,srcy, width, height, 0, 0, width, height);
    ctx.drawImage(character2,srcx,srcy, width, height, 300, 0, width, height);
    ctx.drawImage(character3,srcx2,0, 347, 364, 150, 150, 347, 364);

}
setTimeout(display,0);





