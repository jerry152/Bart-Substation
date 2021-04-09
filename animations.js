var canvasWidth = 1000;
var canvasHeight = 500;

var srcxControlSwitch1;
var srcxControlSwitch2;
var srcxControlSwitch3;

var srcxLockoutRelay1;
var srcxLockoutRelay2;

var srcxSelector;

var sheetWidth1 = 300;
var sheetHeight1 = 150;

var sheetWidth2 = 424;
var sheetHeight2 = 150;

var cols = 2;
var cols2 = 3;

var width = sheetWidth1 / cols;
var height = sheetHeight1;

var widthCS = sheetWidth2 / cols2;
var heightCS = sheetHeight2;

var currentframe1 = 0;
var currentframe2 = 0;
var currentframe3 = 0;
var currentframe4 = 1;
var currentframe5 = 1;
var currentframe6 = 1;

var character = new Image();
character.src = "lockout.png";

var character2 = new Image();
character2.src = "selector.png";

var character3 = new Image();
character3.src = "controlSwitch.png";

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');

function display(){
    ctx.drawImage(character,0,0, width, height, 0, 150, width, height);//lockout1
    ctx.drawImage(character,0,0, width, height, 800, 150, width, height);//lockout2
    ctx.drawImage(character2,0,0, width, height, 0, 0, width, height);//selector
    ctx.drawImage(character3,141,0, widthCS, heightCS, 250, 0, widthCS, heightCS);//control switches
    ctx.drawImage(character3,141,0, widthCS, heightCS, 550, 0, widthCS, heightCS);
    ctx.drawImage(character3,141,0, widthCS, heightCS, 400, 150, widthCS, heightCS);
}

function updateFrameLeftLockout(){
    currentFrame1 = ++currentframe1 % cols;
    srcxLockoutRelay1 = currentFrame1 * width;
    ctx.clearRect(0,150, width, height);
}
function drawImageLeftLockout(){
    updateFrameLeftLockout();
    ctx.drawImage(character,srcxLockoutRelay1,0, width, height, 0, 150, width, height);
}

function updateFrameRightLockout(){
    currentFrame2 = ++currentframe2 % cols;
    srcxLockoutRelay2 = currentFrame2 * width;
    ctx.clearRect(800,150, width, height);
}
function drawImageRightLockout(){
    updateFrameRightLockout();
    ctx.drawImage(character,srcxLockoutRelay2,0, width, height, 800, 150, width, height);
}
function updateFrameSelector(){
    currentFrame3 = ++currentframe3 % cols;
    srcxSelector = currentFrame3 * width;
    ctx.clearRect(0,0, width, height);
}
function drawImageSelector(){
    updateFrameSelector();
    ctx.drawImage(character2,srcxSelector,0, width, height, 0, 0, width, height);
}


function updateFrameControlSwitch1(){
    ctx.clearRect(250,0, width, height);
    if (currentframe4 == 0)
    {
        
        ctx.drawImage(character3,0,0, widthCS, heightCS, 250, 0, widthCS, heightCS);
        currentframe4 = 1;
    }
    else if(currentframe4 == 1)
    {
        
        ctx.drawImage(character3,282,0, widthCS, heightCS, 250, 0, widthCS, heightCS); 
        currentframe4 = 0;
    }

}
function drawImageControlSwitch1(){
    updateFrameControlSwitch1();
    setTimeout(function flicker(){
ctx.drawImage(character3,141,0, widthCS, heightCS, 250, 0, widthCS, heightCS);},500);
}
function updateFrameControlSwitch2(){
    ctx.clearRect(550,0, width, height);
    if (currentframe5 == 0)
    {
        
        ctx.drawImage(character3,0,0, widthCS, heightCS, 550, 0, widthCS, heightCS);
        currentframe5 = 1;
    }
    else if(currentframe5 == 1)
    {
        
        ctx.drawImage(character3,282,0, widthCS, heightCS, 550, 0, widthCS, heightCS); 
        currentframe5 = 0;
    }
}
function drawImageControlSwitch2(){
    updateFrameControlSwitch2();
    setTimeout(function flicker(){
ctx.drawImage(character3,141,0, widthCS, heightCS, 550, 0, widthCS, heightCS);},500);
}
function updateFrameControlSwitch3(){
    ctx.clearRect(400,150, width, height);
    if (currentframe6 == 0)
    {
        
        ctx.drawImage(character3,0,0, widthCS, heightCS, 400, 150, widthCS, heightCS);
        currentframe6 = 1;
    }
    else if(currentframe6 == 1)
    {
        
        ctx.drawImage(character3,282,0, widthCS, heightCS, 400, 150, widthCS, heightCS); 
        currentframe6 = 0;
    }
}
function drawImageControlSwitch3(){
    updateFrameControlSwitch3();
    setTimeout(function flicker(){
ctx.drawImage(character3,141,0, widthCS, heightCS, 400, 150, widthCS, heightCS);},500);
}
setTimeout(display,0);