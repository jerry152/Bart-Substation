// Testing

//=======================================================================================
//AC Requirements

// Nominal Voltage         = 34.5 kV
// Rated Max Voltage       = 38 kV
// Rated Low Frequency     = 80 kV
// Rated Full Wave Impulse = 150 kV
// Rated Frequency         = 60 Hz
// Rated Continous Current = 1200 A

// class DC_Breaker {

// }

// breaker 143
//     ->DC CS

// brealer 243
//     ->AC CS

class AC_Properties {
    constructor() {
        this.input_kV = 34.5;
        this.min_kV = 30;
        this.max_kV = 38;
        this.output_kV = 0;
    }
    //Getters ================================
    get_Input_Voltage(){
        return this.input_kV;
    }

    get_Max_Voltage(){
        return this.max_kV;
    }

    get_Min_Voltage() {
        return this.min_kV;
    }

    get_Output_Voltage() {
        return this.output_kV;
    }
    
    //Setters ================================
    set_Input_Voltage(input){
        this.input_kV = input;
    }
    set_Output_Voltage(output) {
        this.output_kV = output;
    }
}


//=======================================================================================
// Selector Switch:
// state - if false = 
class Selector_Switch {
    //state -> True -> REMOTE
    constructor(state) {
        this.state = state;
    }
    //Getters ================================
    get_State() {
        return this.state;
    }

    get_State_Name() {
        if( this.state )
            return "REMOTE";
        else 
            return "LOCAL";
    }

    is_Remote() {
        return this.state;
    }

    is_Local() {
        return !this.state;
    }

    //Setters ================================

    swap_State() {
        this.state = ! this.state;
    }

    set_State(state){
        this.state = state;
    }
}

//=======================================================================================
//Control Switch: 
class Control_Switch extends AC_Properties {

    constructor(state, num) {
        super();
        this.state = state;
        this.num = num;
    }

    get_State() {
        if(this.state)
            return "OPENED";
        return "CLOSED";
    }

    set_State(state) {
        if(state) {
            this.trip();
        } else {
            this.close();
        }
    }

    trip() {
        this.state = true;
        this.set_Output_Voltage( this.get_Input_Voltage() );

        openSwitch("CSswitch" + String(this.num)); 

    }

    close() {
        this.state = false;
        this.set_Output_Voltage(0);

        closeSwitch("CSswitch" + String(this.num));

    }

    overCurrent() { //Overcurrent N Alarm
        this.set_Input_Voltage(40.0);

        this.trip(); 
        
        switch( this.num ) {
            case 1: //Left Breaker 252
                //Activate Left Lockout
                b_286_1.trip();
                break;
            case 2:
                //Activate Right Lockout
                b_286_2.trip();
                break;
            default:
                break;
        }

    }

    underVoltage() { //UnderVoltage N Alarm
        this.set_Input_Voltage(20);
        
        this.trip();
    }
    
    update( SelectorState, state ) {
        if( SelectorState ) {
            alert( "Cant do that, im in remote!" );
            alert( SS.get_State_Name() );
        } 
        else {

            //alert( "Local!" );

            //managed to update

            //Backcode do updates
            if(state) { //open
                // check input/output to see if there is an over/under currents
                this.trip();

                if( this.get_Output_Voltage() > this.get_Max_Voltage() ) {
                    // We have an over current
                    // alert("Overcurrent reading on " + String(this.num));

                    this.trip();



                } else {
                    if( this.get_Output_Voltage() < 30 ) { // Temp Undercurrent Value
                        // We have an over current Undercurrent
                        // alert("Undercurrent!")
                        this.trip();
                                            
                    }
                }
            } else {
                // State change 
                this.close();
            }

            //alert("Breaker" + String(this.num))
            //Send Updates to adjacent modules
            //alert( "Breaker" + String(this.num) + " input " + String(this.get_Input_Voltage()) + "; out" + String(this.get_Output_Voltage()) );
            //Frontend methods to send 
            


        }
    }
}

class Breaker_252 extends Control_Switch {
    constructor(state, num) {
        super( state == "OPENED", num );
    }

    test() {
        alert( "test" );
    }
}

//=======================================================================================
//Lockout_Relay: 
class Lockout_Relay {
    constructor(number) {
        this.state = false;
        this.num = number;
        this.blinking = 0;
        this.acknowledged = false;
        
    }
    //Getters ================================
    get_State(){
        return this.state;
    }

    is_Acknowledged() {
        return this.acknowledged;
    }

    //Setters ================================
    set_State(state) {
        this.state = state;
    }

    set_Acknowledged(acknowledged) {
        this.acknowledged = acknowledged;
    }

    acknowledging() {
        this.set_Acknowledged(true);
        
        switch( this.num ) {
            case 1:
                clearInterval(blink1);
                orange2frame = 0;
                drawLight("orange2");
                break;
            case 2:
                clearInterval(blink2);
                orange3frame = 0;
                drawLight("orange3");
                break;
        }

        
    }

    trip() {
        //Do the Opening Animations

        alert("trip Command on 286 " + String( this.num ));

        switch( this.num ) {
            case 1:
                //Do the animations for Left LR
                alert("Left Lockout Trip Command");
                openSwitch("lockout1");
                blink1 = setInterval(drawLight, 250,"orange2");
                this.blinking = 1;
                this.set_State(true);
                this.set_Acknowledged(false);
                
                b_252_1.trip();
                b_252_8.trip();
                b_252_2.close();
            
                break;
            case 2:
                //Do the animations for Right LR
                alert("Left Lockout Trip Command");
                openSwitch("lockout2");
                blink2 = setInterval(drawLight, 250,"orange3");
                this.blinking = 1;
                this.set_State(true);
                this.set_Acknowledged(false);
                
                b_252_2.trip();
                b_252_8.trip();
                b_252_1.close();
                break;
        }
    }

    close() {
        if( this.is_Acknowledged() && this.get_State() ) {
            this.set_State(false);
            this.set_Acknowledged(false);
            switch( this.num ) {
                case 1:
                    drawLight("orange2");
                    closeSwitch("lockout1");
                    b_252_1.close();
                    closeSwitch("CSswitch1"); 
                    b_252_8.close();
                    closeSwitch("CSswitch3");
                    break;
                case 2:
                    drawLight("orange3");
                    closeSwitch("lockout2");
                    b_252_2.close();
                    closeSwitch("CSswitch2"); 
                    b_252_8.close();
                    closeSwitch("CSswitch3");
                    break;
            }
            
        }
    }
}


class Lockout_286_1 extends Lockout_Relay{
    constructor(number, state){
    super();
        this.state = false;
        this.number = number;
        this.blinking = 0;
        
    }

    get_State(){
        if(this.state && b_286_2.state(false)){
            //  this.trip();
            alert("Lockout 286_1 Opened")
            b_252_1.update(SS.get_State(), true);
            b_252_8.update(SS.get_State(), true);
            b_252_2.update(SS.get_State(), false);

        }

        if(b_252_1.get_Output_Voltage() < 30 || b_252_8.get_Output_Voltage() < 30 ){

            clearInterval(blink2);
            b_286_2.blinking = 0;
            b_286_2.set_ClickableTrue();
            b_286_1.set_ClickableTrue();
            orange3frame = 0;
            drawLight("orange3");

            }
        
        else{
            alert("186 Relay is not open or 286_2 must be closed first!")
        }

    }


    update(acknowledged,state){

        if(acknowledged){

            

            clearInterval(blink1);
            b_286_1.blinking = 0;
            b_286_1.set_ClickableTrue();
            b_286_2.set_ClickableTrue();
            orange2frame = 0;
            drawLight("orange2");

            

        }

        else{
            alert("Nothing");
            
        }


    }

  



}


class Lockout_286_2 extends Lockout_Relay{

    constructor(number,state){
    
       super();
       this.state = false;
       this.number = number;
       this.blinking = 0;
    }

    get_State(){
        if(this.state){
            alert("Lockout 286_2 Opened");
            b_252_1.update(SS.get_State(), false);
            b_252_2.update(SS.get_State(), true);
            b_252_8.update(SS.get_State(), true);

        }
        else{
            alert("186 Relay is not open")
        }

        if(b_252_2.get_Output_Voltage() < 30 || b_252_8.get_Output_Voltage() < 30 ){

            clearInterval(blink2);
            b_286_2.blinking = 0;
            b_286_2.set_ClickableTrue();
            b_286_1.set_ClickableTrue();
            orange3frame = 0;
            drawLight("orange3");

            }


    }


    update(acknowledged,state){

        if(acknowledged){
          
            clearInterval(blink2);
            b_286_2.blinking = 0;
            b_286_2.set_ClickableTrue();
            b_286_1.set_ClickableTrue();
            orange3frame = 0;
            drawLight("orange3");
        }

        else{
            alert("Nothing");
        }


    }
    
   

    
}

//=======================================================================================

let b_252_1 = new Breaker_252("CLOSED" , 1);
let b_252_2 = new Breaker_252("CLOSED" , 2);
let b_252_8 = new Breaker_252("CLOSED" , 3);

let b_286_1 = new Lockout_Relay(1);
let b_286_2 = new Lockout_Relay(2);
let SS = new Selector_Switch(false);
//let CS = new Control_Switch(false);



function overCurrentAlarm(num) {
    // alert("Overcurrent on " + String(num));

    switch(num) {
        case 1:
            b_252_1.overCurrent();
            break;
        case 2:
            b_252_2.overCurrent();
        break;
        default:
            alert("Invalid breaker Number");
    }
}

function underVoltageAlarm(num) {
    // alert("Undervoltage on " + String(num));

    switch(num) {
        case 1:
            b_252_1.underVoltage();
            
            break;
        case 2:
            b_252_2.underVoltage();
        break;
        default:
            alert("Invalid breaker Number");
    }
}

function filter(cmd) {
    var details = cmd.split("_");
    // Go to the detials, run the command

    var type = details[0];
    var breaker = details[1];
    var number = details[2];
    var state = details[3].toLowerCase();

    if( SS.get_State() ) {

    if(breaker == "252") {
        switch(number) {
            case "1":
                //alert( state == "open" );
                b_252_1.set_State( state == "open" );
                
                // alert( b_252_1.get_State() );

                if( b_252_1.get_State() == "CLOSED" ) {
                    closeSwitch("CSswitch1");
                } else {
                    openSwitch("CSswitch1");
                }
                
                break;
            case "2":
                b_252_2.set_State( state == "open" );

                if( b_252_2.get_State() == "CLOSED" ) {
                    closeSwitch("CSswitch2");
                } else {
                    openSwitch("CSswitch2");
                }

                break;
            case "8":
                b_252_8.set_State( state == "open" );

                if( b_252_8.get_State() == "CLOSED" ) {
                    closeSwitch("CSswitch3");
                } else {
                    openSwitch("CSswitch3");
                }

                break;
            default:
                alert("Invalid ID number for Breakers 252");
        }
    } else {
        if(breaker == "243") {
            if (state == "remote") {
                SS.set_State( true );
                openSwitch("selector");
            } else {
                if(state == "local") {
                    SS.set_State( false );
                    closeSwitch("selector");
                } else {
                    alert("Invalid Input for Selector Switch 243")
                }
            }
        }
    }
    } else {
        alert("Selector Switch must be on REMOTE!");
    }
}

            