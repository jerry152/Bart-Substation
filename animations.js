let b_252_1 = new Breaker_252("CLOSED" , 1);
let b_252_2 = new Breaker_252("CLOSED" , 2);
let b_252_8 = new Breaker_252("CLOSED" , 8);

let SS = new Selector_Switch(false);

//let LR = new Lockout_Relay();


//=======================================================================================
document.getElementById("252-1-close").onclick = function() {
    b_252_1.update(SS.getState, false);
}
document.getElementById("252-1-open").onclick = function() {
    b_252_1.update(SS.getState, true);
}
//=======================================================================================
document.getElementById("252-2-close").onclick = function() {
    b_252_2.update(SS.getState, false);
}
document.getElementById("252-2-open").onclick = function() {
    b_252_2.update(SS.getState, true);
}
//=======================================================================================
document.getElementById("252-8-close").onclick = function() {
    b_252_8.update(SS.getState, false);
}
document.getElementById("252-8-open").onclick = function() {
    b_252_8.update(SS.getState, true);
}
//=======================================================================================