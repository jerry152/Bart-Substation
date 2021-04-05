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

class AC_Breaker {
    constructor() {
        this.input_kV = 34.5;
        this.max_kV = 38;
        this.frequency = 60;
    }
}


//=======================================================================================
// Selector Switch:
// state - if false = 
class Selector_Switch {
    constructor() {
        this.state = false;
    }
}

//=======================================================================================
//Control Switch: 
class Control_Switch {

    constructor(state) {
        this.state = state;
    }

    get_state() {
        if(this.state)
            return "OPENED";
        return "CLOSED";
    }
}

class Breaker_243 extends Control_Switch {
    constructor(state) {
        super( state == "OPENED" );
    }
    test() {
        var text = this.get_state();
        console.log(text);
        alert( text );
    }
}

//=======================================================================================
//Lockout_Relay: 
class Lockout_Relay {
    constructor() {
        this.state = false;
    }
}
//=======================================================================================





//TRU
// class TRU {
    
// }

//DC Part

