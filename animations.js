////changable size of canvas

var canvasWidth = 750;
var canvasHeight = 768;

var canvas = document.getElementById('Canvas');
canvas.width = canvasWidth;//give attributes to canvas
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');


//locates current desired sprite on sprite sheet
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

//2frame spritesheet
var sheetWidth1;
var sheetHeight1;

//3frame spritesheet
var sheetWidth2;
var sheetHeight2;

var buttonWidth;
var buttonHeight;
//# of columns in sprite sheets
var cols = 2;
var cols2 = 3;
//width and height of individual sprites
var width = sheetWidth1 / cols;
var height = sheetHeight1;

var widthCS = sheetWidth2 / cols2;
var heightCS = sheetHeight2;

var widthB = buttonWidth / cols;
var heightB = buttonHeight;
//scale of the image sizes based on inital size of pic
var scaleWidth = width / 4;
var scaleHeight = height / 4;

var scaleWidthCS = widthCS / 4;
var scaleHeightCS = heightCS / 4;

var buttonScale = 15;
//used to iterate through frames
var currentframe1 = 1;
var currentframe2 = 1;
var currentframe3 = 0;
var orange1frame = 0;
var orange2frame = 0;
var orange3frame = 0;
var blue1frame = 1;
var green1frame = 0;
var green2frame = 0;
var green3frame = 0;
var red1frame = 1;
var red2frame = 1;
var red3frame = 1;

////sprite images

//lockout
var character = new Image();character.src = "sprites/lockout.png";
sheetWidth1 = character.naturalWidth;
sheetHeight1 = character.naturalHeight;
//selector
var character2 = new Image();character2.src = "sprites/selector.png";
//controlswitch
var character3 = new Image();character3.src = "sprites/controlSwitch.png";
sheetWidth2 = character3.naturalWidth;
sheetHeight2 = character3.naturalHeight;
//orange light
var character4 = new Image();character4.src =  "sprites/orangeLight.png";
buttonWidth = character4.naturalWidth;
buttonHeight = character4.naturalHeight;
//red light 
var character5 = new Image();character5.src = "sprites/redLight.png";
//blue light
var character6 = new Image();character6.src = "sprites/blueLight.png";
//green light
var character7 = new Image();character7.src = "sprites/greenLight.png";

//extra meters
// meter1
// var character8 = new Image();character8.src = "sprites/meter1.png";
// meter2
// var character9 = new Image();character9.src = "sprites/meter2.png";
// meter3
// var character10 = new Image();character10.src = "sprites/meter1.png";
    
//labels
var character11 = new Image();character11.src = "sprites/selectorLabel.png";
var character12 = new Image();character12.src = "sprites/CSLabel1.png";
var character13 = new Image();character13.src = "sprites/CSLabel2.png";
var character14 = new Image();character14.src = "sprites/lockoutLabel1.png";
var character15 = new Image();character15.src = "sprites/CSLabel3.png";
var character16 = new Image();character16.src = "sprites/lockoutLabel2.png";
var character17 = new Image();character17.src = "sprites/selectorLabel2.png";
var character18 = new Image();character18.src = "sprites/CSLabel4.png";
var character19 = new Image();character19.src = "sprites/CSLabel5.png";
var character20 = new Image();character20.src = "sprites/lockoutLabel3.png";
var character21 = new Image();character21.src = "sprites/CSLabel6.png";
var character22 = new Image();character22.src = "sprites/CSLabel7.png";
var character23 = new Image();character23.src = "sprites/cableLabel1.png";
var character24 = new Image();character24.src = "sprites/cableLabel2.png";
var character25 = new Image();character25.src = "sprites/cableLabel3.png";

//connecting breaker features 
var character26 = new Image();character26.src = "sprites/topLeftCable.png";
var character27 = new Image();character27.src = "sprites/topRightCable.png";
var character28 = new Image();character28.src = "sprites/bottomCables.png";
//var character33 = new Image();character33.src = "sprites/redH.png";
//transformers
var character29 = new Image();character29.src = "sprites/leftTransformer.png";
var character30 = new Image();character30.src = "sprites/rightTransformer.png";
////changable locations of AC sprites
//lockout
var lockout1PosX = 0;var lockout1PosY = 250;

var lockout2PosX = 660;var lockout2PosY = 250;
//selector
var selectorPosX = 0;var selectorPosY = 85;
//controlswitches
var controlSwitch1X = 250;var controlSwitch1Y = 85;

var controlSwitch2X = 450;var controlSwitch2Y = 85;

var controlSwitch3X = 350;var controlSwitch3Y = 250;
//lights
var orangeLight1X = 70;var orangeLight1Y = 70;

var orangeLight2X = 35;var orangeLight2Y = 235;

var orangeLight3X = 695;var orangeLight3Y = 235;

var redLight1X = 320;var redLight1Y = 70;  

var redLight2X = 520;var redLight2Y = 70;  

var redLight3X = 420;var redLight3Y = 235;  

var blueLightX = 0; var blueLightY = 70; 

var greenLight1X = 250; var greenLight1Y = 70; 

var greenLight2X = 450; var greenLight2Y = 70;

var greenLight3X = 350; var greenLight3Y = 235; 

////changeable locations of DC sprites
//lockout
var lockout3PosX = 660;var lockout3PosY = 425;

//selector
var selector2PosX = 0;var selector2PosY = 425;
//controlswitches
var controlSwitch4X = 250;var controlSwitch4Y = 425;

var controlSwitch5X = 450;var controlSwitch5Y = 425;

var controlSwitch6X = 250;var controlSwitch6Y = 575;

var controlSwitch7X = 450;var controlSwitch7Y = 575;
//lights
var orangeLight4X = 70;var orangeLight4Y = 410;

var orangeLight5X = 695;var orangeLight5Y = 410;

var redLight5X = 320;var redLight5Y = 410; 

var redLight6X = 520;var redLight6Y = 410; 

var redLight7X = 320;var redLight7Y = 560; 

var redLight8X = 520; var redLight8Y = 560;

var blueLight2X = 0;var blueLight2Y = 410; 

var greenLight4X = 250;var greenLight4Y = 410; 

var greenLight5X = 450;var greenLight5Y = 410; 

var greenLight6X = 250;var greenLight6Y = 560; 

var greenLight7X = 450;var greenLight7Y = 560;

//blinking lockout light variables
var blink1;
var blink2;



setTimeout(function (){//Shows sprites on first refresh of page
    
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
    ctx.drawImage(character6,0,0, widthB, heightB, orangeLight1X, orangeLight1Y, buttonScale, buttonScale);
    ctx.drawImage(character4,0,0, widthB, heightB, orangeLight2X, orangeLight2Y, buttonScale, buttonScale);
    ctx.drawImage(character4,0,0, widthB, heightB, orangeLight3X, orangeLight3Y, buttonScale, buttonScale);
    //red
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight1X, redLight1Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight2X, redLight2Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight3X, redLight3Y, buttonScale, buttonScale); 
    //blue
    ctx.drawImage(character4,buttonWidth/2,0, widthB, heightB, blueLightX, blueLightY, buttonScale, buttonScale); 
    //green
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight1X, greenLight1Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight2X, greenLight2Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight3X, greenLight3Y, buttonScale, buttonScale); 
    //meters
    //can be used in future projects if necessary 
    // ctx2.drawImage(character8,0,0, character8.naturalWidth, character8.naturalHeight, 60, 0, 125, 70); 
    // ctx2.drawImage(character9,0,0, character9.naturalWidth, character9.naturalHeight, 310, 0, 125, 70); 
    // ctx2.drawImage(character10,0,0, character10.naturalWidth, character10.naturalHeight, 560, 0, 125, 70); 
    // //labels
    ctx.drawImage(character11,0,0, character11.naturalWidth, character11.naturalHeight, 0, 175, 93.75, 52.5); 
    ctx.drawImage(character12,0,0, character12.naturalWidth, character12.naturalHeight, 145, 100, 93.75, 52.5); 
    ctx.drawImage(character13,0,0, character13.naturalWidth, character13.naturalHeight, 545, 100, 93.75, 52.5); 
    ctx.drawImage(character14,0,0, character14.naturalWidth, character14.naturalHeight, 0, 343, 93.75, 52.5); 
    ctx.drawImage(character15,0,0, character15.naturalWidth, character15.naturalHeight, 145, 260, 93.75, 52.5); 
    ctx.drawImage(character16,0,0, character16.naturalWidth, character16.naturalHeight, 655, 343, 93.75, 52.5); 
    ctx.drawImage(character17,0,0, character17.naturalWidth, character17.naturalHeight, 0, 510, 93.75, 52.5); 
    ctx.drawImage(character18,0,0, character18.naturalWidth, character18.naturalHeight, 145, 435, 93.75, 52.5); 
    ctx.drawImage(character19,0,0, character19.naturalWidth, character19.naturalHeight, 545, 435, 93.75, 52.5); 
    ctx.drawImage(character20,0,0, character20.naturalWidth, character20.naturalHeight, 655, 518, 93.75, 52.5); 
    ctx.drawImage(character21,0,0, character21.naturalWidth, character21.naturalHeight, 145, 585, 93.75, 52.5); 
    ctx.drawImage(character22,0,0, character22.naturalWidth, character22.naturalHeight, 545, 585, 93.75, 52.5); 
    ctx.drawImage(character23,0,0, character23.naturalWidth, character23.naturalHeight, 0, 0, 93.75, 52.5); 
    ctx.drawImage(character23,0,0, character23.naturalWidth, character23.naturalHeight, 660, 0, 93.75, 52.5);
    ctx.drawImage(character24,0,0, character24.naturalWidth, character24.naturalHeight, 50, 645, 93.75, 52.5);
    ctx.drawImage(character25,0,0, character25.naturalWidth, character25.naturalHeight, 50, 710, 93.75, 52.5);

    //Cables
    ctx.drawImage(character26,0,0, character26.naturalWidth, character26.naturalHeight, 84, 3, 253.75, 82); 
    ctx.drawImage(character27,0,0, character27.naturalWidth, character27.naturalHeight, 450, 3, 253.75, 82); 
    //ctx.drawImage(character28,0,0, character28.naturalWidth, character28.naturalHeight, 132, 657, 530, 150); 
   // ctx.drawImage(character33,0,0, character33.naturalWidth, character33.naturalHeight, 161, 516, 412, 58); 

    //transformers
    ctx.drawImage(character29,0,0, character29.naturalWidth, character29.naturalHeight, 209, 200, 212, 303); 
    ctx.drawImage(character30,0,0, character30.naturalWidth, character30.naturalHeight, 366, 200, 212, 303); 

    //DC Sprites
        //CS
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch4X, controlSwitch4Y, scaleWidthCS, scaleHeightCS);
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch5X, controlSwitch5Y, scaleWidthCS, scaleHeightCS);
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch6X, controlSwitch6Y, scaleWidthCS, scaleHeightCS);
    ctx.drawImage(character3,sheetWidth2/3,0, widthCS, heightCS, controlSwitch7X, controlSwitch7Y, scaleWidthCS, scaleHeightCS);
        //selector
    ctx.drawImage(character2,0,0, width, height, selector2PosX, selector2PosY, scaleWidth, scaleHeight);
        //lockout
    ctx.drawImage(character,sheetWidth1/2,0, width, height, lockout3PosX, lockout3PosY, scaleWidth, scaleHeight);
        //lights
            //orange
    ctx.drawImage(character6,0,0, widthB, heightB, orangeLight4X, orangeLight4Y, buttonScale, buttonScale);
    ctx.drawImage(character4,0,0, widthB, heightB, orangeLight5X, orangeLight5Y, buttonScale, buttonScale);
            //green
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight4X, greenLight4Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight5X, greenLight5Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight6X, greenLight6Y, buttonScale, buttonScale); 
    ctx.drawImage(character7,0,0, widthB, heightB, greenLight7X, greenLight7Y, buttonScale, buttonScale); 
            //red
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight5X, redLight5Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight6X, redLight6Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight7X, redLight7Y, buttonScale, buttonScale); 
    ctx.drawImage(character5,buttonWidth/2,0, widthB, heightB, redLight8X, redLight8Y, buttonScale, buttonScale); 
            //blue
    ctx.drawImage(character4,buttonWidth/2,0, widthB, heightB, blueLight2X, blueLight2Y, buttonScale, buttonScale);
    
    //cabe lines to connect breaker and the lines 
    ctx.beginPath();
    ctx.moveTo(292, 147);
    ctx.lineTo(292, 275);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(495, 147);
    ctx.lineTo(495, 275);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(292, 515);
    ctx.lineTo(292, 575);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(493, 515);
    ctx.lineTo(493, 575);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(292, 542.5);
    ctx.lineTo(493, 542.5);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(190, 690);
    ctx.lineTo(570, 690);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(190, 720);
    ctx.lineTo(570, 720);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(493, 720);
    ctx.lineTo(493, 700);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(292, 690);
    ctx.lineTo(292, 670);
    ctx.lineWidth = 6;
    ctx.stroke();
    
}, 700);

//takes the location clicked on and connects to the right sprite to give animation
function getCoor(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    if ((x > selectorPosX && x < selectorPosX + scaleWidth) && (y > selectorPosY && y < selectorPosY + scaleHeight))
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
        
        b_286_1.close();
        //if left lock sprite is clicked on

        // if (is blinking && not acknowledged)
        //     break;
        // if ( b_286_1.is_Acknowledged() )
        // {
            
        //     if (currentframe1 % 2 == 1)
        //     {   
        //         openSwitch("lockout1");
        //         blink1 = setInterval(drawLight, 250,"orange2");
        //         b_286_1.blinking = 1;
        //         b_286_1.set_State(true);
        //         b_286_1.set_ClickableFalse();
        //         //b_286_2.set_ClickableFalse();
                
        //         openSwitch("CSswitch1"); b_252_1.update(SS.get_State(),true);
        //         openSwitch("CSswitch3"); b_252_8.update(SS.get_State(),true);
        //         closeSwitch("CSswitch2");b_252_2.update(SS.get_State(),false);
            
        //     }
        //     else
        //     {
        //         b_286_1.set_State(false);
        //         drawLight("orange2");
        //         closeSwitch("lockout1");
        //         closeSwitch("CSswitch1"); b_252_1.update(SS.get_State(),false);
                
        //     }
        
        // //if(lockout acknowledged)
        // //  {
        //     //clearInterval(blink1);
        //     //orange2frame = 0;
        //     //drawLight("orange2");
        // //}
        
        
        // }
    }
    else if ((x > lockout2PosX && x < lockout2PosX + scaleWidth) && (y > lockout2PosY && y < lockout2PosY + scaleHeight))
    {
        b_286_2.close();
        //if right lock sprite is clicked on

        // if (b_286_2.is_Clickable() )
        // {
        //     {
        //         b_286_2.set_State(false);
        //         drawLight("orange3");
        //         closeSwitch("lockout2");
        //         closeSwitch("CSswitch2")
        //     }
        //     //if(lockout acknowledged)
        //     //  {
        //         //clearInterval(blink2);
        //         //orange3frame = 0;
        //         //drawLight("orange3");
        //     //}
           
        // }
    }
    else if ((x > controlSwitch1X && x < controlSwitch1X + scaleWidthCS) && (y > controlSwitch1Y && y < controlSwitch1Y + scaleHeightCS))
    {
        //if controlswitch sprite is clicked on
        if (!b_286_1.state && !b_286_2.state && !(b_252_2.state && b_252_8.state))
            updateFrameControlSwitch(x,"switch1");
    }
    else if ((x > controlSwitch2X && x < controlSwitch2X + scaleWidthCS) && (y > controlSwitch2Y && y < controlSwitch2Y + scaleHeightCS))
    {
        //if controlswitch sprite is clicked on
        if (!b_286_1.state && !b_286_2.state && !(b_252_1.state && b_252_8.state))
            updateFrameControlSwitch(x,"switch2");
    }
    else if ((x > controlSwitch3X && x < controlSwitch3X + scaleWidthCS) && (y > controlSwitch3Y && y < controlSwitch3Y + scaleHeightCS))
    {
        //if controlswitch sprite is clicked on
        if (!b_286_1.state && !b_286_2.state && !(b_252_1.state && b_252_2.state))
            updateFrameControlSwitch(x,"switch3");
    }
}
    //based on desired light, this clears the desired sprite and updates frame # to
    //change drawlight()
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
//This makes the lights turn on/off 
function drawLight(light){
    updateLight(light);
    switch(light){
        case "orange1":
            ctx.drawImage(character6,srcxOrangeLight,0, widthB, heightB, orangeLight1X, orangeLight1Y, buttonScale, buttonScale);
            ctx.drawImage(character4,srcxBlueLight,0,widthB,heightB,blueLightX,blueLightY,buttonScale,buttonScale);
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

// this function gives the animation to close a switch
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
                ctx.drawImage(character,width,0, width, height, lockout1PosX, lockout1PosY, scaleWidth, scaleHeight);
                break;
        case "lockout2" :
                currentframe2++;
                ctx.clearRect(lockout2PosX,lockout2PosY, scaleWidth, scaleHeight);
                ctx.drawImage(character,width,0, width, height, lockout2PosX, lockout2PosY, scaleWidth, scaleHeight);
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

//this gives the animation to turn a switch on
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
            ctx.drawImage(character,0,0, width, height, lockout1PosX, lockout1PosY, scaleWidth, scaleHeight);
            break;
        case "lockout2" :
            currentframe2++;
            ctx.clearRect(lockout2PosX,lockout2PosY, scaleWidth, scaleHeight);
            ctx.drawImage(character,0,0, width, height, lockout2PosX, lockout2PosY, scaleWidth, scaleHeight);
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
//for control switch the left or right side of switch can be clicked on
function updateFrameControlSwitch(xcoor,name){
    //checks if left side of sprite or right side is clicked on
    switch(name){

        /* PseudoCode

        */


        case "switch1":
            if (SS.is_Remote()) // This has to go - NO LOGIC IN ANIMATIONS
            {
                b_252_1.update(SS.get_State(),false, true);
                break;
            }
            ctx.clearRect(controlSwitch1X,controlSwitch1Y, scaleWidthCS, scaleHeightCS);
            if (xcoor < (controlSwitch1X + (scaleWidthCS / 2)))
            {
                openSwitch("CSswitch1");
                b_252_1.update(SS.get_State(),true, true);
            }
            else
            {
                closeSwitch("CSswitch1");
                b_252_1.update(SS.get_State(),false, true);
                
            }
            break;
        
        case "switch2":
            if(SS.is_Remote()){
                b_252_2.update(CS.get_State(),false, true);
                break;
            }
            ctx.clearRect(controlSwitch2X,controlSwitch2Y, scaleWidthCS, scaleHeightCS);
            if (xcoor < (controlSwitch2X + (scaleWidthCS / 2)))
            {
                openSwitch("CSswitch2");
                b_252_2.update(SS.get_State(), true, true);
            }
            else
            {
                closeSwitch("CSswitch2");
                b_252_2.update(SS.get_State(), false, true);
            }
            break;

        case "switch3":
            if(SS.is_Remote()){
                b_252_8.update(CS.get_State(),false, true);
                break;
            }

            ctx.clearRect(controlSwitch3X,controlSwitch3Y, scaleWidthCS, scaleHeightCS);
            if (xcoor < (controlSwitch3X + (scaleWidthCS / 2)))
            {
                openSwitch("CSswitch3");
                b_252_8.update(SS.get_State(), true, true);
            }
            else
            {
                closeSwitch("CSswitch3");
                b_252_8.update(SS.get_State(), false, true);
            }
            break;
    }
}

