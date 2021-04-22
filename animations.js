
//changable size of canvas

var canvasWidth = 750;
var canvasHeight = 768;


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
//scale
var scaleWidth = width / 3;
var scaleHeight = height / 3;

var scaleWidthCS = widthCS / 3;
var scaleHeightCS = heightCS / 3;

var buttonScale = 20;
//cycles through frames
var currentframe1 = 1;
var currentframe2 = 1;
var currentframe3 = 0;
var orange1frame = 1;
var orange2frame = 0;
var orange3frame = 0;
var blue1frame = 0;
var green1frame = 0;
var green2frame = 0;
var green3frame = 0;
var red1frame = 1;
var red2frame = 1;
var red3frame = 1;

var character = new Image();
character.src = "lockout.png";
sheetWidth1 = character.naturalWidth;
sheetHeight1 = character.naturalHeight;

var character2 = new Image();
character2.src = "selector.png";

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
var character8 = new Image();
character8.src = "meter1.png";

//meter2
var character9 = new Image();
character9.src = "meter2.png";

//meter3
var character10 = new Image();
character10.src = "meter3.png";

//labels
var character11 = new Image();
character11.src = "selectorLabel.png";

var character12 = new Image();
character12.src = "CSLabel1.png";

var character13 = new Image();
character13.src = "CSLabel2.png";

var character14 = new Image();
character14.src = "lockoutLabel1.png";

var character15 = new Image();
character15.src = "CSLabel3.png";

var character16 = new Image();
character16.src = "lockoutLabel2.png";

//changable locations of sprites
//lockout
var lockout1PosX = 0;
var lockout1PosY = 475;

var lockout2PosX = 615;
var lockout2PosY = 475;
//selector
var selectorPosX = 0;
var selectorPosY = 170;
//controlswitches
var controlSwitch1X = 200;
var controlSwitch1Y = 170;

var controlSwitch2X = 450;
var controlSwitch2Y = 170;

var controlSwitch3X = 325;
var controlSwitch3Y = 475;
//lights
var orangeLight1Y = 140;
var orangeLight1X = 0;

var orangeLight2Y = 453;
var orangeLight2X = 48;

var orangeLight3Y = 453;
var orangeLight3X = 662;

var redLight1Y = 140; 
var redLight1X = 293; 

var redLight2Y = 140; 
var redLight2X = 543; 

var redLight3Y = 453; 
var redLight3X = 417; 

var blueLightY = 140; 
var blueLightX = 95; 

var greenLight1Y = 140; 
var greenLight1X = 200; 

var greenLight2Y = 140; 
var greenLight2X = 450; 

var greenLight3Y = 453; 
var greenLight3X = 325; 
//meters
var meter1Y = 0;
var meter1X = 0;

var meter2Y = 0; 
var meter2X = 250;

var meter3Y =0;
var meter3X =500;
//labels
var label1Y =300;
var label1X =0;

var label2Y =300;
var label2X =195;

var label3Y =300;
var label3X =445;

var label4Y =605;
var label4X =0;

var label5Y =605;
var label5X =320;

var label6Y =605;
var label6X =610;

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');

function display(){
    //lockout
    ctx.drawImage(character,sheetWidth1/2,0, width, height, lockout1PosX, lockout1PosY, scaleWidth, scaleHeight);
    ctx.drawImage(character,sheetWidth1/2,0, width, height, lockout2PosX, lockout2PosY, scaleWidth, scaleHeight);
    //selector
    ctx.drawImage(character2,0,0, width, height, selectorPosX, selectorPosY, scaleWidth, scaleHeight);
    //controlSwitches
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);
    //orange
    ctx.drawImage(character4,buttonWidth/2,0, widthB, heightB, orangeLight1X, orangeLight1Y, buttonScale, buttonScale);
    ctx.drawImage(character4,0,0, widthB, heightB, orangeLight2X, orangeLight2Y, buttonScale, buttonScale);
    ctx.drawImage(character4,0,0, widthB, heightB, orangeLight3X, orangeLight3Y, buttonScale, buttonScale);
    //red
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight1X, redLight1Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight2X, redLight2Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight3X, redLight3Y, buttonScale, buttonScale); 
    //blue
    ctx.drawImage(character6,0,0, widthB, heightB, blueLightX, blueLightY, buttonScale, buttonScale); 
    //green
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight1X, greenLight1Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight2X, greenLight2Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight3X, greenLight3Y, buttonScale, buttonScale); 
    //meters
    ctx.drawImage(character8,0,0, character8.naturalWidth, character8.naturalHeight, meter1X, meter1Y, 250, 140); 
    ctx.drawImage(character9,0,0, character9.naturalWidth, character9.naturalHeight, meter2X, meter2Y, 250, 140); 
    ctx.drawImage(character10,0,0, character10.naturalWidth, character10.naturalHeight, meter3X, meter3Y, 250, 140); 
    //labels
    ctx.drawImage(character11,0,0, character11.naturalWidth, character11.naturalHeight, label1X, label1Y, 125, 70); 
    ctx.drawImage(character12,0,0, character12.naturalWidth, character12.naturalHeight, label2X, label2Y, 125, 70); 
    ctx.drawImage(character13,0,0, character13.naturalWidth, character13.naturalHeight, label3X, label3Y, 125, 70); 
    ctx.drawImage(character14,0,0, character14.naturalWidth, character14.naturalHeight, label4X, label4Y, 125, 70); 
    ctx.drawImage(character15,0,0, character15.naturalWidth, character15.naturalHeight, label5X, label5Y, 125, 70); 
    ctx.drawImage(character16,0,0, character16.naturalWidth, character16.naturalHeight, label6X, label6Y, 125, 70); 

}

// function updateFrameLeftLockout(){
//     currentFrame1 = ++currentframe1 % cols;
//     srcxLockoutRelay1 = currentFrame1 * width;
//     ctx.clearRect(lockout1PosX,lockout1PosY, scaleWidth, scaleHeight);
// }
// function drawImageLeftLockout(){
//     updateFrameLeftLockout();
//     ctx.drawImage(character,srcxLockoutRelay1,0, width, height, lockout1PosX, lockout1PosY, scaleWidth, scaleHeight);
// }

// function updateFrameRightLockout(){
//     currentFrame2 = ++currentframe2 % cols;
//     srcxLockoutRelay2 = currentFrame2 * width;
//     ctx.clearRect(lockout2PosX,lockout2PosY, scaleWidth, scaleHeight);
// }
// function drawImageRightLockout(){
//     updateFrameRightLockout();
//     ctx.drawImage(character,srcxLockoutRelay2,0, width, height, lockout2PosX, lockout2PosY, scaleWidth, scaleHeight);
// }

function updateLight(light){
    switch(light){
        case "orange1":
                orange1frame = ++orange1frame % cols;
                srcxOrangeLight = orange1frame * widthB;
                ctx.clearRect(orangeLight1X,orangeLight1Y,buttonScale, buttonScale);
                blue1frame = ++blue1frame % cols;
                srcxBlueLight = blue1frame * widthB;
                ctx.clearRect(blueLightX,blueLightY,buttonScale,buttonScale);
            break;
        
        case "orange2":
            orange2frame = ++orange2frame % cols;
            srcxOrangeLight = orange2frame * widthB;
            ctx.clearRect(orangeLight2X,orangeLight2Y,buttonScale, buttonScale);
            break;
        
        case "orange3":
            orange3frame = ++orange3frame % cols;
            srcxOrangeLight = orange3frame * widthB;
            ctx.clearRect(orangeLight3X,orangeLight3Y,buttonScale,buttonScale);
            break;

        case "lockout1":
            green1frame = ++green1frame % cols;
            srcxGreenLight = green1frame * widthB;
            ctx.clearRect(greenLight1X,greenLight1Y,buttonScale, buttonScale);
            red1frame = ++red1frame % cols;
            srcxRedLight = red1frame * widthB;
            ctx.clearRect(redLight1X,redLight1Y,buttonScale,buttonScale);
            break;

        case "lockout2":
            green2frame = ++green2frame % cols;
            srcxGreenLight = green2frame * widthB;
            ctx.clearRect(greenLight2X,greenLight2Y,buttonScale, buttonScale);
            red2frame = ++red2frame % cols;
            srcxRedLight = red2frame * widthB;
            ctx.clearRect(redLight2X,redLight2Y,buttonScale,buttonScale);
            break;
        
        case "lockout3":
            green3frame = ++green3frame % cols;
            srcxGreenLight = green3frame * widthB;
            ctx.clearRect(greenLight3X,greenLight3Y,buttonScale, buttonScale);
            red3frame = ++red3frame % cols;
            srcxRedLight = red3frame * widthB;
            ctx.clearRect(redLight3X,redLight3Y,buttonScale,buttonScale);
            break;
    }

}
function drawLight(light){
    updateLight(light);
    switch(light){
        case "orange1":
            ctx.drawImage(character4,srcxOrangeLight,0, widthB, heightB, orangeLight1X, orangeLight1Y, buttonScale, buttonScale);
            ctx.drawImage(character6,srcxBlueLight,0,widthB,heightB,blueLightX,blueLightY,buttonScale,buttonScale);
            break;
        
        case "orange2":
            ctx.drawImage(character4,srcxOrangeLight,0, widthB, heightB, orangeLight2X, orangeLight2Y, buttonScale, buttonScale);
            break;
        
        case "orange3":
            ctx.drawImage(character4,srcxOrangeLight,0, widthB, heightB, orangeLight3X, orangeLight3Y, buttonScale, buttonScale);
            break;
        
        case "lockout1":
            ctx.drawImage(character7,srcxGreenLight,0, widthB, heightB, greenLight1X, greenLight1Y, buttonScale, buttonScale);
            ctx.drawImage(character5,srcxRedLight,0,widthB,heightB,redLight1X,redLight1Y,buttonScale,buttonScale);
            break;

        case "lockout2":
            ctx.drawImage(character7,srcxGreenLight,0, widthB, heightB, greenLight2X, greenLight2Y, buttonScale, buttonScale);
            ctx.drawImage(character5,srcxRedLight,0,widthB,heightB,redLight2X,redLight2Y,buttonScale,buttonScale);
            break;
            
        case "lockout3":
            ctx.drawImage(character7,srcxGreenLight,0, widthB, heightB, greenLight3X, greenLight3Y, buttonScale, buttonScale);
            ctx.drawImage(character5,srcxRedLight,0,widthB,heightB,redLight3X,redLight3Y,buttonScale,buttonScale);
            break;
    }
}

// b_252_1.update(SS.getState(), false);
function closeSwitch(name){
    switch(name){
        case "selector" :
                currentframe3++;
                ctx.clearRect(selectorPosX,selectorPosY, scaleWidth, scaleHeight);
                ctx.drawImage(character2,0,0, width, height, selectorPosX, selectorPosY, scaleWidth, scaleHeight);
                break;
        case "lockout1" :
                currentframe1++;
                ctx.clearRect(lockout1PosX,lockout1PosY, scaleWidth, scaleHeight);
                ctx.drawImage(character,0,0, width, height, lockout1PosX, lockout1PosY, scaleWidth, scaleHeight);
                break;
        case "lockout2" :
                currentframe2++;
                ctx.clearRect(lockout2PosX,lockout2PosY, scaleWidth, scaleHeight);
                ctx.drawImage(character,0,0, width, height, lockout2PosX, lockout2PosY, scaleWidth, scaleHeight);
                break;
        case "CSswitch1" :
                // check if off light is already on
                if(red1frame!=1){
                    //if not then turn off light on
                    drawLight("lockout1");
                }
                //off position 
                ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);
                //delay 500ms then neutral position.
                setTimeout(function flicker(){
                    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);},500);
                break; 
        case "CSswitch2":
                if(red2frame!=1){
                    drawLight("lockout2");
                }
                ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);
                setTimeout(function flicker(){
                    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);},500);
            break;
        
        case "CSswitch3":
                if(red3frame!=1){
                    drawLight("lockout3");
                }
                ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);
                setTimeout(function flicker(){
                    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);},500);
            break;
    }
}
function openSwitch(name){
    switch(name){
        case "selector" :
            currentframe3++;
            ctx.clearRect(selectorPosX,selectorPosY, scaleWidth, scaleHeight);
            ctx.drawImage(character2,width,0, width, height, selectorPosX, selectorPosY, scaleWidth, scaleHeight);
            break;
        case "lockout1" :
            currentframe1++;
            ctx.clearRect(lockout1PosX,lockout1PosY, scaleWidth, scaleHeight);
            ctx.drawImage(character,width,0, width, height, lockout1PosX, lockout1PosY, scaleWidth, scaleHeight);
            break;
        case "lockout2" :
            currentframe2++;
            ctx.clearRect(lockout2PosX,lockout2PosY, scaleWidth, scaleHeight);
            ctx.drawImage(character,width,0, width, height, lockout2PosX, lockout2PosY, scaleWidth, scaleHeight);
            break;
        case "CSswitch1" :
            //check if on light already on
            if(green1frame!=1){
                //if off then turn on
                drawLight("lockout1");
            }
            //on position
            ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);
            //then delay 500ms then neutral position
            setTimeout(function flicker(){
                ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);},500);
            break;
        case "CSswitch2":
            if(green2frame!=1){
                drawLight("lockout2");
            }
            ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);
            setTimeout(function flicker(){
                ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);},500);
            break;
        
        case "CSswitch3":
            if(green3frame!=1){
                drawLight("lockout3");
            }
            ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);
            setTimeout(function flicker(){
                ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);},500);
            break;
    }
    
}
function updateFrameControlSwitch(xcoor,name){
    //checks if left side of sprite or right side is clicked on
    switch(name){
        case "switch1":
            if (SS.is_Remote())
            {
                break;
            }
            ctx.clearRect(controlSwitch1X,controlSwitch1Y, scaleWidthCS, scaleHeightCS);
            if (xcoor < (controlSwitch1X + (scaleWidthCS / 2)))
            {
                openSwitch("CSswitch1");
                b_252_1.set_Input_Voltage(40);
                b_252_1.update(SS.get_State(),true);
            }
            else
            {
                closeSwitch("CSswitch1");
                b_252_1.update(SS.get_State(),false);
                
            }
            break;
        
        case "switch2":
            ctx.clearRect(controlSwitch2X,controlSwitch2Y, scaleWidthCS, scaleHeightCS);
            if (xcoor < (controlSwitch2X + (scaleWidthCS / 2)))
            {
                openSwitch("CSswitch2");
                b_252_2.set_Input_Voltage(20);
                b_252_2.update(SS.get_State(), true);
            }
            else
            {
                closeSwitch("CSswitch2");
                b_252_2.update(SS.get_State(), false);
            }
            break;

        case "switch3":
            ctx.clearRect(controlSwitch3X,controlSwitch3Y, scaleWidthCS, scaleHeightCS);
            if (xcoor < (controlSwitch3X + (scaleWidthCS / 2)))
            {
                openSwitch("CSswitch3");
                b_252_8.update(SS.get_State(), true);
            }
            else
            {
                closeSwitch("CSswitch3");
                b_252_8.update(SS.get_State(), false);
            }
            break;
    }
}


/*
function updateFrameControlSwitch1(xcoor){
    ctx.clearRect(controlSwitch1X,controlSwitch1Y, scaleWidthCS, scaleHeightCS);
    if (xcoor < (controlSwitch1X + (scaleWidthCS / 2)))
    {
        if(green1frame!=1){
            drawLight("lockout1");
        }
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);
    }
    else
    {
        if(red1frame!=1){
            drawLight("lockout1");
        }
        ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS); 
    }
    setTimeout(function flicker(){
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);},500);
}
*/
/*
function drawImageControlSwitch1(xcoor){
    
    updateFrameControlSwitch1(xcoor);
    setTimeout(function flicker(){
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch1X, controlSwitch1Y, scaleWidthCS, scaleHeightCS);},500);
}
*/
/*
function updateFrameControlSwitch2(xcoor){
    ctx.clearRect(controlSwitch2X,controlSwitch2Y, scaleWidthCS, scaleHeightCS);
    if (xcoor < (controlSwitch2X + (scaleWidthCS / 2)))
    {
        if(green2frame!=1){
            drawLight("lockout2");
        }
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);
    }
    else
    {
        if(red2frame!=1){
            drawLight("lockout2");
        }
        ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS); 
    }
}
*/
/*
function drawImageControlSwitch2(xcoor){
    updateFrameControlSwitch2(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch2X, controlSwitch2Y, scaleWidthCS, scaleHeightCS);},500);
}
*/
/*
function updateFrameControlSwitch3(xcoor){
    ctx.clearRect(controlSwitch3X,controlSwitch3Y, scaleWidthCS, scaleHeightCS);
    if (xcoor < (controlSwitch3X + (scaleWidthCS / 2)))
    {
        if(green3frame!=1){
            drawLight("lockout3");
        }
        ctx.drawImage(character3,0,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);
    }
    else
    {
        if(red3frame!=1){
            drawLight("lockout3");
        }
        ctx.drawImage(character3,sheetWidth2 * .66,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS); 
    }
}
function drawImageControlSwitch3(xcoor){
    updateFrameControlSwitch3(xcoor);
    setTimeout(function flicker(){
ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch3X, controlSwitch3Y, scaleWidthCS, scaleHeightCS);},500);
}
*/

function getCoor(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    if ((x > selectorPosX && x < selectorPosX + scaleWidth)&& (y > selectorPosY && y < selectorPosY + scaleHeight))
    {
        //if selector sprite is clicked on
        if (currentframe3 % 2 == 0)
        {
            openSwitch("selector");
        }
        else
        {
            closeSwitch("selector");
        }
        SS.swap_State();
        alert( SS.get_State_Name() );
        drawLight("orange1");
    }
    else if ((x > lockout1PosX && x < lockout1PosX + scaleWidth) && (y > lockout1PosY && y < lockout1PosY + scaleHeight))
    {
        //if left lock sprite is clicked on
        if (currentframe1 % 2 == 0)
        {
            openSwitch("lockout1");

            b_286_1.get_State(true);
            openSwitch("CSwitch1");
            openSwitch("CSwitch3");
        }
        else
        {
            closeSwitch("lockout1");
        }
        drawLight("orange2");
    }
    else if ((x > lockout2PosX && x < lockout2PosX + scaleWidth) && (y > lockout2PosY && y < lockout2PosY + scaleHeight))
    {
        //if right lock sprite is clicked on
        if (currentframe2 % 2 == 0)
        {
            openSwitch("lockout2");
        }
        else
        {
            closeSwitch("lockout2");
        }
        drawLight("orange3");
    }
    else if ((x > controlSwitch1X && x < controlSwitch1X + scaleWidthCS) && (y > controlSwitch1Y && y < controlSwitch1Y + scaleHeightCS))
    {
        //if controlswitch sprite is clicked on
        updateFrameControlSwitch(x,"switch1");
    }
    else if ((x > controlSwitch2X && x < controlSwitch2X + scaleWidthCS) && (y > controlSwitch2Y && y < controlSwitch2Y + scaleHeightCS))
    {
        //if controlswitch sprite is clicked on
        updateFrameControlSwitch(x,"switch2");
    }
    else if ((x > controlSwitch3X && x < controlSwitch3X + scaleWidthCS) && (y > controlSwitch3Y && y < controlSwitch3Y + scaleHeightCS))
    {
        //if controlswitch sprite is clicked on
        updateFrameControlSwitch(x,"switch3");
    }
}
setTimeout(display,100);

