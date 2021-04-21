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
    set_input_Volatage(input){
        this.input_kV = input;
    }
    set_max_Voltage(max){
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
    getState() {
        return this.state;
    }

    getStateName() {
        if( this.state )
            return "REMOTE";
        else 
            return "LOCAL";
    }

    isRemote() {
        return this.state;
    }

    isLocal() {
        return !this.state;
    }

    //Setters ================================

    swapState() {
        this.state = ! this.state;
    }

    setState(state){
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
        set_Output_Voltage( get_Input_Voltage() );
    }

    close() {
        this.state = false;
        set_Output_Voltage(0);
    }
    
    update( SelectorState, state ) {
        if( SelectorState ) {
            alert( "Cant do that, im in remote!" );
            alert( SS.getStateName() );
        } 
        else {

            alert( "Local!" );

            //managed to update

            //Backcode do updates
            if(state) { //open
                // check input/output to see if there is an over/under currents
                this.trip();

                if( get_ou )

                // Once 
            } else {
                this.close();
            }

            //Frontend methods to send update
            


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

            alert();
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




//=======================================================================================


