setTimeout(display,1000);
let b_252_1 = new Breaker_252("CLOSED" , 1);
let b_252_2 = new Breaker_252("CLOSED" , 2);
let b_252_8 = new Breaker_252("CLOSED" , 8);

let l_286_1 = new Lockout_Relay();
let l_286_2 = new Lockout_Relay();
let SS = new Selector_Switch(false);

filter("breaker_252_1");