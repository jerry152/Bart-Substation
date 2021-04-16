/*let b_252_1 = new Breaker_252("CLOSED" , 1);
let b_252_2 = new Breaker_252("CLOSED" , 2);
let b_252_8 = new Breaker_252("CLOSED" , 8);

let SS = new Selector_Switch(false);

//let LR = new Lockout_Relay();


document.getElementById("252-1-close").onclick = function() {
    b_252_1.update(SS.getState, false);
}
document.getElementById("252-1-open").onclick = function() {
    b_252_1.update(SS.getState, true);
}

document.getElementById("252-2-close").onclick = function() {
    b_252_2.update(SS.getState, false);
}
document.getElementById("252-2-open").onclick = function() {
    b_252_2.update(SS.getState, true);
}

document.getElementById("252-8-close").onclick = function() {
    b_252_8.update(SS.getState, false);
}
document.getElementById("252-8-open").onclick = function() {
    b_252_8.update(SS.getState, true);
}*/

//changable size of canvas

var canvasWidth = 500;
var canvasHeight = 250;


var srcxControlSwitch1;
var srcxControlSwitch2;
var srcxControlSwitch3;

var srcxLockoutRelay1;
var srcxLockoutRelay2;

var srcxSelector;

var srcxOrangeLight;

var srcxBlueLight;

var srcxRedLight;

var srcxGreenLight;

//2frame sheet
var sheetWidth1;
var sheetHeight1;

//3frame sheet
var sheetWidth2;
var sheetHeight2;

var buttonWidth;
var buttonHeight;

var cols = 2;
var cols2 = 3;

var width = sheetWidth1 / cols;
var height = sheetHeight1;

var widthCS = sheetWidth2 / cols2;
var heightCS = sheetHeight2;

var widthB = buttonWidth / cols;
var heightB = buttonHeight;

//cycles through frames
var currentframe1 = 0;
var currentframe2 = 0;
var currentframe3 = 0;
var orange1frame = 1;
var orange2frame = 1;
var orange3frame = 1;
var blue1frame = 0;
var green1frame = 1;
var green2frame = 0;
var green3frame = 0;
var red1frame = 0;
var red2frame = 1;
var red3frame = 1;

var character = new Image();
character.src = "lockout.png";
character.style.width = "100%";
sheetWidth1 = character.naturalWidth;
sheetHeight1 = character.naturalHeight;
var character2 = new Image();
character2.src = "selector.png";
character2.style.width = "100%";
var character3 = new Image();
character3.src = "controlSwitch.png";
sheetWidth2 = character3.naturalWidth;
sheetHeight2 = character3.naturalHeight;

var character4 = new Image();
character4.src =  "orangeLight.png";
buttonWidth = character4.naturalWidth;
buttonHeight = character4.naturalHeight;
//red light 
var character5 = new Image();
character5.src = "redLight.png";
buttonWidth = character5.naturalWidth;
buttonHeight = character5.naturalHeight;
//blue light
var character6 = new Image();
character6.src = "blueLight.png";

//blue light
var character6 = new Image();
character6.src = "blueLight.png";

//green light
var character7 = new Image();
character7.src = "greenLight.png";

//meter1
// var character8 = new Image();
// character8.src = "meter1.png";

//meter2
//var character9 = new Image();
//character9.src = "meter2.png";

//meter3
//var character10 = new Image();
//character9.src = "meter3.png";

//changable locations of sprites

var lockout1PosX = 0;
var lockout1PosY = 145;

var lockout2PosX = 400;
var lockout2PosY = 85;

var selectorPosX = 0;
var selectorPosY = 40;

var controlSwitch1X = 125;
var controlSwitch1Y = 40;

var controlSwitch2X = 275;
var controlSwitch2Y = 40;

var controlSwitch3X = 200;
var controlSwitch3Y = 145;

var orangeLight1Y = 20;
var orangeLight1X = 0;

var orangeLight2Y = 125;
var orangeLight2X = 26;

var orangeLight3Y = 65;
var orangeLight3X = 427;

var redLight1Y = 20; 
var redLight1X = 180; 

var redLight2Y = 20; 
var redLight2X = 328; 

var redLight3Y = 125; 
var redLight3X = 253; 

var blueLightY = 20; 
var blueLightX = 55; 

var greenLight1Y = 20; 
var greenLight1X = 125; 

var greenLight2Y = 20; 
var greenLight2X = 275; 

var greenLight3Y = 125; 
var greenLight3X = 200; 

//var meter1Y = 0;
//var meter2X = 20;

//var meter2Y = 0; 
//var meter2X = 20;

//var meter3Y =0;
//var meter3X =20;

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');

function display(){
    
    ctx.drawImage(character,0,0, width, height, lockout1PosX, lockout1PosY, width, height);//lockout1
    ctx.drawImage(character,0,0, width, height, lockout2PosX, lockout2PosY, width, height);//lockout2
    ctx.drawImage(character2,0,0, width, height, selectorPosX, selectorPosY, width, height);//selector
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS);//control switches
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS);
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS);
    ctx.drawImage(character4,buttonWidth/2,0, widthB, heightB, orangeLight1X, orangeLight1Y, 18, 18);//lights
    ctx.drawImage(character4,buttonWidth/2,0, widthB, heightB, orangeLight2X, orangeLight2Y, 18, 18);
    ctx.drawImage(character4,buttonWidth/2,0, widthB, heightB, orangeLight3X, orangeLight3Y, 18, 18);
    ctx.drawImage(character5,0,0, widthB, heightB, redLight1X, redLight1Y, 18, 18); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight2X, redLight2Y, 18, 18); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight3X, redLight3Y, 18, 18); 
    ctx.drawImage(character6,0,0, widthB, heightB, blueLightX, blueLightY, 18, 18); 
    ctx.drawImage(character7,buttonWidth/2,0, widthB, heightB, greenLight1X, greenLight1Y, 18, 18); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight2X, greenLight2Y, 18, 18); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight3X, greenLight3Y, 18, 18); 
    //ctx.drawImage(character8,0,0, widthB, heightB, meter1X, meter1Y, 18, 18); 
    //ctx.drawImage(character9,0,0, widthB, heightB, meter2X, meter2Y, 18, 18); 
    //ctx.drawImage(character10,0,0, widthB, heightB, meter3X, meter3Y, 18, 18); 



}

function updateFrameLeftLockout(){
    currentFrame1 = ++currentframe1 % cols;
    srcxLockoutRelay1 = currentFrame1 * width;
    ctx.clearRect(lockout1PosX,lockout1PosY, width, height);
}
function drawImageLeftLockout(){
    updateFrameLeftLockout();
    ctx.drawImage(character,srcxLockoutRelay1,0, width, height, lockout1PosX, lockout1PosY, width, height);
}

function updateFrameRightLockout(){
    currentFrame2 = ++currentframe2 % cols;
    srcxLockoutRelay2 = currentFrame2 * width;
    ctx.clearRect(lockout2PosX,lockout2PosY, width, height);
}
function drawImageRightLockout(){
    updateFrameRightLockout();
    ctx.drawImage(character,srcxLockoutRelay2,0, width, height, lockout2PosX, lockout2PosY, width, height);
}
function updateFrameSelector(){
    currentFrame3 = ++currentframe3 % cols;
    srcxSelector = currentFrame3 * width;
    ctx.clearRect(selectorPosX,selectorPosY, width, height);
}
function drawImageSelector(){
    updateFrameSelector();
    ctx.drawImage(character2,srcxSelector,0, width, height, selectorPosX, selectorPosY, width, height);
}
function updateLight(light){
    switch(light){
        case "orange1":
                orange1frame = ++orange1frame % cols;
                srcxOrangeLight = orange1frame * widthB;
                ctx.clearRect(orangeLight1X,orangeLight1Y,18, 18);
                blue1frame = ++blue1frame % cols;
                srcxBlueLight = blue1frame * widthB;
                ctx.clearRect(blueLightX,blueLightY,18,18);
            break;
        
        case "orange2":
            orange2frame = ++orange2frame % cols;
            srcxOrangeLight = orange2frame * widthB;
            ctx.clearRect(orangeLight2X,orangeLight2Y,18, 18);
            break;
        
        case "orange3":
            orange3frame = ++orange3frame % cols;
            srcxOrangeLight = orange3frame * widthB;
            ctx.clearRect(orangeLight3X,orangeLight3Y,18,18);
            break;

        case "lockout1":
            green1frame = ++green1frame % cols;
            srcxGreenLight = green1frame * widthB;
            ctx.clearRect(greenLight1X,greenLight1Y,18, 18);
            red1frame = ++red1frame % cols;
            srcxRedLight = red1frame * widthB;
            ctx.clearRect(redLight1X,redLight1Y,18,18);
            break;

        case "lockout2":
            green2frame = ++green2frame % cols;
            srcxGreenLight = green2frame * widthB;
            ctx.clearRect(greenLight2X,greenLight2Y,18, 18);
            red2frame = ++red2frame % cols;
            srcxRedLight = red2frame * widthB;
            ctx.clearRect(redLight2X,redLight2Y,18,18);
            break;
        
        case "lockout3":
            green3frame = ++green3frame % cols;
            srcxGreenLight = green3frame * widthB;
            ctx.clearRect(greenLight3X,greenLight3Y,18, 18);
            red3frame = ++red3frame % cols;
            srcxRedLight = red3frame * widthB;
            ctx.clearRect(redLight3X,redLight3Y,18,18);
            break;
    }

}
function drawLight(light){
    updateLight(light);
    switch(light){
        case "orange1":
            ctx.drawImage(character4,srcxOrangeLight,0, widthB, heightB, orangeLight1X, orangeLight1Y, 18, 18);
            ctx.drawImage(character6,srcxBlueLight,0,widthB,heightB,blueLightX,blueLightY,18,18);
            break;
        
        case "orange2":
            ctx.drawImage(character4,srcxOrangeLight,0, widthB, heightB, orangeLight2X, orangeLight2Y, 18, 18);
            break;
        
        case "orange3":
            ctx.drawImage(character4,srcxOrangeLight,0, widthB, heightB, orangeLight3X, orangeLight3Y, 18, 18);
            break;
        
        case "lockout1":
            ctx.drawImage(character7,srcxGreenLight,0, widthB, heightB, greenLight1X, greenLight1Y, 18, 18);
            ctx.drawImage(character5,srcxRedLight,0,widthB,heightB,redLight1X,redLight1Y,18,18);
            break;

        case "lockout2":
            ctx.drawImage(character7,srcxGreenLight,0, widthB, heightB, greenLight2X, greenLight2Y, 18, 18);
            ctx.drawImage(character5,srcxRedLight,0,widthB,heightB,redLight2X,redLight2Y,18,18);
            break;
            
        case "lockout3":
            ctx.drawImage(character7,srcxGreenLight,0, widthB, heightB, greenLight3X, greenLight3Y, 18, 18);
            ctx.drawImage(character5,srcxRedLight,0,widthB,heightB,redLight3X,redLight3Y,18,18);
            break;
    }
}


function updateFrameControlSwitch1(xcoor){
    ctx.clearRect(controlSwitch1X,controlSwitch1Y, widthCS, heightCS);
    if (xcoor < (controlSwitch1X + (widthCS / 2)))
    {
        if(green1frame!=1){
            drawLight("lockout1");
        }
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS);
    }
    else
    {
        if(red1frame!=1){
            drawLight("lockout1");
        }
        ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS); 
    }

}
function drawImageControlSwitch1(xcoor){
    
    updateFrameControlSwitch1(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, widthCS, heightCS);},500);
}
function updateFrameControlSwitch2(xcoor){
    ctx.clearRect(controlSwitch2X,controlSwitch2Y, width, height);
    if (xcoor < (controlSwitch2X + (widthCS / 2)))
    {
        if(green2frame!=1){
            drawLight("lockout2");
        }
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS);
    }
    else
    {
        if(red2frame!=1){
            drawLight("lockout2");
        }
        ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS); 
    }
}
function drawImageControlSwitch2(xcoor){
    updateFrameControlSwitch2(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, widthCS, heightCS);},500);
}
function updateFrameControlSwitch3(xcoor){
    ctx.clearRect(controlSwitch3X,controlSwitch3Y, width, height);
    if (xcoor < (controlSwitch3X + (widthCS / 2)))
    {
        if(green3frame!=1){
            drawLight("lockout3");
        }
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS);
    }
    else
    {
        if(red3frame!=1){
            drawLight("lockout3");
        }
        ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS); 
    }
}
function drawImageControlSwitch3(xcoor){
    updateFrameControlSwitch3(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, widthCS, heightCS);},500);
}

function getCoor(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    //ask fernando about this 
    console.log("x: " + x + " y: " + y);
    if ((x > selectorPosX && x < selectorPosX + width)&& (y > selectorPosY && y < selectorPosY + height))
    {
        drawImageSelector();
        drawLight("orange1");
    }
    else if ((x > lockout1PosX && x < lockout1PosX + width) && (y > lockout1PosY && y < lockout1PosY + height))
    {
        drawImageLeftLockout();
        drawLight("orange2");
    }
    else if ((x > lockout2PosX && x < lockout2PosX + width) && (y > lockout2PosY && y < lockout2PosY + height))
    {
        drawImageRightLockout();
        drawLight("orange3");
    }
    else if ((x > controlSwitch1X && x < controlSwitch1X + widthCS) && (y > controlSwitch1Y && y < controlSwitch1Y + heightCS))
    {
        drawImageControlSwitch1(x);
    }
    else if ((x > controlSwitch2X && x < controlSwitch2X + widthCS) && (y > controlSwitch2Y && y < controlSwitch2Y + heightCS))
    {
        drawImageControlSwitch2(x);
    }
    else if ((x > controlSwitch3X && x < controlSwitch3X + widthCS) && (y > controlSwitch3Y && y < controlSwitch3Y + heightCS))
    {
        drawImageControlSwitch3(x);
    }
}
setTimeout(display,0);

var render = function(){
    if (document.documentElement.clientWidth < 1000)
    {
        canvas.width = document.documentElement.clientWidth;
    }

};

window.addEventListener("resize", render);

