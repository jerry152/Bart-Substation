// Things to consider

function input_logging(who, action, component) {
    var text = who + " requests " + action + " command on " + component + " at " + String(0)
    alert(text);
}

function update_logging(component, action) {
    var text = component + " " + action + " at " + String(0);
    alert(text);
}

function exception_logging(component, action, errmsg) {
    var text = "Failed to " + action + " " + component + " at " + String(0) + " - "+ errmsg;
    alert(text);
}
    
