// Testing

// V_252_01_CLOSE_CMD



function filter(cmd) {
    var details = cmd.split("_");
    // Go to the detials, run the command

    var location = details[0];
    var breaker = details[1];
    var number = details[2];
    var state = details[3];

    update_logging(breaker + "-" + number, state);
}
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

    get_Output_Voltage() {
        return this.output_kV;
    }
    
    //Setters ================================
    set_Input_Voltage(input){
        this.input_kV = input;
    }
    set_Max_Voltage(max){
        this.max_kV = max;
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

    constructor(state) {
        super();
        this.state = state;
    }

    get_state() {
        if(this.state)
            return "OPENED";
        return "CLOSED";
    }

    trip() {
        this.state = true;
        this.set_Output_Voltage( this.get_Input_Voltage() );
    }

    close() {
        this.state = false;
        this.set_Output_Voltage(0);
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
                    alert("Overcurrent reading on " + String(this.num));

                    this.trip();



                } else {
                    if( this.get_Output_Voltage() < 30 ) { // Temp Undercurrent Value
                        // We have an over current Undercurrent
                        alert("Undercurrent!")
                        this.trip();
                    }
                }
            } else {
                // State change 
                this.close();
            }

            //alert("Breaker" + String(this.num))
            //Send Updates to adjacent modules
            alert( "Breaker" + String(this.num) + " input " + String(this.get_Input_Voltage()) + "; out" + String(this.get_Output_Voltage()) );
            //Frontend methods to send 
            


        }
    }
}

class Breaker_252 extends Control_Switch {
    constructor(state, num) {
        super( state == "OPENED" );
        this.num = num;
    }

    test() {
        alert( "test" );
    }
}

//=======================================================================================
//Lockout_Relay: 
class Lockout_Relay {
    constructor() {
        this.state = false;
    }
    //Getters ================================
    getState(){
        return this.state;
    }

    getBreaker(){
        return this.state;
    }

    getStateName() {
        if( this.state )
            //return "RELAY TRIPPED";
            return this.trip();
        else 
           // return "RESETED";
           return this.reset();
    }



    //Setters ================================
    setState(state) {
        
        this.state = state;
    }

    setBreaker(breaker){

        this.breaker = breaker;
    }

    update(acknowledged,state){

        if(acknowledged){

            alert("Open all Breakers");
            
        }
        else{
            alert("Failed to change. Must be acknowledged first!");
        }



    }

    trip(){
        this.state = true;

    }

    close(){
        this.state = false;
    }





}


class Lockout_286_1 extends Lockout_Relay{
    constructor(breaker,number,state){
        this.breaker = breaker;
        this.number = number;
        this.state = state;
    }

    getState(){
        if(this.state){
            this.trip();
            alert("Lockout 286_1 Opened")
            b_252_1.update(SS.getState(),true);
            b_252_8.update(SS.getState(), true);

        }
        else{
            alert("186 Relay is not open!")
        }

    }
    getBreaker(){
        if(this.breaker == "H1" && this.breaker == "H8" && this.breaker != "H2"){
            return this.state = true;
        }
        else{
            return this.state = false;
        }


    }

    

    




}


class Lockout_286_2 extends Lockout_Relay{

    constructor(breaker,state){
        this.breaker = breaker;
        this.state = state;
    }

    getState(){
        if(this.state){
            alert("Lockout 286_2 Opened");
            b_252_2.update(SS.getState(), true);
            b_252_8.update(SS.getState(), true);

        }
        else{
            alert("186 Relay is not open")
        }
    }
    
    getBreaker(){
        if(this.breaker == "H2" && this.breaker == "H8" && this.breaker != "H1"){
            return this.state = true;
        }
        


    }

    
}

//=======================================================================================

let b_252_1 = new Breaker_252("CLOSED" , 1);
let b_252_2 = new Breaker_252("CLOSED" , 2);
let b_252_8 = new Breaker_252("CLOSED" , 8);

let l_286_1 = new Lockout_Relay();
let l_286_2 = new Lockout_Relay();
let SS = new Selector_Switch(false);

let b_286_1 = new Lockout_286_1();
let b_286_2 = new Lockout_286_2();
let LR = new Lockout_Relay(false);

