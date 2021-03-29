
document.getElementById("input").onclick = function() {
    input_logging("User", "Trip", "242-0");
}

document.getElementById("update").onclick = function() {
    update_logging("242-0", "Trip");
}

document.getElementById("error").onclick = function() {
    exception_logging("242-0", "Trip", "Failure....");
}

document.getElementById("cmdbtn").onclick = function() {
    var cmd = document.getElementById("cmdInput").value;
    filter(cmd);
}